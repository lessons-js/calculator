import { useState } from 'react';

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result,setResult] = useState('')
  const [operator, setOperator] = useState('+');

  const onAChange = (e) => setA(+e.target.value || 0);
  const onBChange = (e) => setB(+e.target.value || 0);
  const onOperatorChange = (op) => {
    setOperator(op);
  }

  const sendCalc = () => {

    fetch(`http://localhost:3001/resCalc/${operator}`,{ method: 'POST', body: JSON.stringify({ a: a, b: b }), headers: { 'content-type': 'application/json' }}).then(res => res.json()).then(res => {
      setResult(res.result);
    })
  }
  return (
    <div className="App">
      <div>
        <div className="values">
          <input type='number' onChange={onAChange} />
          <input type='number' onChange={onBChange} />
        </div>
        <div>
          <Operator selected={operator} onClick={onOperatorChange} operator='minus' />
          <Operator selected={operator} onClick={onOperatorChange} operator='plus' />
          <Operator selected={operator} onClick={onOperatorChange} operator='multi' />
          <Operator selected={operator} onClick={onOperatorChange} operator='divide' />
          <div className='sendButton' onClick={sendCalc}>=</div>
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
