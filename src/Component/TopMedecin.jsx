import React from 'react'
import './topmedecin.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function TopMedecin() {
  return (
    <div className='medecin_contenu'>
      <ul className='memu_med'>
        <li className='menu_item'>
        <AccountCircleIcon style={{height:'60px',width:'60px'}}/>
        <div className='user_list'>
          <div style={{display:'flex',alignItems:'center'}}>
             <TaskAltIcon style={{fontSize:'small',margin:'5px',color:'gray'}}/>
             <span style={{fontWeight:'bold'}}>Ousmane Camara</span>
          </div>
       
          <span style={{fontSize:'13px',marginLeft:'10px'}}>Diabetique de type A</span>
          <span style={{fontSize:'10px',color:'gray',marginLeft:'10px'}}>En Traitement</span>
        </div>
        </li>
      </ul>
      <ul className='memu_med'>
        <li className='menu_item'>
        <AccountCircleIcon style={{height:'60px',width:'60px'}}/>
        <div className='user_list'>
          <div style={{display:'flex',alignItems:'center'}}>
             <TaskAltIcon style={{fontSize:'small',margin:'5px',color:'gray'}}/>
             <span style={{fontWeight:'bold'}}>Ousmane Camara</span>
          </div>
          <span style={{fontSize:'13px',marginLeft:'10px'}}>Diabetique de type A</span>
          <span style={{fontSize:'10px',color:'gray',marginLeft:'10px'}}>En Traitement</span>
        </div>
        </li>
      </ul>
      <ul className='memu_med'>
        <li className='menu_item'>
        <AccountCircleIcon style={{height:'60px',width:'60px'}}/>
        <div className='user_list'>
          <div style={{display:'flex',alignItems:'center'}}>
             <TaskAltIcon style={{fontSize:'small',margin:'5px',color:'gray'}}/>
             <span style={{fontWeight:'bold'}}>Ousmane Camara</span>
          </div>
       
          <span style={{fontSize:'13px',marginLeft:'10px'}}>Diabetique de type A</span>
          <span style={{fontSize:'10px',color:'gray',marginLeft:'10px'}}>En Traitement</span>
        </div>
        </li>
      </ul>
      <ul className='memu_med'>
        <li className='menu_item'>
        <AccountCircleIcon style={{height:'60px',width:'60px'}}/>
        <div className='user_list'>
          <div style={{display:'flex',alignItems:'center'}}>
             <TaskAltIcon style={{fontSize:'small',margin:'5px',color:'gray'}}/>
             <span style={{fontWeight:'bold'}}>Ousmane Camara</span>
          </div>
       
          <span style={{fontSize:'13px',marginLeft:'10px'}}>Diabetique de type A</span>
          <span style={{fontSize:'10px',color:'gray',marginLeft:'10px'}}>En Traitement</span>
        </div>
        </li>
      </ul>
      
       
    </div>
  )
}

export default TopMedecin