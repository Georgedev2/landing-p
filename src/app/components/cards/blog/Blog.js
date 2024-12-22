import React from 'react';
import image from '../../assets/blog-image.jpeg';
import { createArrayOfDuplicate } from '../../utils';
import CardTitle from '../CardTitle';
import CardImage from '../cardImage/Index';

const blogItem = {
  image: image,
  title: 'Worlds Singles Day',
};

const Blog = () => {
    console.log('createArrayOfDuplicate(blogItem, 6)',createArrayOfDuplicate(blogItem, 6))
  return (
    <div className="page-width">
      <section>
        <CardTitle title="blog" subTitle="feature" />
        <div className="blogs">
          {createArrayOfDuplicate(blogItem, 6).map(({ image, id, title }) => (
            <div key={id} className="blog">
                <CardImage src={image} alt="title" className={'img-box'} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
