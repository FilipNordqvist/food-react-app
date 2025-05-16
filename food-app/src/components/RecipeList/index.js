import React from 'react';
import Recipe from '../Recipe';
import styles from './recipelist.module.css';

const RecipeList = ({recipes, onDelete}) => {
    return(
        <div className="mt-3">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default RecipeList;