import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { List, ListItem, ListItemText,Typography ,Toolbar } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import { Home } from "@material-ui/icons";
import InfixToPostfix from "./infixtopostfix";
import PostfixToInfix from "./postfixtoinfix";
import InfixToPrefix from "./infixtoprefix";
import PrefixToInfix from "./prefixtoinfix";

// const useStyles = makeStyles((theme) => ({
//     navDisplayFlex: {
//       color:'primary',
//       display: `flex`,
//       justifyContent: `space-between`
//     },
//     linkText: {
//       textDecoration: `none`,
//       textTransform: `uppercase`,
//       color: `white`
//     }
//   }));

const NavBar = () => {
  // const classes = useStyles();

  const navLinks = [
    { title: `InfixToPostfix`, path: `/` },
    { title: `PostfixToInfix`, path: `/postfixtoinfix` },
    { title: `InfixToPrefix`, path: `/infixtoprefix` },
    { title: `PrefixToInfix`, path: `/prefixtoinfix` }
  ]

  return (
    <>
      {/* <AppBar  position="static" color="secondary" >
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
        </AppBar> */}
      <Router>
        <Routes>
          <Route path="/" element={<InfixToPostfix />} />
          <Route path="/postfixtoinfix" element={<PostfixToInfix />} />
          <Route path="/infixtoprefix" element={<InfixToPrefix />} />
          <Route path="/prefixtoinfix" element={<PrefixToInfix />} />
        </Routes>
      </Router>
    </>
  )
}

export default NavBar;