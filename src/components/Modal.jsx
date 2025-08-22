import { useState, useEffect } from "react";

const cuisineOptions = [
  "Bangladeshi",
  "Indian",
  "Italian",
  "Chinese",
  "Mexican",
];
const categoriesList = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks"];

function Modal({ recipe, onClose, onSave }) {
  // Initialize state for all form fields
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [servings, setServings] = useState("");
  const [cookingTime, setCookingTime] = useState({ hours: 0, minutes: 0 });
  const [prepTime, setPrepTime] = useState({ hours: 0, minutes: 0 });
  const [cuisine, setCuisine] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Initialize form fields from recipe when modal opens
  useEffect(() => {
    if (!recipe) return;

    setTitle(recipe.title || "");
    setImageUrl(recipe.imageUrl || "");
    setDescription(recipe.description || "");
    setIngredients(recipe.ingredients || []);
    setInstructions(recipe.instructions || []);
    setServings(recipe.servings || "");
    setCookingTime(recipe.cookingTime || { hours: 0, minutes: 0 });
    setPrepTime(recipe.prepTime || { hours: 0, minutes: 0 });
    setCuisine(recipe.cuisine || "");
    setSelectedCategories(recipe.categories || []);
  }, [recipe]);

  // Handle dynamic ingredients change
  const handleIngredientChange = (idx, value) => {
    const newIngredients = [...ingredients];
    newIngredients[idx] = value;
    setIngredients(newIngredients);
  };

  // Handle dynamic instructions change
  const handleInstructionChange = (idx, value) => {
    const newInstructions = [...instructions];
    newInstructions[idx] = value;
    setInstructions(newInstructions);
  };

  // Toggle category checkbox
  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build update object matching your backend schema
    const updatedRecipe = {
      title: title.trim(),
      imageUrl: imageUrl.trim(),
      description: description.trim(),
      ingredients: ingredients.filter((i) => i.trim() !== ""),
      instructions: instructions.filter((i) => i.trim() !== ""),
      servings: Number(servings),
      cookingTime: {
        hours: Number(cookingTime.hours),
        minutes: Number(cookingTime.minutes),
      },
      prepTime: {
        hours: Number(prepTime.hours),
        minutes: Number(prepTime.minutes),
      },
      cuisine: cuisine.trim(),
      categories: selectedCategories,
    };

    try {
      const res = await fetch(
        `http://localhost:3002/all-recipes/${recipe._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedRecipe),
        }
      );

      if (!res.ok) throw new Error("Update failed");

      onSave(updatedRecipe);
      onClose();
    } catch (err) {
      alert("Failed to update recipe, please try again.");
      console.error(err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-700 dark:text-orange-300">
          Edit Recipe
        </h2>

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
              {categoriesList.map((cat) => (
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
            🍲 Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
