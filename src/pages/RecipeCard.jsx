import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const {
    _id,
    title,
    imageUrl,
    description,
    cuisine,
    categories,
    servings,
    likeCount,
  } = recipe;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition duration-200 border border-orange-100">
      <figure className="h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
        />
      </figure>

      <div className="card-body space-y-3">
        <h2 className="card-title text-orange-600">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2 text-sm">
          {cuisine && (
            <span className="badge badge-outline badge-warning">{cuisine}</span>
          )}
          {categories?.map((cat) => (
            <span
              key={cat}
              className="badge badge-outline badge-accent capitalize"
            >
              {cat}
            </span>
          ))}
          {servings && (
            <span className="badge badge-ghost">Serves: {servings}</span>
          )}
        </div>

        <div className="card-actions justify-between items-center pt-2">
          <span className="text-sm text-gray-500">
            ❤️ {likeCount || 0} Likes
          </span>

          <Link to={`/recipe-details/${_id}`}>
          <button className="btn btn-sm btn-primary">View Recipe</button>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
