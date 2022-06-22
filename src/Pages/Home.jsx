import React from 'react'
import StatisticDiabete from '../Component/StatisticDiabete'
import StatisticMedecin from '../Component/StatisticMedecin'
import StatisticRegion from '../Component/StatisticRegion'
import TopMedecin from '../Component/TopMedecin'
import carte from "../Icones/carte.jpg"
import Statistic from '../Component/Statistic'
import './home.css'
import Bande from '../Component/Bande'
import TopBar from '../Component/TopBar/TopBar'

function Home() {
  return (
    <div className='home_page'>
      <TopBar/>
      <Bande/>
      <Statistic/>
      <StatisticDiabete/>
      <div className='statistique'>
      <StatisticRegion/>
      <StatisticMedecin/>
      </div>
      <TopMedecin/>
      
     {/* <img src={carte} alt="code "/>    
       <Statistic/>
      
      <div className='statistic1'>
      <StatisticDiabete/>
      <StatisticRegion/>
      </div>
      <div className='statistic2'>
        <StatisticMedecin/>
        <TopMedecin/>

  </div>*/}
       
    </div>
  )
}

export default Home