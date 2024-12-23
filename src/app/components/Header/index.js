import React from 'react';
import { Icons, Images } from '../assets';
import Image from 'next/image';
import { getRandomNumber } from '../utils';
const { logo } = Images;
import styles from './header.module.css';
import Link from 'next/link';
const { links_c, link, bottomNavLinks, logoBox, logo_, secondChild, contact } =
  styles;

const { ExpandMoreIcon, SearchIcon, HamburgerMenuIcon } = Icons;
const links_ = [
  {
    id: getRandomNumber(),
    label: 'CATEGORIES',
    path: '',
    isDropdown: true,
  },
  {
    id: getRandomNumber(),
    label: 'BLOG',
    path: '',
  },
  {
    id: getRandomNumber(),
    label: 'SUBSCRIBE',
    path: '',
  },
];
const links2 = [
  {
    id: getRandomNumber(),
    label: 'HOME',
    path: '',
  },
  {
    id: getRandomNumber(),
    label: 'PERSONAL',
    path: '',
    isCurrentLocation: true,
  },
  {
    id: getRandomNumber(),
    label: 'BUSINESS',
    path: '',
  },
  {
    id: getRandomNumber(),
    label: 'PRIVATE',
    path: '',
  },
];
const links3 = [
  {
    id: getRandomNumber(),
    label: 'SELECT LANGUAGE',
    path: '',
    isCurrentLocation: true,
  },
  {
    id: getRandomNumber(),
    label: 'SUSTAINABILITY',
    path: '',
  },
];
const NavLinks = (props) => {
  const { links = [] } = props;
  if (!links.length) return <></>;

  return (
    <ul className={links_c}>
      {links.map(({ id, label, isDropdown, isCurrentLocation }) => (
        <li
          key={id}
          className={`${link} ${isCurrentLocation ? styles.isCurrentL : ''}`}
        >
          <span> {label}</span>{' '}
          <span>{isDropdown ? <ExpandMoreIcon size={'1.2rem'} /> : null}</span>
        </li>
      ))}
    </ul>
  );
};
const Header = () => {
  return (
    <header>
      <section id="top" className={styles.firstNav}>
        <div>
          <NavLinks links={links2} />
          <div className={styles.firstNav_child}>
            <NavLinks links={links3} />
          </div>
        </div>
      </section>
      <section className={bottomNavLinks}>
        <div>
          <div className={logoBox}>
            <div className={styles.menuBox}>
              <HamburgerMenuIcon />
            </div>

            <Image src={logo} alt="logo" className={logo_} />
          </div>

          <div className={secondChild}>
            <NavLinks links={links_} />
            <SearchIcon size={'1.5rem'} className={styles.search} />
            <Link href={'#contact'} className={`${contact} primary-button`}>
              Contact
            </Link>
          </div>
          <div className={styles.loginBox}>
            <Link href={'#contact'} className={`${contact} primary-button`}>
              Login
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
