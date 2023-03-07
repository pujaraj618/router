import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='*' element={<PageNotFound/>} />
       </Routes>
    </Router>
    </>
  );
}

export default App;
