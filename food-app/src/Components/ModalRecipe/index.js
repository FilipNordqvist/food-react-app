import React from "react";

const Modal = ({ modal, ingredients, closeModal }) => {
    return (
        <div className="modal show d-block">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ingredients</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {ingredients}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;