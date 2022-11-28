import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutCharacters from './pages/AboutCharacters';
import Aboutme from './pages/Aboutme';
import Characters from './pages/Characters';
import Editions from './pages/Editions';
import Home from './pages/Home';
import NewCharacter from './pages/NewCharacter';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes> 
    <Route path='' element = {<Home/>}/>
    <Route path='characters' element = {<Characters/>}/>
    <Route path='editions' element = {<Editions/>}/>
    <Route path='aboutme' element = {<Aboutme/>}/>
    <Route path='create' element = { <NewCharacter/>}/>
    
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
