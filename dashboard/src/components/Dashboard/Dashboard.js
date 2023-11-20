import React from 'react';
import styles from './Dashboard.module.css'; // Import CSS module
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Hello, John!</h1>
        <p>Welcome to Your Dashboard</p>
      </header>

      <section className={styles.jobsSection}>
        <h2>Your Jobs</h2>
        <div className={styles.jobList}>
          <div className={styles.jobItem}>
            <h3>Job Title 1</h3>
            <p>Description of job 1</p>
          </div>
          <div className={styles.jobItem}>
            <h3>Job Title 2</h3>
            <p>Description of job 2</p>
          </div>
          {/* Add more job items */}
        </div>
      </section>

      <section className={styles.actionsSection}>
        <Link to="/joblist" className={styles.browseButton}>
          Browse Jobs
        </Link>
        <Link to="/profile" className={styles.profileButton}>
          View Profile
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>We Appreciate Your Hard Work. Thank You for Working with Us.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
