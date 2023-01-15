import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import Image from 'next/image';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className=''>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            height={250} width={250}
            className="product-image" alt='product'
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
      
          
        </div>
      </Link>
    </div>
  )
}

export default Product
