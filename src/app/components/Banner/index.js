import React from 'react';
import styles from './banner.module.css';

const banner = [
  {
    title: 'FBN PODCAST',
    description: `Enjoy amazing discussions about life and
solutions that will transform
your everyday on the go.`,
  },
];
const Banner = () => {
  return (
    <div
      className={styles.banner}
      //   style={{
      //     backgroundImage: '',
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'cover',
      //     backgroundColor: "#bbbbbb"
      //   }}
    >
      <div className={styles.slideDetail}>
        <h4>FBN PODCAST</h4>
        <p>
          Enjoy amazing discussions about life and solutions that will transform
          your everyday on the go.
        </p>
      </div>
      <div className={styles.x}></div>
    </div>
  );
};

export default Banner;
//	https://www.firstbanknigeria.com/wp-content/uploads/2024/07/Giant-Youtube-thumbnail.jpg
// https://www.firstbanknigeria.com/wp-content/uploads/2024/07/Giants-leg-banner.webp
