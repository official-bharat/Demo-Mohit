import React from 'react';
import ReactDOM from 'react-dom/client';
import CarModels from './car-models/cars';
// import Banks from './bank-names/banks.jsx';
import './index.css';
import Login from './login/login.jsx';
import App from './App.jsx';
import { Banks, Cars, Investment } from './loop-learning/index.jsx';
import MohitKohli from './loop-learning/index.jsx';
import ForLoop from './forloop/index.jsx';
import ImagesDemo from './imagesDemo.jsx';
import Revision from './revision-use-state/revision.jsx'
import Todo from './todo/index.jsx';
// import practice from './practice/practice.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CarModels />
    <Login />
    <App /> */}
    {/* <Banks />
    <Cars />
    <Investment />
    <MohitKohli /> */}
    {/* <Login /> */}
    {/* <Revision /> */}
    <Todo />

  </React.StrictMode>,
);
