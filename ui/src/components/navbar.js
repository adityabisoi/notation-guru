import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { css } from '@emotion/react';
import InfixToPostfix from "./infixtopostfix";
import PostfixToInfix from "./postfixtoinfix";
import InfixToPrefix from "./infixtoprefix";
import PrefixToInfix from "./prefixtoinfix";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NavBar = () => {

  const navLinks = [
    { title: `InfixToPostfix`, path: `/` },
    { title: `PostfixToInfix`, path: `/postfixtoinfix` },
    { title: `InfixToPrefix`, path: `/infixtoprefix` },
    { title: `PrefixToInfix`, path: `/prefixtoinfix` }
  ]

  return (
    <>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <IconButton edge="start" style={{ color: "yellow" }} aria-label="home">
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" style={{ color: "yellow" }}>Notation-converter </Typography>
          <List css={css`
          color: 'primary',
          display: 'flex',
          justifyContent: 'space-between'
        `}>
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} css={css`
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  color: 'white'
            `}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>

        </Toolbar>
      </AppBar>
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