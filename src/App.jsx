import { useState } from 'react';
import './App.css';

const App = () => {
  const [initialState, setState] = useState({
    name: 'Kia',
    model: '2024',
  });
  const [name, setName] = useState('Bharat');
  console.log('name: ', name);
  // name for initial state
  // setName for update the name
  // hook

  const bool = true;
  const str = 'Bharat';
  const car = {
    name: 'Bharat',
    age: 27,
  };

  const [boolean, setBoolean] = useState(true);
  console.log('boolean: ', boolean);

  const [string, setString] = useState('Bharat');
  console.log('string: ', string);

  const [object, setObject] = useState({
    name: 'Bharat',
    age: 27,
  });
  console.log('object: ', object);

  // key for initial state
  // setKey for update the value of the key
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

  const CarModels = ['KIA', 'HYUNDAI', 'TATA'];

  return (
    <>
      <div className="container">
        {name} {initialState.name} - {initialState.model}
        {CarModels.map((cars, index) => {
          return <p key={index}>{cars}</p>;
        })}
        {products.map((res, index) => {
          return (
            <div key={index} style={{ backgroundColor: '#fff' }}>
              <p>{res.name}</p>
              <p>{res.description}</p>
              <p>{res.price}</p>
              <p>{index}</p>
            </div>
          );
        })}
      </div>
      <button
        // props
        onClick={() => {
          // update the name
          setName('mohit');
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setState({
            name: 'Hyundai',
            model: '2023',
          });
        }}
      >
        Change Product
      </button>
    </>
  );
};

export default App;
