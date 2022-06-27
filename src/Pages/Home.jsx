import React from "react";
import StatisticDiabete from "../Component/StatisticDiabete";
import StatisticMedecin from "../Component/StatisticMedecin";
import StatisticRegion from "../Component/StatisticRegion";
import TopMedecin from "../Component/TopMedecin";
import Statistic from "../Component/Statistic";
import "./home.css";
import Bande from "../Component/Bande";
import TopBar from "../Component/TopBar/TopBar";

function Home() {
  return (
    <div className="home_page">
      <TopBar />
      <Statistic />
      <Bande />
      <StatisticDiabete />
      <div className="statistique">
      <StatisticMedecin />
        <StatisticRegion />
        
      </div>
      <TopMedecin />
    </div>
  );
}

export default Home;
