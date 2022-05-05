import React from 'react';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';

const Home = () => {
    return (
    <div>
  <div>
    <Header/>
    </div>
  <div>
    <ProductList/>
    </div>
</div>



    );
}

export default Home;