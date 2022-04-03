
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Videos from './Components/Videos/Videos';

function App() {
  return(
    <>
      <Navbar></Navbar>
    <Routes>(
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/videos' element={<Videos></Videos>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </>
    );
}

export default App;
