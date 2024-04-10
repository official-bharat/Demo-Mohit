import { useState } from 'react';
import './App.css';

const App = () => {
  const Cars = {
    name: 'Seltos',
    brand: 'KIA',
    model: '2024',
  };
  // Convert Object to string
  const CarsModified = JSON.stringify(Cars);
  // Convert String to Object
  const AgainModified = JSON.parse(CarsModified);
  // Array of Objects
  const products = [
    {
      name: 'HDFC LIFE',
      description: 'HDFC Life description',
      price: 'Rs 2000',
    },
    {
      name: 'MAX LIFE',
      description: 'MAX Life description',
      price: 'Rs 1500',
    },
    {
      name: 'Tata AIG',
      description: 'Tata AIG description',
      price: 'Rs 2000',
    },
  ];

  // Filter products
  const productSearch = products.filter(
    (product) => product.name === 'HDFC LIFE',
  );

  // Array of String
  const CarModels = ['KIA', 'HYUNDAI', 'TATA'];

  console.log(typeof Cars, typeof CarsModified, typeof AgainModified);

  return (
    <>
      <div className="container">
        {CarModels.map((cars, index) => {
          return <p key={index}>{cars}</p>;
        })}
      </div>
      <div className="container">
        {products.map((product, index) => {
          return (
            <p key={index}>
              {product.name} {product.description} {product.price}
            </p>
          );
        })}
      </div>
      <div className="container">
        {productSearch.map((product, index) => {
          return (
            <p key={index}>
              {product.name} {product.description} {product.price}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default App;
