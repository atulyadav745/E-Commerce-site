import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className=''>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}/Month</p>
      
          
        </div>
      </Link>
    </div>
  )
}

export default Product
// import React from 'react'

// const Product = () => {
//   return (
//     <div>
//       pro
//     </div>
//   )
// }

// export default Product
