import './banks.style.css';
import { useState } from 'react';
const Banking = () => {
  const [name, setName] = useState('HDFC');
  return (
    <>
      <div>{name}</div>
      <button
        onClick={() => {
          setName('Kotak');
        }}
      >
        CHANGE NAME
      </button>
    </>
  );
};
const Banks = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

 
      const onSubmit = () => {
    console.log(email, password,"onSubmit");
    const dbEmail = 'Bharat@gmail.com';
const dbPassword = '12345678';
    if (dbEmail === email && dbPassword === password) {
      alert('Email Password is correct');
    } else {
      alert('Email Password is incorrect');
      
    }
  };
    
  return (
    // <div
    //   style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    // >
    //   <div className="para">
    //     <p>Login</p>
    //     <input className="mail" type="text" value={email} placeholder="Email" />

    //     <input
    //       className="passwrd"
    //       type="password"
    //       value={password}
    //       placeholder="password"
    //     />
    //     <button className="forgot">Forgot password</button>
    //     <button className="log">Login</button>
    //   </div>

    //   <div className="sign">
    //     <p>Dont have an account ? </p>
    //     <button className="up"> Signup </button>
    //   </div>
    // </div>

    <div
      className="container-signup"
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <p className="up">SignUp</p>
      <input
        className="maillog"
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        className="maillog"
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <input
        className="maillog"
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        className="maillog"
        type="text"
        placeholder=" create password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={() => onSubmit()} type="submit">
        Login
      </button>
      <button className="signup-button">Signup</button>
    </div>
  );
};

export default Banks;
