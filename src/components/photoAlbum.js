import React, { Fragment } from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';


function PhotoAlbum({ beaches }) {
    return (
        <Fragment>
            <h3>
                My Cool Beaches
            </h3>
            <Photos beaches={beaches}/>
        </Fragment>
    );
}
PhotoAlbum.propTypes = {
    beaches: PropTypes.array.isRequired
};

export default PhotoAlbum;