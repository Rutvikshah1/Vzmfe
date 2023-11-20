import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 Verizon. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
