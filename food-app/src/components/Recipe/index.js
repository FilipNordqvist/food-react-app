import React from 'react';
import styles from './recipe.module.css';


const Recipe = ({recipe, searchRecipe, addFavorite}) => {
    return (
        <div className = "card shadow p-3 mb-5 bg-light rounded" data-grade = {recipe.grade} data-title= {recipe.title}>
            <img src={recipe.image} className="card-img-top" alt={recipe.title}></img>
            <div className="card-body w-100 h-100">
                <h5 className="card-title">{recipe.title}</h5>
                <div className="d-flex justify-content-center"> 
                    <button className="btn btn-primary" onClick={() => searchRecipe(recipe.id)}>
                    View recipe
                    </button>  
                    <img src="/images/star.png" alt="Favorite recipe" className={styles.favorite} onClick={ () => addFavorite(recipe.title)}></img>
                </div>
            </div>
        </div>

    );
};

export default Recipe;