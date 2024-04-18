import React from 'react';
import { PrimaryButton, SecondaryButton } from '../components/button';

export const Cars = () => {
  const CarModels = ['KiA', 'HYUNDAI', 'TATA', 'MARUTI'];
  const CarName = [
    { name: 'KiA' },
    { name: 'KiA' },
    { name: 'KiA' },
    { name: 'KiA' },
  ];
  const CarsYear = [2016, 2017, 2018, 2019];
  return (
    <div>
      {CarModels.map((cars) => {
        return (
          <>
            <div>{cars}</div>
          </>
        );
      })}
      {CarsYear.map((years) => {
        return (
          <>
            <div>{years}</div>
          </>
        );
      })}
      {CarName.map((carsName) => {
        const name = carsName.name;
        return (
          <>
            <div>{name}</div>
          </>
        );
      })}
    </div>
  );
};
export const Banks = () => {
  return (
    <>
      <div>Hello World Banks</div>
      <div>Hello World Banks</div>
      <Books />
    </>
  );
};

export const Investment = () => {
  return <div>Hello World Investment</div>;
};

const Books = () => {
  return (
    <div>
      {['Book1', 'Book2', 'Book3', 'Book4'].map((cars) => {
        return (
          <>
            <div>{cars}</div>
          </>
        );
      })}
    </div>
  );
};

const BankLearning = () => {
  return (
    <div>
      Hello World BankLearning
      <Books />
      <Cars />
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
};
export default BankLearning;
