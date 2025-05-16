import React from 'react';
import Recipe from '../Recipe';
import styles from './recipelist.module.css';

const RecipeList = ({recipes, searchRecipe}) => {
    return(
        <div className="container mt-3">
            <div className="row">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card w-100 h-100">
                <Recipe key={recipe.id} recipe={recipe} searchRecipe={searchRecipe} />
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default RecipeList;