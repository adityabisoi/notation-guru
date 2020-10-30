import './App.css';
import { useState } from 'react';
import axios from 'axios'
const App=()=> {

  const [expression,setExpression]=useState('')
  const [result,setResult]=useState('')

  const updateExpression=(e)=>{
    setExpression(e.target.value)
  }

  const getExpression = (e) => {
    e.preventDefault()
    sendExpression(expression)
  }

  const sendExpression=(exp)=>{
    axios.post('http://localhost:5000/api',{
      "expression": exp
    }).then(data=>setResult(data.data.expression))
  }

  return (
    <div className="App">
      <br />
      <form onSubmit={getExpression}>
        <label>Enter a infix expression: </label>
        <input type='text' value={expression} onChange={updateExpression}/>
        <button type='submit' >Submit</button>
      </form>
      <br/>
      <h3>Postfix expression: {result}</h3>
    </div>
  );
}

export default App;
