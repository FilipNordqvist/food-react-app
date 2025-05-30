import Recipe from "../Recipe";
import styles from "./recipelist.module.css";
import { useState } from "react";

const RecipeList = ({
  titleOfList,
  recipes,
  handleItem,
  show,
  image,
  showRating = false,
}) => {
  const [showRecipes, setShowRecipes] = useState(show);

  const changeState = () => {
    if (showRecipes) {
      setShowRecipes(false);
    } else {
      setShowRecipes(true);
    }
  };

  return (
    <div className="container mt-3">
      <h2 onClick={changeState} className={`mb-3 ${styles.click}`}>
        {titleOfList}
      </h2>
      {showRecipes && (
        <div className="row g-4 align-items-stretch">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
            >
              <Recipe
                key={recipe.id}
                recipe={recipe}
                handleItem={handleItem}
                image={image}
                showRating={showRating}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
