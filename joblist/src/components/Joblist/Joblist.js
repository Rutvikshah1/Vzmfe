import React, { useEffect } from 'react';
import styles from './Joblist.module.css';

const Joblist = () => {
  const jobs = [
    {
      title: 'Install new network infrastructure',
      description:
        'Setup and configure network equipment for a new office location.',
    },
    {
      title: 'Field Operations Inspection',
      description:
        'Perform on-site inspections and maintenance of existing network infrastructure.',
    },
    {
      title: 'Telecom System Upgrade',
      description:
        'Upgrade existing telecommunication systems to the latest technology standards.',
    },
    {
      title: 'Installation Technician Needed',
      description:
        'Deploy and set up hardware and software for new customer installations.',
    },
    {
      title: 'Customer Support Requests',
      description:
        'Handle customer inquiries and technical support issues via phone and email.',
    },
  ];

  const generateJobList = () => {
    return jobs.slice(0, 5).map((job, index) => (
      <li key={index} className={styles.jobItem}>
        <div className={styles.jobDetails}>
          <div className={styles.jobInfo}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.jobDescription}>{job.description}</p>
          </div>
          <button className={styles.completeButton}>Pending ⏳</button>
        </div>
      </li>
    ));
  };

  return (
    <div className={styles.jobListContainer}>
      <h2 className={styles.jobListHeading}>Jobs To Be Completed</h2>
      <ul className={styles.jobList}>{generateJobList()}</ul>
    </div>
  );
};

export default Joblist;
