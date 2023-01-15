import { useState } from 'react';
import './App.css';

const calc = (a, b, op) => {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;

    default: return 'Unsupported operator';
  }
}

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState('+');

  const onAChange = (e) => setA(+e.target.value || 0);
  const onBChange = (e) => setB(+e.target.value || 0);
  const onOperatorChange = (op) => {
    setOperator(op);
  }

  const result = calc(a, b, operator);

  return (
    <div className="App">
      <div>
        <div className="values">
          <input type='number' onChange={onAChange} />
          <input type='number' onChange={onBChange} />
        </div>
        <div>
          <Operator selected={operator} onClick={onOperatorChange} operator='+' />
          <Operator selected={operator} onClick={onOperatorChange} operator='-' />
          <Operator selected={operator} onClick={onOperatorChange} operator='*' />
          <Operator selected={operator} onClick={onOperatorChange} operator='/' />
        </div>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

const Operator = ({ operator, onClick, selected }) => {
  return (
    <button className='operator-btn' disabled={selected === operator} onClick={() => onClick(operator)}>{operator}</button>
  )
}

export default App;
