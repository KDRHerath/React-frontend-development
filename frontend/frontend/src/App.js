import { BrowserRouter,Route,Routes } from 'react-router-dom';  
import './App.css';
import Home from  './pages/home';
import Login from './pages/Login';
import Registation from './pages/Registation';




function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          
          <Route path='/login' element = {<Login/>}/>
          <Route path ='/registation' element = {<Registation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
