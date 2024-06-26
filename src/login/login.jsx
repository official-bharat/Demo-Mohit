import { useState } from 'react';
import './login.style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // database
  // const name = 'Bharat'; //  Fixed Value
  // const lastName = email; //  Dynamic Value

  const onSubmit = () => {
    console.log(email, password, 'onSubmit');
    const dbEmail = 'Bharat@gmail.com';
    const dbPassword = '12345678';
    if (dbEmail === email && dbPassword === password) {
      alert('Email Password is correct');
    } else {
      alert('Email Password is incorrect');
    }
  };
  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value); // capture the event type by the keyboard input
          }}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        useState
        <button onClick={() => onSubmit()} type="submit">
          Login
        </button>
        <button
          onClick={() => {
            setName('mohit kohli');
            setEmail('Bharat@gmail.com');
            setPassword('12345678');
          }}
        >
          Change Name Value
        </button>
        <button onClick={() => {}}>Save Information</button>
      </div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
};

export default Login;
