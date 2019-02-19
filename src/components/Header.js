import React from 'react';
import styles from './Header.css';

function Header() {
    const siteName = 'LANCE`S SITE';
    return (
        <header className={styles.header}> 
            <h1>
                {siteName}
            </h1>
        </header>
    );
}
// eslint-disable-next-line no-undef
export default Header;