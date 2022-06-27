import React from "react";
import hospital from "../../Icones/hospital.png";
import medecin from "../../Icones/medecin.png";
import Admin from "../../Icones/admin.png";
import Patient from "../../Icones/patient.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="side_bar">
      <div className="top_sidebar">
        <div className="logo_side">
        <h3>LOGO</h3>
        </div>
        <span style={{fontWeight:'bold',fontSize:'20px'}}>BONJOUR Dr Diallo</span><br/>
        <span style={{color:'gray',fontSize:'12px'}}>Heureux de vous revoir</span>
        
  </div>
      <div className="body">
        <div className="sidebarmenu">
          <ul className="sidebarListe">
           <Link to="/" className="sidebaritem active">
            <DashboardIcon style={{width: "20px", height: "20px",marginRight:'10px',color:'#179CB1'}}/>
           Tableau de Bord
            </Link>
             <Link to="/AjoutAdmin" className="sidebaritem">
            
              <img
                src={Admin}
                alt="Admin"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
                 Ajout Admin  
              
            </Link>
            
            <Link to ="/SerachMedecin" className="sidebaritem">
              <img
                src={medecin}
                alt="Admin"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Medecins
            </Link>
            <li className="sidebaritem">
              <img
                src={Patient}
                alt="Admin"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Patients
            </li>
            <li className="sidebaritem">
              <img
                src={hospital}
                alt="Admin"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Hopitaux
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <button>Se Deconnecter</button>
      </div>
     
    </div>
  );
}

export default SideBar;
