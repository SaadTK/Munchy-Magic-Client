import { useState } from "react";
import { toast } from "react-hot-toast";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe1 = {
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
      imageFile,
    };
    console.log(newRecipe1);
    toast.success("Recipe added successfully!");

    const form = e.target;
    const formData = new FormData(form);

    const newRecipe = Object.fromEntries(formData.entries());
    console.log(newRecipe);

    //send recipe data to the db
    fetch("http://localhost:3002/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding recipe to the db", data);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 dark:from-neutral dark:to-neutral-content py-12 px-6 sm:px-12 lg:px-24 flex justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-base-200 p-10 rounded-3xl shadow-2xl border border-orange-200 dark:border-neutral space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 dark:text-orange-400 mb-8 tracking-wide">
          🍽️ Add a New Recipe
        </h1>
        <p className="text-center text-lg text-orange-500 dark:text-orange-300 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
          Enter your recipe’s details, instructions, and photo to share your
          dish with food lovers everywhere!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
          encType="multipart/form-data"
        >
          {/* Recipe Title */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2 block">
              Recipe Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Recipe Title"
              className="input input-bordered input-lg w-full text-lg shadow-sm focus:ring-2 focus:ring-orange-400 transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Image File Upload */}
          <div>
            <label className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3 block">
              Upload Recipe Image <span className="text-red-500">*</span>
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-full sm:w-64 h-44 object-cover rounded-xl mb-4 shadow-lg border border-orange-300 dark:border-orange-600 mx-auto"
              />
            )}
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
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
              className="textarea textarea-bordered w-full h-24 resize-y shadow-sm focus:ring-2 focus:ring-orange-400 transition text-base"
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
                  className="input input-bordered w-full shadow-sm focus:ring-2 focus:ring-orange-400 transition"
                  value={ing}
                  onChange={(e) => handleIngredientChange(idx, e.target.value)}
                  placeholder="e.g. 2 cups flour"
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm mt-3 tracking-wide hover:bg-orange-100 dark:hover:bg-orange-700 transition"
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
                  className="textarea textarea-bordered w-full h-24 resize-y shadow-sm focus:ring-2 focus:ring-orange-400 transition text-base"
                  value={ins}
                  onChange={(e) => handleInstructionChange(idx, e.target.value)}
                  placeholder={`Step ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm mt-3 tracking-wide hover:bg-orange-100 dark:hover:bg-orange-700 transition"
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
                className="input input-bordered w-full shadow-sm focus:ring-2 focus:ring-orange-400 transition"
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
                  className="input input-bordered w-1/2 shadow-sm focus:ring-2 focus:ring-orange-400 transition text-center"
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
                  className="input input-bordered w-1/2 shadow-sm focus:ring-2 focus:ring-orange-400 transition text-center"
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
                  className="input input-bordered w-1/2 shadow-sm focus:ring-2 focus:ring-orange-400 transition text-center"
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
                  className="input input-bordered w-1/2 shadow-sm focus:ring-2 focus:ring-orange-400 transition text-center"
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
              className="select select-bordered w-full shadow-sm focus:ring-2 focus:ring-orange-400 transition"
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
            className="btn btn-primary w-full py-4 text-xl font-semibold tracking-wide hover:bg-orange-600 transition"
          >
            🍲 Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
