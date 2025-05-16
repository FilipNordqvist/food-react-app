import React, { useState } from "react";
import styles from "./recipe.module.css";
import ModalRecipe from "../ModalRecipe";

const Recipe = ({ recipe, searchRecipe, addFavorite }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const ingredients = [];
  let instructions = [];

  try {
    let steps = recipe.analyzedInstructions[0].steps;

    for (let i = 0; i < steps.length; i++) {
      instructions.push(<p key={i}>{steps[i].step}</p>);
    }
  } catch {
    instructions[0] = "No instructions";
  }

  for (let i = 0; i < recipe.extendedIngredients.length; i++) {
    ingredients.push(<p key={i}>{recipe.extendedIngredients[i].original}</p>);
  }

  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-light rounded"
        onClick={openModal}
        data-grade={recipe.grade}
        data-title={recipe.title}
        style={{ cursor: "pointer" }}
      >
        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
        <div className="card-body w-100 h-100">
          <h4 className="card-title">{recipe.title}</h4>
          <div className="d-flex justify-content-center">
            <img
              src="/images/star.png"
              alt="Favorite recipe"
              className={styles.favorite}
              onClick={(e) => {
                e.stopPropagation(); // Hindra modalen från att öppnas vid klick
                addFavorite(recipe.title);
              }}
            />
          </div>
        </div>
      </div>

      {modal && (
        <ModalRecipe
          steps={instructions}
          ingredients={ingredients}
          closeModal={closeModal}
          title={recipe.title}
        />
      )}
    </>
  );
};

export default Recipe;
