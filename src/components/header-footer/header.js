import React from 'react';
import css from './header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import texture from '../../assets/texture.png';



const header = () => {
    return (
        <header
            style={{ backgroundImage: `url(${texture})` }}
            className={css.header}>
            <div className={css.top_menu}>
                <Logo className={css.logo}></Logo>
                <h3>  کوهستان دو چرخ </h3>
                <h5>021-55 30 90 659</h5>

            </div >
            <nav className={css.menu_nav}>
                <ul>
                    <li><NavLink to="/home">خانه</NavLink></li>
                    <li><NavLink to="/products">محصولات</NavLink></li>
                    <li><NavLink to="/buy">سبد خرید</NavLink></li>
                    <li><NavLink to="/tamas-ba-ma">ارتباط با ما</NavLink></li>
                </ul>
            </nav>


        </header >
    );
};

export default header;