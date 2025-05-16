import React from 'react';
import styles from './recipe.module.css';


const Recipe = ({recipe, searchRecipe, addFavorite}) => {
    const ingredience = [];

    for (let i = 0; i < recipe.extendedIngredients.length; i++) {
        ingredience.push(<p key={i}>{recipe.extendedIngredients[i].original}</p>);
    }

    return (
        <div className = "card shadow p-3 mb-5 bg-light rounded h-100" data-grade = {recipe.grade} data-title= {recipe.title}>
            <img src={recipe.image} className="card-img-top" alt={recipe.title}></img>
            <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
                <div className="d-flex justify-content-center"> 
                    { ingredience }
                    <button className="btn btn-primary " onClick={() => searchRecipe(recipe.id)}>
                    View recipe
                    </button>  
                    <img src="/images/star.png" alt="Favorite recipe" className={styles.favorite} onClick={ () => addFavorite(recipe.title)}></img>
                </div>
            </div>
        </div>

    );
};

export default Recipe;