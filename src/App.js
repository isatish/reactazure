import React from 'react';
import './App.css';

function App() {
let name = 'Satish';
  const sayHello = (userName) => {
    const code = 'FBPUcCxnS8xPLrQuTWthjplaTpK1x5Ob3pVDppl1b3up3LWwgYOSGQ==';
    fetch(`https://sendsmstomobile.azurewebsites.net/api/HTUpdateCosmos?code=${code}&name=${userName}`)
        .then(res => console.log(res))
        .catch(console.log)
      }
  
  const onChangeHandler = (e) =>{
    name = e.target.value;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Azure</p>
      </header>
      <div className="App-container">
        <input type="text" onChange={onChangeHandler}/>
        <button onClick={()=>sayHello(name)}>Say Hello</button>
      </div>
    </div>
  );
}

export default App;
