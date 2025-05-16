import React from 'react';
import Recipe from '../Recipe';
import styles from './recipelist.module.css';

const RecipeList = ({recipes, searchRecipe}) => {
    return(
        <div className="container mt-3">
            <div className="row g-4 align-items-stretch">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">                    
                <Recipe key={recipe.id} recipe={recipe} searchRecipe={searchRecipe} />                    
                </div>
            ))}
            </div>
        </div>
    );
};

export default RecipeList;