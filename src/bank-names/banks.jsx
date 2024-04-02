import './banks.style.css'
import { useState } from 'react';
const Banks = () => { 
  const [name, setName] = useState ('HDFC')
  return (
    <>
    <div>{name}</div>
    <button onClick= {() => {
      setName('Kotak');
  }}
  >CHANGE NAME
  </button> 
  </>
  )}

export default Banks;