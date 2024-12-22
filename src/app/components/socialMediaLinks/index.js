import { Icons } from '../assets';
import { getRandomNumber } from '../utils';
import styles from './SocialMediaLinks.module.css';

const { socialMediaLinks_, socialMediaIcon } = styles;
const { FacebookIon, LinkedinIcon, YoutubeIcon, InstagramIcon } = Icons;

export const socialMediaLinks = [
  { id:getRandomNumber(), Icon: FacebookIon, link: '#FacebookIon' },
  {
    id: getRandomNumber(),
    Icon: InstagramIcon,
    link: '#InstagramIcon',
  },
  { id: getRandomNumber(), Icon: LinkedinIcon, link: '#YoutubeIcon' },
  { id: getRandomNumber(), Icon: YoutubeIcon, link: '#YoutubeIcon' },
];

const SocialMediaLinks = () => {
  return (
    <div className={socialMediaLinks_}>
      {socialMediaLinks.map(({ id, Icon, link }) => (
        <a
          href={link}
          key={id}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <Icon  className={socialMediaIcon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
