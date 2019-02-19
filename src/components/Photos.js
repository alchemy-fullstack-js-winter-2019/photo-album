import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import styles from './Photos.css';

function Photos({ beaches }) {
    const listOfBeaches = beaches.map(beach => {
        return <li key={beach}> <Photo beach={beach}/> </li>;
    });
    return (
        <section className={styles.photos}>
            <ul>
                {listOfBeaches}
            </ul>
        </section>
    );
}

Photos.propTypes = {
    beaches: PropTypes.array.isRequired
};

export default Photos;