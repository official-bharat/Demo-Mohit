import React from 'react'
import ReactDOM from 'react-dom/client'
import CarModels from './car-models/cars'
import Banks from "./bank-names/banks.jsx"
import './index.css'
import Login from './login/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);
