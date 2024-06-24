import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPost from './components/AddPost';
import ViewAll from './components/ViewAll';
import ViewMyPosts from './components/ViewMyPosts';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
        <Route path='/viewmyposts' element={<ViewMyPosts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
