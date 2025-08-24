import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [servings, setServings] = useState("");
  const [cookingTime, setCookingTime] = useState({ hours: "", minutes: "" });
  const [prepTime, setPrepTime] = useState({ hours: "", minutes: "" });
  const [cuisine, setCuisine] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const cuisineOptions = [
    "Bangladeshi",
    "Indian",
    "Italian",
    "Chinese",
    "Mexican",
  ];
  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks"];

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const handleInstructionChange = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      imageUrl,
      description,
      ingredients,
      instructions,
      servings,
      cookingTime,
      prepTime,
      cuisine,
      categories: selectedCategories,
      likeCount: 0,
      userEmail: user?.email, // ✅ Add logged-in user's email
    };

    fetch("https://munchy-magic-server.onrender.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Recipe added to DB:", data);
        toast.success("Recipe added successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add recipe.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 dark:from-neutral dark:to-neutral-content py-12 px-6 sm:px-12 lg:px-24 flex justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-base-200 p-10 rounded-3xl shadow-2xl border border-orange-200 dark:border-neutral space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 dark:text-orange-400 mb-8 tracking-wide">
          🍽️ Add a New Recipe
        </h1>
        <p className="text-center text-lg text-orange-500 dark:text-orange-300 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
          Enter your recipe’s details, instructions, and image URL to share your
          dish with food lovers everywhere!
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Recipe Title */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2 block">
              Recipe Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Recipe Title"
              className="input input-bordered input-lg w-full text-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Image URL Input */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2 block">
              Recipe Image URL <span className="text-red-500">*</span>
            </label>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Image Preview"
                onError={(e) => (e.target.style.display = "none")}
                className="w-full sm:w-64 h-44 object-cover rounded-xl mb-4 shadow-lg border border-orange-300 dark:border-orange-600 mx-auto"
              />
            )}
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/recipe.jpg"
              className="input input-bordered w-full"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2 block">
              Short Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full h-24 resize-y text-base"
              placeholder="Write a short description about your recipe..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3 block">
              Ingredients
            </label>
            <div className="space-y-2">
              {ingredients.map((ing, idx) => (
                <input
                  key={idx}
                  type="text"
                  name={`ingredients[${idx}]`}
                  className="input input-bordered w-full"
                  value={ing}
                  onChange={(e) => handleIngredientChange(idx, e.target.value)}
                  placeholder="e.g. 2 cups flour"
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm mt-3"
              onClick={() => setIngredients([...ingredients, ""])}
            >
              ➕ Add Ingredient
            </button>
          </div>

          {/* Instructions */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3 block">
              Instructions
            </label>
            <div className="space-y-3">
              {instructions.map((ins, idx) => (
                <textarea
                  key={idx}
                  name={`instructions[${idx}]`}
                  className="textarea textarea-bordered w-full h-24 resize-y text-base"
                  value={ins}
                  onChange={(e) => handleInstructionChange(idx, e.target.value)}
                  placeholder={`Step ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm mt-3"
              onClick={() => setInstructions([...instructions, ""])}
            >
              ➕ Add Step
            </button>
          </div>

          {/* Servings & Times */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2">
                Servings
              </label>
              <input
                type="number"
                name="servings"
                min={1}
                className="input input-bordered w-full"
                placeholder="e.g. 4"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
              />
            </div>

            {/* Cooking Time */}
            <div>
              <label className="block text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2">
                Cooking Time
              </label>
              <div className="flex space-x-3">
                <input
                  type="number"
                  name="cookingHours"
                  min={0}
                  className="input input-bordered w-1/2 text-center"
                  placeholder="Hours"
                  value={cookingTime.hours}
                  onChange={(e) =>
                    setCookingTime({ ...cookingTime, hours: e.target.value })
                  }
                />
                <input
                  type="number"
                  name="cookingMinutes"
                  min={0}
                  max={59}
                  className="input input-bordered w-1/2 text-center"
                  placeholder="Minutes"
                  value={cookingTime.minutes}
                  onChange={(e) =>
                    setCookingTime({ ...cookingTime, minutes: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Prep Time */}
            <div>
              <label className="block text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2">
                Prep Time
              </label>
              <div className="flex space-x-3">
                <input
                  type="number"
                  name="prepHours"
                  min={0}
                  className="input input-bordered w-1/2 text-center"
                  placeholder="Hours"
                  value={prepTime.hours}
                  onChange={(e) =>
                    setPrepTime({ ...prepTime, hours: e.target.value })
                  }
                />
                <input
                  type="number"
                  name="prepMinutes"
                  min={0}
                  max={59}
                  className="input input-bordered w-1/2 text-center"
                  placeholder="Minutes"
                  value={prepTime.minutes}
                  onChange={(e) =>
                    setPrepTime({ ...prepTime, minutes: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Cuisine */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2 block">
              Cuisine Type
            </label>
            <select
              name="cuisine"
              className="select select-bordered w-full"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              required
            >
              <option disabled value="">
                🍱 Select Cuisine
              </option>
              {cuisineOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3 block">
              Categories
            </label>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    name="categories"
                    value={cat}
                    className="checkbox checkbox-warning"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className="text-base">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full py-4 text-xl font-semibold"
          >
            🍲 Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
