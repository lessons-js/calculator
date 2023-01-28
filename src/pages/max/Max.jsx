import React, { useState, useEffect } from 'react';

const calc = (a, b, op) => {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;

    default: return 'Unsupported operator';
  }
}

const Operator = ({ operator, onClick, selected }) => {
  return (
    <button className='operator-btn' disabled={selected === operator} onClick={() => onClick(operator)}>{operator}</button>
  )
}

const Heros = () => {
  const [heros, setHeros] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/').then(res => res.json()).then(res => {
      setHeros(res.results);
    })
  }, []);

  return (
    <>
      {
        heros?.map(h => <p key={h.name}>{h.name}</p>)
      }
    </>
  )
}

export default function MaxComponent() {
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
      <hr />
      <Heros />
    </div>
  );
}
