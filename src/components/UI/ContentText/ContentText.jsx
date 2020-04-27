import React from 'react';

import styles from '../../../css/ContentText.module.css';

const contentText = (props) => {
    return (
        <div className={styles.contentText}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.description}>{props.text}</p>
        </div>
    );
}

export default contentText;