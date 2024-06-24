import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPost from './components/AddPost';
import ViewAll from './components/ViewAll';
import ViewMyPosts from './components/ViewMyPosts';

function App() {
  return (
    <div>
      <Signup/>
      <Login/>
      <AddPost/>
      <ViewAll/>
      <ViewMyPosts/>
    </div>
  );
}

export default App;
