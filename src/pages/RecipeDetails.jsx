import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const RecipeDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [likeDisabled, setLikeDisabled] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/all-recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipe");
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
        setLikes(data.likeCount || 0);

        // Disable like if it's your own recipe or you've already liked it
        if (user) {
          if (data.userEmail === user.email) {
            setLikeDisabled(true);
          } else if (data.likedBy?.includes(user.email)) {
            setLikeDisabled(true);
          }
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, user]);

  const handleLike = () => {
    if (!user) {
      toast.error("Please login to like the recipe.");
      return;
    }

    if (recipe.userEmail === user.email) {
      toast.error("You cannot like your own recipe.");
      return;
    }

    // Optimistic update
    setLikes((prev) => prev + 1);
    setLikeDisabled(true);

    fetch(`http://localhost:3002/all-recipes/${id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update like count");
        return res.json();
      })
      .then((data) => {
        toast.success("You liked this recipe!");
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update like count.");
        setLikes((prev) => prev - 1); // revert like
        setLikeDisabled(false); // re-enable
      });
  };

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!recipe)
    return <p className="text-center text-gray-500 mt-8">No recipe found.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-600 mb-4 text-center">
        {recipe.title}
      </h1>

      <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/600x400")
          }
          className="w-full h-96 object-cover"
        />
      </div>

      <p className="text-gray-700 text-lg mb-6">{recipe.description}</p>

      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        {recipe.cuisine && (
          <span className="badge badge-outline badge-warning">
            {recipe.cuisine}
          </span>
        )}
        {recipe.categories?.map((cat, idx) => (
          <span
            key={idx}
            className="badge badge-outline badge-accent capitalize"
          >
            {cat}
          </span>
        ))}
        {recipe.servings && (
          <span className="badge badge-ghost">Serves: {recipe.servings}</span>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        {recipe.ingredients?.length ? (
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No ingredients listed.</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        {recipe.instructions?.length ? (
          <ol className="list-decimal list-inside space-y-1">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-500">No instructions provided.</p>
        )}
      </div>

      {/* Like Section */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-gray-600 text-sm">
          ❤️ {likes} {likes === 1 ? "person interested" : "people interested"} in
          this recipe
        </p>
        <button
          onClick={handleLike}
          className="btn btn-outline btn-primary btn-sm"
          disabled={likeDisabled}
        >
          {likeDisabled ? "Liked" : "Like this recipe"}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
