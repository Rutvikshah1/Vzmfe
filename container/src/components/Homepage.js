import React from 'react';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Verizon</h1>
        <p>Explore our services and offers</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.servicesSection}>
          <h2>Our Services</h2>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <h3>Internet</h3>
              <p>Blazing fast internet for your home</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Wireless Plans</h3>
              <p>Stay connected with our mobile plans</p>
            </div>
            {/* Add more service cards as needed */}
          </div>
        </section>
        <section className={styles.offersSection}>
          <h2>Special Offers</h2>
          <div className={styles.offerCards}>
            <div className={styles.offerCard}>
              <h3>Discounts on Upgrades</h3>
              <p>Upgrade your plan and get amazing discounts</p>
            </div>
            <div className={styles.offerCard}>
              <h3>Bundle Deals</h3>
              <p>Save more by bundling services together</p>
            </div>
            {/* Add more offer cards as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
