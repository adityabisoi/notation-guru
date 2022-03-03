import '../App.css';
import { useState } from 'react';
import axios from 'axios'
import CardActions from '@mui/material/CardActions';

const InfixToPostfix = () => {

  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [resultTable, setResultTable] = useState('')

  const updateExpression = (e) => {
    setExpression(e.target.value)
  }

  const getExpression = (e) => {
    e.preventDefault()
    sendExpression(expression)
  }

  const sendExpression = (exp) => {
    axios.post(`${window.location.origin}/api/infixToPostfix`, {
      "expression": exp
    }).then(data => {
      setResult(data.data.expression[0])
      setResultTable(data.data.expression[1])
      }
    })
  }

  return (
    <div className="App">
      <div className="card App-card">
        <form onSubmit={getExpression}>
          <h3 style={{ color: "orange" }}>Enter a Infix Expression</h3>
          <input
            style={{
              width: "400px",
              marginRight: "10px"
            }}
            type='text'
            placeholder="Enter your expression here!"
            value={expression}
            onChange={updateExpression}
          />
          <CardActions>
            <button
              style={{
                marginLeft: "250px",
              }}
              type='submit'
              className="btn waves-effect waves-light #64b5f6 blue darken-2"
            >
              Submit
            </button>
          </CardActions>
        </form>
        {result && (
          <><hr /><h3 style={{ color: "green" }}>Postfix Expression</h3><h5>{result}</h5></>
        )}
        { resultTable && (<table>
  <thead>
    <tr>
      <th>Input</th>
      <th>Stack</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody> {resultTable.map(item => {
      return (
        <tr >
          <td>{ item.input }</td>
          <td>{ item.stack }</td>
          <td>{ item.output }</td>
        </tr>
      );
    })}
  </tbody>
</table>) }
      </div>
    </div>
  );
}
export default InfixToPostfix;