import React from 'react';

const Button = ({text, onClick}) => {
    return(
        <input type="submit" className={'btn btn-success mt-3 me-1'} value={text} onClick={onClick}/>
    );
};

export default Button;