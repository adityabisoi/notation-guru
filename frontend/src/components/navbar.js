import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InfixToPostfix from "./infixtopostfix";
import PostfixToInfix from "./postfixtoinfix";
import InfixToPrefix from "./infixtoprefix";
import PrefixToInfix from "./prefixtoinfix";
import PrefixToPostfix from "./prefixtopostfix";
import PostfixToPrefix from "./postfixtoprefix";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import '../index.css';
import ToggleButton from "./togglebutton";

const NavBar = () => {

  const navLinks = [
    { title: `InfixToPostfix`, path: `/` },
    { title: `PostfixToInfix`, path: `/postfixtoinfix` },
    { title: `InfixToPrefix`, path: `/infixtoprefix` },
    { title: `PrefixToInfix`, path: `/prefixtoinfix` },
    {title: `PrefixToPostfix`, path:`/prefixtopostfix`},
    {title: `PostfixToPrefix`, path:`/postfixtoprefix`}
  ]

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [mode,setMode]=useState("light");

  const  toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 17, 17)';
     }

   else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundImage: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              style={{ color: 'black' }}
            >

              <HomeIcon fontSize="large" style={{ color: 'black' }} />
              Notation-Convertor

            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navLinks.map(({ title, path }) => (
                  <MenuItem key={title} onClick={handleCloseNavMenu}>

                    <Link href={path} textAlign="center" underline="none">
                      {title}
                    </Link>

                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Notation-Converter
            </Typography>

            <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map(({ title, path }) => (
                <Button
                  key={title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={path}
                  className="navbar-btn"
                >
                  {title}
                </Button>
              ))}
            </Box>

            <ToggleButton
              mode={mode}
              toggleMode={toggleMode}
            />

          </Toolbar>
        </Container>
      </AppBar>

      <Router>
        <Routes>
          <Route path="/" element={<InfixToPostfix />} />
          <Route path="/postfixtoinfix" element={<PostfixToInfix />} />
          <Route path="/infixtoprefix" element={<InfixToPrefix />} />
          <Route path="/prefixtoinfix" element={<PrefixToInfix />} />
          <Route path="/prefixtopostfix" element={<PrefixToPostfix/>}/>
          <Route path="/postfixtoprefix" element={<PostfixToPrefix/>}/>
        </Routes>
      </Router>
    </>

  );

}

export default NavBar;