import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Characters from './pages/Characters';
import Editions from './pages/Editions';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes> 
    <Route path='' element = {<Home/>}/>
    <Route path='characters' element = {<Characters/>}/>
    <Route path='editions' element = {<Editions/>}/>
    <Route path='aboutme' element = {<Aboutme/>}/>
    
    
    </Routes>

    </div>
  );
}

export default App;
