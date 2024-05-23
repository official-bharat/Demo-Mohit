import React from 'react';

const ForLoop = () => {
  const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
  const CarName = [
    { name: 'KiA', rating: 5 },
    { name: 'Hyundai', rating: 5 },
    { name: 'TATA', rating: 5 },
    { name: 'MAHINDRA', rating: 5 },
  ];
  let stars = '';
  for (let i = 0; i < cars.length; i++) {
    console.log(i, 'i', cars[1]);
  }

  const getCarName = (key) => {
    switch (key) {
      case 'Mohit_Kohli':
        return 'Mohit Kohli';
      case 'Bharat_Chhabra':
        return 'Bharat Chhabra';
      default:
        return 'Unknown User';
    }
  };

  const getCarNameWithIfElse = (key) => {
    if (key === 'Bharat_Chhabra') {
      return 'Bharat Chhabra';
    } else if (key === 'Mohit_Kohli') {
      return 'Mohit Kohli';
    } else {
      return 'Unknown User';
    }
  };
  return (
    <>
      <div>FOR LOOP</div>
      <div>{stars}</div>
      <div>Switch Condition --- </div>
      <div>{getCarName('Mohit_Kohli')}</div>
      <div>If Else Condition --- </div>
      <div>{getCarNameWithIfElse('Mohit_Kohli')}</div>
    </>
  );
};

export default ForLoop;
