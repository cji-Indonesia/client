import React from 'react';

import timetable from '../../../assets/images/timetable.png';
import styles from '../../../css/Card.module.css';

const card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.body}>
                <div className={styles.icon}>
                    <img src={timetable} alt="timetable" width="150" />
                </div>
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.text}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default card;