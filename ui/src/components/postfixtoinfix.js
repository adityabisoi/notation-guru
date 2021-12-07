import '../App.css';
import { useState} from 'react';
import axios from 'axios'
// import CardActions from '@material-ui/core/CardActions';

const InfixToPostfix=()=> {

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
    axios.post('http://localhost:5000/api/postfixToInfix',{
      "expression": exp
    }).then(data=>setResult(data.data.expression))
  }

  return (
  <div className="App">
     <div className="card App-card">
      <form onSubmit={getExpression}>
        <h3 style={{color:"orange"}}>Enter a Postfix Expression</h3>
        <input
          style={{width:"400px",
          marginRight:"10px"}}
          type='text' 
          placeholder="Enter your expression here!"
          value={expression} 
          onChange={updateExpression}
        />
        {/* <CardActions> */}
         <button 
           style={{
           marginLeft:"250px",
           }}
           type='submit'
           className="btn waves-effect waves-light #64b5f6 blue darken-2" 
          >
          Submit
        </button>
        {/* </CardActions> */}
      </form>
      {result &&  (
         <><hr/><h3 style={{color:"green"}}>Infix Expression</h3><h5>{result}</h5></>
      )}
    </div>
  </div>
  );
}
export default InfixToPostfix;