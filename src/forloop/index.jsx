import React from 'react';

const ForLoop = () => {
  const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
  const CarName = [
    { name: 'KiA', rating: 5 },
    { name: 'KiA', rating: 5 },
    { name: 'KiA', rating: 5 },
    { name: 'KiA', rating: 5 },
  ];
  let stars = '';
  for (let i = 0; i < CarName.length; i++) {
    console.log(i, 'i', CarName[i].name);
  }

  const getCarName = (key) => {
    switch (key) {
      case 'Mohit_Kohli':
        return 'Mohit Kohli';
      case 'Bharat_Chhabra':
        return 'Bharat Chhabra';
      // return `Kohli ${lastName} ${age}`
      // return 'Kohli' + ' ' + lastName + ' ' + age;
      default:
        return 'Unknown User';
    }
  };
  return (
    <>
      <div>FOR LOOP</div>
      <div>{stars}</div>
      <div>Switch Case</div>
      <div>{getCarName('Mohit_Kohli')}</div>
    </>
  );
};

export default ForLoop;
