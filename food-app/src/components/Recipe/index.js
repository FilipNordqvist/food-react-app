import React, { useState } from "react";
import styles from "./recipe.module.css";
import ModalRecipe from "../ModalRecipe";
import Rating from "../Rating";
import Hearts from "../Hearts";

const Recipe = ({
  recipe,
  handleItem,
  image,
  showRating = true,
  showHearts = false,
}) => {
  const [modal, setModal] = useState(false);
  const [rating, setRating] = useState(0);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const ingredients = [];
  const steps = recipe.analyzedInstructions[0].steps[0].step;

  for (let i = 0; i < recipe.extendedIngredients.length; i++) {
    ingredients.push(<p key={i}>{recipe.extendedIngredients[i].original}</p>);
  }

  const handleRating = (value) => {
    setRating(value);

    const storedRating = localStorage.getItem("recipeRatings");
    let ratings = {};
    if (storedRating) {
      ratings = JSON.parse(storedRating);
    }

    ratings[recipe.id] = value;
    localStorage.setItem("recipeRatings", JSON.stringify(ratings));
  };

  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-light rounded"
        onClick={openModal}
        data-title={recipe.title}
        style={{ cursor: "pointer" }}
      >
        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
        <div className="card-body d-flex flex-column flex-grow-1 w-100 h-100">
          <h4 className="card-title">{recipe.title}</h4>

          {showHearts && (
            <div className="mt-2">
              <Hearts recipeId={recipe.id} />
            </div>
          )}

          {showRating && (
            <div onClick={(e) => e.stopPropagation()} className="mt-3">
              <Rating
                id={`rating-${recipe.id}`}
                value={rating}
                onChange={handleRating}
              />
            </div>
          )}

          <div className="mt-auto d-flex justify-content-center">
            <img
              src={image}
              alt="Favorite recipe"
              className={styles.favorite}
              onClick={(e) => {
                e.stopPropagation(); // Hindra modalen från att öppnas vid klick
                handleItem(recipe, rating);
              }}
            />
          </div>
        </div>
      </div>

      {modal && (
        <ModalRecipe
          steps={steps}
          ingredients={ingredients}
          closeModal={closeModal}
          title={recipe.title}
        />
      )}
    </>
  );
};

export default Recipe;
