import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPost from './components/AddPost';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <Signup/>
      <Login/>
      <AddPost/>
      <ViewAll/>
    </div>
  );
}

export default App;
