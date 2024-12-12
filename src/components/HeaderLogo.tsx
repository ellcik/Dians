import React from 'react';
import styles from './HeaderLogo.module.css';

const HeaderLogo: React.FC = () => {
    return (
        <div className={styles.logoContainer}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
    );
};

export default HeaderLogo;
