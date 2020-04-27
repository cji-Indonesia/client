import React from 'react';
import { Link } from 'react-router-dom';

import instagram from '../assets/images/instagram-sketched.png';
import facebook from '../assets/images/facebook.png';
import youtube from '../assets/images/youtube.png';
import styles from '../css/Footer.module.css';

const footer = () => {
    return (
        <footer>
            <div className={styles.row}>
                <div className={styles.footer}>
                    <div className={styles.col3}>
                        <p className={styles.title}>ENGLISH TRAINING CENTER</p>
                        <p className={styles.address}>
                            Rukan Lorem Ipsum Jl. Lorem Blok B9 No 20<br />
                            12345 Jakarta, Indonesia<br />
                            Phone: +6221 123456
                        </p>
                    </div>
                    <div className={styles.col3}>
                        <p className={styles.title}>SOCIAL MEDIA</p>
                        <div className={styles.social}>
                            <Link to="/"><img src={facebook} alt="" width="32" /></Link>
                            <Link to="/"><img src={instagram} alt="" width="32" /></Link>
                            <Link to="/"><img src={youtube} alt="" width="32" /></Link>
                        </div>
                    </div>
                    <div className={styles.col3}>
                        <p className={styles.title}>RECENT POSTS</p>
                        <ul className={styles.listGroup}>
                            <li className={styles.listGroupItem}><Link to="/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Link></li>
                            <li className={styles.listGroupItem}><Link to="/">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Link></li>
                            <li className={styles.listGroupItem}><Link to="/">When an unknown printer took a galley of type and scrambled it to make a type specimen book></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>Copyright &copy; 2020 All Rights Reserved</span>
            </div>
        </footer>
    );
}

export default footer;