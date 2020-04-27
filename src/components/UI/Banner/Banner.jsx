import React from 'react';

import Button from '../Button/Button';
import styles from '../../../css/Banner.module.css';

const banner = (props) => {
    return (
        <div className={styles.banner}>
            <div className={styles.header}>
                <p>{props.title}</p>
            </div>
            <div className={styles.body}>
                <p>{props.text}</p>
                <Button 
                    btnType="btnDanger" 
                    style={{padding: '.375rem 2rem', fontWeight: '700'}}>More</Button>
            </div>
        </div>
    );
}

export default banner;