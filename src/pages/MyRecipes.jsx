import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

import { useMeta } from "../providers/MetaContext";
const MyRecipes = () => {
  const { setMeta } = useMeta();
  useEffect(() => {
    setMeta({
      title: "My Recipes | Munchy Magic",
      description:
        "This is your recipes that you uploaded. Browse all delicious recipes from various cuisines.",
    });
  }, []);
  const { user } = useContext(AuthContext);
  const [myRecipes, setMyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Fetch user recipes
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch(
      `https://munchy-magic-server.onrender.com/my-recipes?userEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to load recipes.");
        setLoading(false);
      });
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(
        `https://munchy-magic-server.onrender.com/all-recipes/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.success("Recipe deleted!");
        setMyRecipes((prev) => prev.filter((r) => r._id !== id));
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to delete recipe.");
    }
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">
          My Recipes
        </h1>
        {myRecipes.length === 0 ? (
          <p className="text-center text-gray-500">No recipes found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myRecipes.map((recipe) => (
              <div key={recipe._id} className="card bg-base-100 shadow-md p-4">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Cuisine:</strong> {recipe.cuisine || "N/A"}
                </p>
                {/* <p className="text-sm text-gray-600 mt-1">
                <strong>Prep Time:</strong> {recipe.prepTime || "N/A"}
              </p> */}
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Prep Time:</strong>{" "}
                  {recipe.prepTime?.hours || recipe.prepTime?.minutes
                    ? `${recipe.prepTime?.hours || 0}h ${
                        recipe.prepTime?.minutes || 0
                      }m`
                    : "N/A"}
                </p>

                <p className="text-sm mt-1">
                  <strong>Ingredients:</strong>{" "}
                  {recipe.ingredients?.join(", ") || "None"}
                </p>
                <p className="text-sm mt-1">
                  <strong>Categories:</strong>{" "}
                  {recipe.categories?.join(", ") || "None"}
                </p>
                <p className="text-sm mt-1">❤️ {recipe.likeCount || 0} likes</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(recipe)}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for updating recipe */}
        {editingRecipe && (
          <Modal
            recipe={editingRecipe}
            onClose={() => setEditingRecipe(null)}
            onSave={(updatedRecipe) => {
              // Update recipe in list
              const updatedList = myRecipes.map((r) =>
                r._id === editingRecipe._id ? { ...r, ...updatedRecipe } : r
              );
              setMyRecipes(updatedList);
              setEditingRecipe(null);
              toast.success("Recipe updated!");
            }}
          />
        )}
      </div>
    </>
  );
};

export default MyRecipes;
