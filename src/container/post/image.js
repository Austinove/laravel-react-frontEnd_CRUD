import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image }) => (
    <div>
        <LazyLoadImage
            alt={image.alt}
            height={500}
            src={image.src} // use normal <img> attributes as props
            width={500} 
            />
    </div>
);

export default MyImage;