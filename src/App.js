
import './App.css';
import SideBar from './Component/Sidebar/SideBar';
import TopBar from './Component/TopBar/TopBar';
import Home from './Pages/Home';
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import AjoutAdmin from './Pages/AjoutAdmin';
import RechercheDoctor from './Pages/RechercheDoctor';
import Bande from './Component/Bande';

function App() {
  return (
    <div className='App'>
      <SideBar/>
       
       <Home/>
    
    {/*<Router >
       <TopBar/>
       <div className='container'>
       <SideBar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/AjoutAdmin' element={<AjoutAdmin/>}/>
       
        
       </Routes>
       </div>
      
       
  </Router>*/}
  </div>
  );
}

export default App;
