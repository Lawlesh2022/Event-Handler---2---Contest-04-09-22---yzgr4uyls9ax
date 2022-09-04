import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClicka = (event) =>{
   console.log("Button id is:- button-a")
  }
   const handleClickb = (event) =>{
   console.log("Button id is:- button-b")
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick = {handleClicka}>Button A</button>
      <button id="button-b" onClick = {handleClickb}>Button B</button>
    </div>
  )
}


export default App;
