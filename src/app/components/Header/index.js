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
    label: 'CATEGORIES',
    path: '',
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
const NavLinks = (props) => {
  const { links = [] } = props;
  console.log('links',links)
  if (!links.length) return <></>;
  return (
    <ul className={links_c}>
      {links.map(({ id, label, path, isDropdown }) => (
        <li key={id} className={link}>
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
        <NavLinks links={links2}/>
          <NavLinks links={links2 }/>
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
            <NavLinks links={links_ }/>
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
