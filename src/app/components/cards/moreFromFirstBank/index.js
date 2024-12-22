import styles from './moreFromFirstBank.module.css';
const { video, card, cards, cardBody } = styles;
const more = [
  {
    id: 1,
    video: '',
    title: 'Firstmonie',
    description: `Stay one step ahead of your finances with Firstmonie,
our mobile and e-banking service designed with #YouFirst
in mind.`,
    tags: [],
  },
  {
    id: 2,
    video: '',
    title: 'Youfirst',
    tags: ['EnablingYou', 'YouFirst'],
    description: `Giant strides, big leaps and innovation has formed the
basis of our heritage over the years. Indeed, we are woven
into the fabric of society. 

We are rooted in tradition but constantly leaning
towards the future. We are excited about the days
ahead.`,
  },
];
const MoreFromFirstBank = () => {
  return (
    <div className="page-width">
      <div className={cards}>
        {more.map(({ id, title, description, tags }) => (
          <div key={id} className={card}>
            <div className={styles.video}></div>
            <div className={cardBody}>
                <div>
                <h3>{title}</h3>
                <p>{description}</p>
                </div>

              <p className={styles.tags}>
                {tags && tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </p>

              <div >
                <button className='primary-button'>Learn more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFromFirstBank;
