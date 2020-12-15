import './App.css';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
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
     <div className="card App-card">
      <form onSubmit={getExpression}>
        <h3>Enter a infix expression</h3>
        <input
          style={{width:"400px",
          marginRight:"10px"}}
          type='text' 
          placeholder="Enter your expression here!"
          value={expression} 
          onChange={updateExpression}
        />
        <CardActions>
        <button 
           style={{
           backgroundColor: '#0063cc',
           '&:hover': {
           backgroundColor:'#0063cc'},
           marginLeft:"250px",
           }}
           type='submit'
           className="btn waves-effect waves-light #64b5f6 blue darken-2" 
        >
           Submit
        </button>
        </CardActions>
      </form>
       <h4>Postfix expression: {result}</h4>
    </div>
   </div>
  );
}

export default App;

