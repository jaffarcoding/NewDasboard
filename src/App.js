import './App.css';
import Login from './component/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Addclients from './component/addclients/Addclients';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/client' element={<Header/>}/>
        <Route path='/add' element={<Addclients/>}/>
      </Routes>
    </Router>
  );
}

export default App;
