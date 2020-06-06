import React from 'react';
import './App.css';

import Routes from './routes';

//import Header from './Header';

// JSX: Sintaxe de XML dentro do javascript

function App() {
  /*const [counter, setCounter] = useState(0); // função para atualizar o valor do estado

  function handleButtonClick() {
    setCounter(counter + 1);
  }*/

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
