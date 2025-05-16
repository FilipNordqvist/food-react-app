import React from 'react';
import styles from './movie.module.css';

const Recipe = ({movie, onDelete}) => {
    const stars = [];
    for(let i = 0; i < movie.grade; i++){
        stars.push(<img src='/images/star.png' alt='Star' className={styles.img} key={i}></img>);
    }
    return (
        <li data-grade = {movie.grade} data-title= {movie.title} className={styles.li}>
        {movie.title}    
        <img src="/images/delete.png" alt="Delete movie" className={styles.delete} onClick={ () => onDelete(movie.title)}></img>
        {stars}
        </li>

    );
};

export default Recipe;