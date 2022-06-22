import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import './ajoutadmin.css'

function AjoutAdmin() {
  return (
    <div className='admincontainer'>
        <div className='contenu'>
            <h2 style={{marginLeft:'30%',color:'#179CB1'}}>AJOUT ADMIN</h2>
            <div className="input-item">
        <PersonIcon />
        <input type="text" placeholder="Nom" />
        </div>
        <div className="input-item">
        <PersonIcon />
        <input type="text" placeholder="Prenom" />
        </div>
        <div className="input-item">
        <LoginIcon />
        <input type="text" placeholder="Login" />
        </div>
         <div className="input-item">
        <LockOpenIcon />
        <input type="password" placeholder="Password" />
         </div>
         <button style={{background:'#179CB1',marginLeft:'30%',width:'40%',padding:'10px',color:'white',fontSize:'25px'}} >Ajouter</button>
        </div>

    </div>
  )
}

export default AjoutAdmin