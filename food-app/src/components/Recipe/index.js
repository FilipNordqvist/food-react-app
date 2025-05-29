import React, {useEffect, useState} from 'react';
import styles from './recipe.module.css';
import ModalRecipe from '../ModalRecipe';
import Rating from '../Rating';



const Recipe = ({recipe, handleItem, image, showRating= false}) => {
    const [modal, setModal] = useState(false);
    const [rating, setRating] = useState(0);
    
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    
    const ingredients = [];
    const steps = recipe.analyzedInstructions[0].steps[0].step;


    for (let i = 0; i < recipe.extendedIngredients.length; i++) {
        ingredients.push(<p key={i}>{recipe.extendedIngredients[i].original}</p>);
    }

    useEffect(() => {
        const storedRating = localStorage.getItem("recipeRatings");
        
        if (storedRating) {
            const ratings = JSON.parse(storedRating);
            if (ratings[recipe.id]) {
                setRating(ratings[recipe.id]);
            }
        }
    }, [recipe.id]);

    const handleRating = (value) => {
        setRating(value);

        const storedRating = localStorage.getItem("recipeRatings");
        let ratings = {};
        if (storedRating) {
            ratings = JSON.parse(storedRating);
        }

        ratings[recipe.id] = value;
        localStorage.setItem("recipeRatings", JSON.stringify(ratings));
    };

    return (
        
        <>
            <div 
                className="card shadow bg-light rounded d-flex flex-column h-100 w-100"
                onClick={openModal} 
                
                data-title={recipe.title}
                style={{ cursor: 'pointer' }}
            >
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body d-flex flex-column flex-grow-1">
                    <h4 className="card-title">{recipe.title}</h4>
                    <div className="flex-grow-1"></div>
                    {showRating && (
                    <div onClick={(e) => e.stopPropagation()} className='mt-3'>
                        <Rating
                        id={`rating-${recipe.id}`}
                        value={rating}
                        onChange={handleRating}
                        />

                    </div>
                    )}

                    <div className="mt-auto d-flex justify-content-center">
                        <img 
                            src={image} 
                            alt="Favorite recipe" 
                            className={styles.favorite} 
                            onClick={(e) => {
                                e.stopPropagation(); // Hindra modalen från att öppnas vid klick
                                handleItem(recipe, rating);
                            }}
                        />
                    </div>
                    
                </div>
            </div>

            {modal && (
                <ModalRecipe
                    steps={steps}
                    ingredients={ingredients}
                    closeModal={closeModal}
                    title={recipe.title}
                />
            )}
        </>
    );
};

export default Recipe;