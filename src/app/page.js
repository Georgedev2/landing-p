import Banner from './components/Banner';
import Blog from './components/cards/blog/Blog';
import MoreFromFirstBank from './components/cards/moreFromFirstBank';
import Podcast from './components/cards/Podcast';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import PaginationUI from './components/paginationUI';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Podcast />
      <div className={`page-width ${styles.pagination}`}>
        <PaginationUI previousLabel="previous" nextLabel="next" pageCount="5" />
      </div>
      <MoreFromFirstBank />
      <Blog />
      <div className={`page-width ${styles.pagination}`}>
        <PaginationUI previousLabel="previous" nextLabel="next" pageCount="5" />
      </div>
      <Footer />
    </div>
  );
}
