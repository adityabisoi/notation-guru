import './App.css';
import { List, ListItem, ListItemText,Typography ,Toolbar } from "@material-ui/core";
import { useState} from 'react';
import axios from 'axios'
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Home } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  navDisplayFlex: {
    color:'primary',
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
}));
const App=()=> {
  const classes = useStyles();
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
    axios.post('http://localhost:5000/api/infixToPostfix',{
      "expression": exp
    }).then(data=>setResult(data.data.expression))
  }

  const navLinks = [
    { title: `infixToPostfix`, path: `` },
    { title: `postfixToInfix`, path: `` },
    { title: `infixToPrefix`, path: `` }
  ]
  return (
  <div className="App">
      <AppBar  position="static" color="secondary" >
        <Toolbar>
          <IconButton edge="start" style={{color:"yellow"}} aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Typography variant="h6" style={{color:"yellow"}}>Notation-converter </Typography>
          <List className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                  <ListItemText primary={title} />
                  </ListItem>
                </a>
            ))}
          </List>
        </Toolbar>
       </AppBar>
     <div className="card App-card">
      <form onSubmit={getExpression}>
        <h3 style={{color:"orange"}}>Enter a Infix Expression</h3>
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
           marginLeft:"250px",
           }}
           type='submit'
           className="btn waves-effect waves-light #64b5f6 blue darken-2" 
          >
          Submit
        </button>
        </CardActions>
      </form>
      {result &&  (
         <><hr/><h3 style={{color:"green"}}>Postfix Expression</h3><h5>{result}</h5></>
      )}
    </div>
  </div>
  );
}
export default App;
