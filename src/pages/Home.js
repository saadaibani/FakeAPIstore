import React from 'react';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <h1>Product List</h1>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
