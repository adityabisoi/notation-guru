import './convert.css'
import { useState } from 'react'
import StackTable from '../StackTable/StackTable'

function Convert(){
    const [warning,setWarning] = useState(0)
    const [expression,setExpression] = useState({
        infix: 'a+b-c',
        prefix: '',
        postfix: '',
        prefixtable: [],
        postfixtable: []
    })

    const updateExpression=(e)=>{
        var supportedSet =  /^[a-zA-Z0-9^*+()-/ ]*$/
        if(!e.target.value.match(supportedSet)){
            setWarning(1)
        }
        else{
            setWarning(0)
        }
        setExpression(prevExpression=>{
            return {
                ...prevExpression,
                "infix":e.target.value
            }
        })
    }
    
    const convertExpression=async(e)=>{
        e.preventDefault()
        const options={
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"expression":expression.infix})
          }
        const [prefixRes, PostfixRes] = await Promise.all([
            fetch(`http://localhost:5000/api/infixToPrefix`,options),
            fetch(`http://localhost:5000/api/infixToPostfix`,options)
          ]);
        const prefix=await prefixRes.json()
        const postfix=await PostfixRes.json()
        setExpression(prevExpression=>{
            return {
                ...prevExpression,
                "prefix":prefix.output,
                "postfix":postfix.output,
                "prefixtable":prefix.data,
                "postfixtable":postfix.data
            }
        })
    }
    return(
        <div>
        <div className="main-content">
            <form onSubmit={convertExpression} className="form">
                <div className="form-group">
                    <label className="newlabel">Infix</label>
                    <input type="text"
                        name="infix"
                        className="input-control"
                        value={expression.infix}
                        onChange={updateExpression}
                        placeholder="a+b-c" />
                    {warning===1 && <label className="warning">Not a valid character</label>}
                </div>
                <div>
                    <button type='submit'>Convert</button>
                    <div className="demo">
                        <ul>
                            <li>Allowed Characters: </li>
                            <li>Alphanumeric</li>
                            <li>Special Characters: ^, +, -, *, /, ( )</li>
                        </ul>
                    </div>
                </div>                
            </form>
            </div>
            <div className='results'>
            <div className="form-group">
                <div className="prefix-header">
                    <label className="newlabel">Prefix</label>
                    <input type="text"
                    name="prefix"
                    className="input"
                    value={expression.prefix}
                    placeholder="-+abc"
                    readOnly/>
                </div>
                <div className="postfix-header">
                    <label className="newlabel">Postfix</label>
                    <input type="text"
                    name="postfix"
                    className="input"
                    value={expression.postfix}
                    placeholder="ab+c-"
                    readOnly/>
                </div>
            </div>
            </div>
            <div className="content">
                <div className="form-group">
                <div className="box">
                    {expression.prefixtable.length>0 && <StackTable data={expression.prefixtable}/>}
                </div>
                <div className="box">
                    {expression.postfixtable.length>0 && <StackTable data={expression.postfixtable}/>}
                </div>                
                </div>
            </div>
        </div>
    )
}

export default Convert