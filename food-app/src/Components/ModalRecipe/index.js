import React from "react";
import styles from './modal.module.css';

const Modal = ({ingredients, steps, closeModal, title}) => {
    return (
        <div className="modal show d-block">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content" style={{ maxWidth: '700px', maxHeight: '700px' }}>
                    <div className="modal-header">
                        <h3 className="modal-title text-center w-100">{title}</h3>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        
                        <div className="row">
                            <div className="col-8 col-sm-6 text-center w-50">
                                <h5><strong>Ingredients</strong></h5>{ingredients}</div>
                             <div className="col-8 col-sm-6 text-center w-50"><h5><strong>Instructions</strong></h5>{ steps }</div>
                            
                            
                            </div>
                     

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;