import React from 'react'
import carte from '../Icones/carte.jpg'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import './bande.css'

function Bande() {
  return (
    <div className='bande'>
      <div className='band_left'>
      <div className='logo'>
              <h2>LOGO</h2>
        </div>
        <div className='body'>
            <span style={{fontSize:'35px',color:'white',fontWeight:'bold'}}>Ensemble nous changeons
            <br/>La vie de nos malades</span><br/>
            <span style={{color:'white'}}>Savoir (ou,et quand et comment) sur une <br/>
             seule plateforme avec des données réelles</span><br/>
             <div className='bouton'>
             <button style={{fontSize:'29px',margin:'15px',outline:'none',cursor: 'pointer'}}>Voir les données
             <ArrowDownwardIcon style={{marginLeft:'5px'}}/>
             </button>
             
             </div>
             
        </div>
      </div>
       
        <div className='flash'>
          <img src={carte} style={{height:'175px'}}/>
        </div>
    </div>
  )
}

export default Bande