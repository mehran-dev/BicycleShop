import React from 'react';
import css from './card.module.css';
const card = (props) => {
    return (
        <div className={css.card}>
            <img src={props.src} alt={props.alt} />
            <p>{props.desc}</p>
            <button>خرید</button>

        </div>
    );
};

export default card;
