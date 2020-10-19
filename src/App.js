import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

//https://sendsmstomobile.azurewebsites.net/api/HttpTriggerUpdateCosmosDB?code=cY8VsSEJtq518zu4Waxoz30rZkPCaEbVj10wndUoaXvQ24E36dmepw==&name=pramod
function App() {
  let name = 'Satish';
  const [azResponse, setData] = useState();
  const sayHello = (userName) => {
    const code = 'cY8VsSEJtq518zu4Waxoz30rZkPCaEbVj10wndUoaXvQ24E36dmepw==';
    axios.get(`https://sendsmstomobile.azurewebsites.net/api/HttpTriggerUpdateCosmosDB?code=${code}&name=${userName}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
  }

  const onChangeHandler = (e) => {
    name = e.target.value;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Azure Demo</p>
      </header>
      <div className="App-container">
        <input type="text" onChange={onChangeHandler} />
        <button onClick={() => sayHello(name)}>Say Hello</button>
        <br />
        <div>{azResponse}</div>
      </div>
    </div>
  );
}

export default App;
