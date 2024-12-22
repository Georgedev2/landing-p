import React from 'react';
import { createArrayOfDuplicate } from '../utils';
import Link from 'next/link';
import SocialMediaLinks from '../socialMediaLinks';
import { Images } from '../assets';
import styles from './footer.module.css';
import { title } from 'process';
const { linkWrapper, imageBox } = styles;

const links = [
  {
    title: 'Banking',
    id: 1,
    links: [
      'Corporate Information',
      'Personal Banking',
      ' Business Banking',
      'Private Banking',
      'Loan Calculator',
      'Vendor Portal',
      ' Download Forms',
      ' USSD',
      'Update BVN/NIN',
    ],
  },
  {
    id: 2,
    title: 'Security',
    links: ['BVN', 'Anti-Fraud', 'Security Tips', ' Secure Code'],
  },

  {
    id: 3,
    title: 'Contact us',
    links: [
      'Feedback and Complaints',
      'Whistleblowing',
      'Find a Branch',
      'Contact Form',
      'Find an Agent',
      'Agent Network',
    ],
  },
  {
    id: 4,
    title: 'Legal',
    links: [
      'Sitemap',
      'Terms of Use',
      'Privacy Policy',
      'Cookies Policy',
      'Communications Policy',
      'Information and Cybersecurity Policy',
      'Delete FirstMobile Profile',
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="page-width">
        <section className={linkWrapper}>
          <div className={imageBox}>
          </div>
          <SocialMediaLinks />
        </section>
        <div className="footer-blocks">
          {links.map(({ id, links, title }) => (
            <div key={id}>
              <h4 className="footer-links_title">{title}</h4>
              <div className="footer-links">
                {links.map((link) => (
                  <Link href={'#'} className="link" key={link}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="licensed-n-to-top ">
          <p>
            © {new Date().getFullYear()} First Bank of Nigeria Ltd. An
            FBNHoldings Company. Licensed by the Central Bank of Nigeria
          </p>{' '}
          <Link href={'#top'}>Back To Top</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
