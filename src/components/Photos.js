import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function Photos({ beaches }) {
    const listOfBeaches = beaches.map(beach => {
        return <li key={beach}> <Photo beach={beach}/> </li>;
    });
    return (
        <section>
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