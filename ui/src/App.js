import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Convert from './components/Convert/Convert'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Convert/>
      <Footer/>
    </div>
  );
}

export default App;
