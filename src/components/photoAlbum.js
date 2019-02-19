import React, { Fragment } from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import styles from './PhotoAlbum.css';


function PhotoAlbum({ beaches, albumTitle }) {
    return (
        <Fragment>
            <h2 className={styles.h2}>
                {albumTitle}
            </h2>
            <Photos beaches={beaches}/>
        </Fragment>
    );
}
PhotoAlbum.propTypes = {
    beaches: PropTypes.array.isRequired,
    albumTitle: PropTypes.string.isRequired
};

export default PhotoAlbum;