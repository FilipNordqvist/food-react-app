import React from 'react';
import Recipe from '../Recipe';
import styles from './recipelist.module.css';

const RecipeList = ({recipes, searchRecipe}) => {
    return(
        <div className="mt-3">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} searchRecipe={searchRecipe} />
            ))}
        </div>
    );
};

export default RecipeList;