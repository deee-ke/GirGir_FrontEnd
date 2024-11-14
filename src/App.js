//App.js
// import { Route, Routes } from 'react-router';
// import { Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
