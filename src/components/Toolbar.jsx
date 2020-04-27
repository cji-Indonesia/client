import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../css/Toolbar.module.css';

const toolbar =  () => {
    return (
        <header>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        <img src="https://www.english-today-online.com/wp-content/uploads/2020/03/logo-kecil-450.png" height="55" alt="logo" />
                    </NavLink>
                </div>
                <div className={styles.navbarItem}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Vip Online</NavLink>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Online Learning Platform</button>
                        <div className={styles.dropdownContent}>
                            <NavLink to="/">Online Platform</NavLink>
                            <NavLink to="/">Features</NavLink>
                            <NavLink to="/">English for Business</NavLink>
                        </div>
                    </div>
                    <NavLink to="/">Lessons</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/">Contact Us</NavLink>
                </div>
            </div>
        </header>
    );
}

export default toolbar;