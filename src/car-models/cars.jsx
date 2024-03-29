import { useState } from 'react';
import './cars.style.css';

const Cars = () => {
  const [name, setName] = useState('Hyundai');

  return (
    <>
      <p>{name}</p>
      <button
        onClick={() => {
          setName('Skoda');
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          if (name === 'Hyundai') {
            setName('Skoda');
          } else if (name === 'Skoda') {
            setName('Hyundai');
          }
        }}
      >
        Toggle Name
      </button>
    </>
  );
};

export default Cars;
