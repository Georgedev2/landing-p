'use client';
import Image from 'next/image';
import { Icons, Images } from '../../assets';
import CardTitle from '../CardTitle';
import styles from './podcast.module.css';
import { createArrayOfDuplicate, getRandomNumber } from '../../utils';
import CardImage from '../cardImage/Index';
import { useState } from 'react';
const { blogImage } = Images;

const { DownloadIcon, ClockIcon, SpeakerWaveIcon } = Icons;
const tabs_ = [
  { label: 'ALL', isSelected: true, id: getRandomNumber() },
  { label: 'LOAN', id: getRandomNumber() },
  { label: 'INSURANCE', id:getRandomNumber() },
  { label: 'WAYS TO BANK', id: getRandomNumber() },
  { label: 'FAMILY', id: getRandomNumber() },
];

const padCast = {
  date: Date.now(),
  image: blogImage,
  title: 'How To Thrive In An Economic Slowdown',
  description: `With about 17.4 million enterprises, it is no denial
that SMEs account forms approximately 50% and
90% of both industrial jobs and the manufacturing
sector respectively.`,
};


const Podcast = () => {
  const [tabs, setTabs] = useState(tabs_);
  
  const handleTabChange = (id) => {
    setTabs((oldState) =>
      oldState.map((tab) => {
        if (tab.id == id) {
          tab.isSelected = true;
          return tab;
        }
        tab.isSelected = false;
        return tab
      })
    );
  };
  return (
    <div className="page-width">
      <CardTitle title="podcast" subTitle="Recent Episodes" />
      <div className={`${styles.tabs} `}>
        {tabs.map(({ label, isSelected, id }) => (
          <button
            key={label}
            onClick={() => {
              handleTabChange(id);
            }}
            className={`primary-button ${isSelected && styles.isSelected}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.podcasts}>
        {createArrayOfDuplicate(padCast, 6).map((podcast) => (
          <div key={podcast.id} className={styles.podcast}>
            <CardImage
              src={podcast.image}
              alt="title"
              className={styles.podcastImage_c}
              cardImageClassName={styles.podcastImage}
            />
            <div className={styles.body}>
              <p>{padCast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
