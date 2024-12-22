import styles from './cardImage.module.css';
import Image from 'next/image';
const { imgBox, image } = styles;

const CardImage = (props) => {
  const { src, alt, className, cardImageClassName } = props;
  return (
    <div className={`${imgBox} ${className}`}>
      <Image src={src} alt={alt} className={ `${image} ${cardImageClassName}`} />
    </div>
  );
};

export default CardImage;
