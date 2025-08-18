import { useState } from "react";
import { toast } from "react-hot-toast";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
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
      description,
      ingredients,
      instructions,
      servings,
      cookingTime,
      prepTime,
      cuisine,
      categories: selectedCategories,
      likeCount: 0,
      image,
    };
    console.log(newRecipe);
    toast.success("Recipe added successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 dark:from-neutral dark:to-neutral-content py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-base-200 p-6 sm:p-10 rounded-3xl shadow-2xl border border-orange-200 dark:border-neutral">
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6 text-center">
          🍽️ Create a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Recipe Title"
            className="input input-bordered w-full text-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Image URL input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Recipe Image URL:
            </label>
            {image && (
              <img
                src={image}
                alt="Preview"
                className="w-full sm:w-60 h-40 object-cover rounded-xl mb-3 shadow-md"
              />
            )}
            <input
              type="url"
              placeholder="Paste image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <textarea
            className="textarea textarea-bordered w-full text-base"
            placeholder="Write a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <label className="font-semibold text-orange-700 dark:text-orange-300">
              Ingredients:
            </label>
            {ingredients.map((ing, idx) => (
              <input
                key={idx}
                className="input input-bordered w-full mb-2"
                value={ing}
                onChange={(e) => handleIngredientChange(idx, e.target.value)}
                placeholder="e.g. 2 cups flour"
              />
            ))}
            <button
              type="button"
              className="btn btn-outline btn-sm mt-1"
              onClick={() => setIngredients([...ingredients, ""])}
            >
              ➕ Add Ingredient
            </button>
          </div>

          <div>
            <label className="font-semibold text-orange-700 dark:text-orange-300">
              Instructions:
            </label>
            {instructions.map((ins, idx) => (
              <textarea
                key={idx}
                className="textarea textarea-bordered w-full mb-2"
                value={ins}
                onChange={(e) => handleInstructionChange(idx, e.target.value)}
                placeholder={`Step ${idx + 1}`}
              />
            ))}
            <button
              type="button"
              className="btn btn-outline btn-sm mt-1"
              onClick={() => setInstructions([...instructions, ""])}
            >
              ➕ Add Step
            </button>
          </div>

          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Servings (e.g. 4)"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <input
              type="number"
              className="input input-bordered"
              placeholder="Cook Hrs"
              onChange={(e) =>
                setCookingTime({ ...cookingTime, hours: e.target.value })
              }
            />
            <input
              type="number"
              className="input input-bordered"
              placeholder="Cook Mins"
              onChange={(e) =>
                setCookingTime({ ...cookingTime, minutes: e.target.value })
              }
            />
            <input
              type="number"
              className="input input-bordered"
              placeholder="Prep Hrs"
              onChange={(e) =>
                setPrepTime({ ...prepTime, hours: e.target.value })
              }
            />
            <input
              type="number"
              className="input input-bordered"
              placeholder="Prep Mins"
              onChange={(e) =>
                setPrepTime({ ...prepTime, minutes: e.target.value })
              }
            />
          </div>

          <select
            className="select select-bordered w-full"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option disabled value="">
              🍱 Select Cuisine
            </option>
            {cuisineOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          <div>
            <label className="font-semibold text-orange-700 dark:text-orange-300">
              Categories:
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="btn btn-primary w-full mt-4 text-lg">
            🍲 Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
