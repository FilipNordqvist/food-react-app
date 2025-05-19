import React, {useState} from 'react';
import styles from './recipe.module.css';
import ModalRecipe from '../ModalRecipe';



const Recipe = ({recipe, handleItem, image}) => {
    const [modal, setModal] = useState(false);
    
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    
    const ingredients = [];
    const steps = recipe.analyzedInstructions[0].steps[0].step;
 


    for (let i = 0; i < recipe.extendedIngredients.length; i++) {
        ingredients.push(<p key={i}>{recipe.extendedIngredients[i].original}</p>);
    }

    return (
        
        <>
            <div 
                className="card shadow p-3 mb-5 bg-light rounded" 
                onClick={openModal} 
                
                data-title={recipe.title}
                style={{ cursor: 'pointer' }}
            >
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body d-flex flex-column flex-grow-1 w-100 h-100">
                    <h4 className="card-title">{recipe.title}</h4>
                    <div className="mt-auto d-flex justify-content-center">
                        <img 
                            src={image} 
                            alt="Favorite recipe" 
                            className={styles.favorite} 
                            onClick={(e) => {
                                e.stopPropagation(); // Hindra modalen från att öppnas vid klick
                                handleItem(recipe);
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