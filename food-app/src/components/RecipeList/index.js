import React from 'react';
import Recipe from '../Recipe';
import styles from './movielist.module.css';

const RecipeList = ({movies, onDelete}) => {
    return(
        <div className="mt-3">
        <h2>Filmer</h2>
        <ul className={styles.movies}>
            {movies.map((movie) => (
                <Recipe key={movie.title} movie={movie} onDelete={onDelete} />
            ))}
        </ul>
        </div>
    );
};

export default RecipeList;