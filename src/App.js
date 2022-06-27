
import './App.css';
import SideBar from './Component/Sidebar/SideBar';
import TopBar from './Component/TopBar/TopBar';
import Home from './Pages/Home';
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import AjoutAdmin from './Pages/AjoutAdmin';
import RechercheDoctor from './Pages/RechercheDoctor';
import Bande from './Component/Bande';

function App() {
  return(
     <Router >
      <div className='App'>
      <SideBar/>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/AjoutAdmin' element={<AjoutAdmin/>}/>
       <Route path='/SerachMedecin' element={<RechercheDoctor/>}/>
       </Routes>
  </div>
     </Router>
  );
  
}

export default App;
