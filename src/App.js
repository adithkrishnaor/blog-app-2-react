import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPost from './components/AddPost';

function App() {
  return (
    <div>
      <Signup/>
      <Login/>
      <AddPost/>
    </div>
  );
}

export default App;
