import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css'

function Photo({ beach }) {
    return (
        <Fragment className={styles.img}>
            <img src={beach}/>
        </Fragment>
    );
}
Photo.propTypes = {
    beach: PropTypes.string.isRequired
};

export default Photo;