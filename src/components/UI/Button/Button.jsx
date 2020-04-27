import React from 'react';

import styles from '../../../css/Button.module.css';

const button = (props) => {
    return (
        <button 
            className={[styles.btn, styles[props.btnType]].join(' ')}
            onClick={props.clicked} 
            style={props.style}>{props.children}</button>
    );
}

export default button;