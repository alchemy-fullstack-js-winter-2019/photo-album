import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

function Photo({ beach }) {
    return (
        <div className={styles.img}>
            <img src={beach}/>
        </div>
    );
}
Photo.propTypes = {
    beach: PropTypes.string.isRequired
};

export default Photo;