import React from 'react';
import PropTypes from 'prop-types';
import styles from './Members.css';
import album1 from '../assets/doggPound.jpg';


function Members({ members }) {
  const listOfMembers = members.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul className={styles.members}>
      <img src={album1} />
      {listOfMembers}
    </ul>
  );
}

Members.propTypes = {
  members: PropTypes.array.isRequired
};

export default Members;
