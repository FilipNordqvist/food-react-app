import React from 'react';
import styles from './recipe.module.css';


const Recipe = ({recipe, addFavorite}) => {


    return (
        <div className = "card col-md-6 col-lg-3" data-grade = {recipe.grade} data-title= {recipe.title}>
            <img src={recipe.image} className="card-img-top" alt={recipe.title}></img>
            <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>

            <a href="#" class="btn btn-primary">See recipe</a>       
        <img src="/images/star.png" alt="Favorite recipe" className={styles.favorite} onClick={ () => addFavorite(recipe.title)}></img>
            </div>
        </div>

    );
};

export default Recipe;