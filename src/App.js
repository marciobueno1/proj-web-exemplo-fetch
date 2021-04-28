import React, { useState } from 'react';
import './App.css';

import { CardPessoa } from './CardPessoa';

function App() {
  const [id, setId] = useState("12");
  const [pessoa, setPessoa] = useState();

  const handleIdChange = (evt) => {
    setId(evt.target.value);
  }

  const handleOkClick = () => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(res => res.json())
      .then(data => {
        if (data && data.name) {
          console.log('data', data);
          setPessoa(data);
        } else {
          setPessoa();
          console.log('Detalhe do problema: ', data.detail);
        }
      })
      .catch(err => {
        setPessoa();
        console.log('Erro: ', err);
      })
  }

  return (
    <div className="App">
      <input type="text" value={id} onChange={handleIdChange} />
      <button onClick={handleOkClick}>OK</button>
      <br />
      <br />
      <CardPessoa pessoa={pessoa} />
    </div>
  );
}

export default App;
