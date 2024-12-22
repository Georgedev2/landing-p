import React from 'react';
import styles from './cardTitle.module.css';

const CardTitle = (props) => {
  return (
    <h3 className={styles.blogTitle}>
      <span> {props.title}</span>
      <br />
      <span>{props.subTitle}</span>
    </h3>
  );
};

export default CardTitle ;
