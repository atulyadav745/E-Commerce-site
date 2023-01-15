import React from 'react'

import { client } from '../lib/client';
import { Blog,Newsletter,Cart,  Navbar,Trending, Winter,Product, Testimonial,   Hero, Footer, Sponsors} from '../components'

const Home = ({ products }) => (
  <div>
    <Navbar/>
    {/* <Cart/> */}
    <Hero />
    <div className="products-heading" id='products'>
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    <Blog/>
    <Newsletter/>
    <Sponsors/>
    <Footer />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products}
  }
}

export default Home;
