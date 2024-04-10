1. Go To terminal
2. git clone https://github.com/official-bharat/Demo-Mohit.git
3. cd Demo-Mohit
4. code . // command for VS Code

5. npm install
6. npm run dev

7. index.html -> src="/src/main.jsx"

8. make a folder in src
9. file name -> cars.jsx, cars.style.css

10. cars.jsx

import React from 'react';
import './cars.style.css';

const Cars = () => {
return <div>cars</div>;
};

export default Cars;

11. cars.style.css

p1 {
color:#000
}

12. Folder Path of Main.jsx -> src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import CarModels from './car-models/cars'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<CarModels />
</React.StrictMode>,
);

13. initila state of hooks

import { useState } from 'react';
import './cars.style.css';

const Cars = () => {
const [name, setName] = useState('Hyundai')
return <div>cars</div>;
};

export default Cars;

onClick={() => {}}
