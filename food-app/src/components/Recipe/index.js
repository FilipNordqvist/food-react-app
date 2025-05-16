import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({recipe, onDelete}) => {
    const stars = [];
    for(let i = 0; i < recipe.grade; i++){
        stars.push(<img src='/images/star.png' alt='Star' className={styles.img} key={i}></img>);
    }
    return (
        <div className = "card col-md-6 col-lg-3" data-grade = {recipe.grade} data-title= {recipe.title}>
            <img src={recipe.image} className="card-img-top" alt={recipe.title}></img>
            <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>       
        <img src="/images/delete.png" alt="Delete movie" className={styles.delete} onClick={ () => onDelete(recipe.title)}></img>
        {stars}
            </div>
        </div>

    );
};

export default Recipe;