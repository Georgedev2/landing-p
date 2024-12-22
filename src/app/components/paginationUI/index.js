import styles from './paginationUI.module.css';
const items = [1, 2, 3];

const PaginationUI = (props) => {
  const { nextLabel, previousLabel, breakLabel, pageCount } = props;
  return (
    <div className={styles.box}>
      <button className={styles.previous}>{previousLabel}</button>
      <div className={styles.pages}>
        {items.map((num) => (
          <button key={num}>{num}</button>
        ))}
      </div>

      {breakLabel|| '...'}
      <button> {pageCount}</button>
      <button className={styles.previous}>{nextLabel}</button>
    </div>
  );
};

export default PaginationUI;
