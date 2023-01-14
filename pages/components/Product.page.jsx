import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import Image from 'next/image';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className=''>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image" alt='product'
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}/Month</p>
      
          
        </div>
      </Link>
    </div>
  )
}

export default Product
