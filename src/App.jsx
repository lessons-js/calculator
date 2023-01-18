import { useState } from 'react';
import './App.css';


const send = (a, b , operator, callback) => {
  const body = JSON.stringify({ a, b});
  const headers = { 'Content-Type': 'application/json'};
  fetch(`http://localhost:3001/calc/${operator}`, {method:'POST',headers, body}).then(res => res.json()).then(res => {
    callback(res);
  })
}

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState([]);
  const [operator, setOperator] = useState('+');

  const onAChange = (e) => setA(+e.target.value || 0);
  const onBChange = (e) => setB(+e.target.value || 0);
  const onOperatorChange = (op) => {
    setOperator(op);
  };
  const sumbite = () => {
    send(a, b, operator, (res) => {
      setResult(res.result);
    });
  };
  return (
    <div className="App">
      <div>
        <div className="values">
          <input type='number' onChange={onAChange} />
          <input type='number' onChange={onBChange} />
        </div>
        <div>
          <Operator selected={operator} onClick={onOperatorChange} operator='plus' />
          <Operator selected={operator} onClick={onOperatorChange} operator='minus' />
          <Operator selected={operator} onClick={onOperatorChange} operator='multiply' />
          <Operator selected={operator} onClick={onOperatorChange} operator='divide' />
          <Operator selected={operator} onClick={onOperatorChange} operator='involve' />
          <Operator selected={operator} onClick={onOperatorChange} operator='remainder' />
          <Operator onClick={sumbite} operator='=' />
        </div>
      </div>
      <p>Result: {result}</p>
      <hr />
    </div>
  );
}

const Operator = ({ operator, onClick, selected }) => {
  return (
    <button className='operator-btn' disabled={selected === operator} onClick={() => onClick(operator)}>{operator}</button>
  )
}



export default App;
