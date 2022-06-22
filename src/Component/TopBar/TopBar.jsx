import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="top">
        <div className="avatar">
          <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
          <h3>Dr Diallo</h3>
        </div>
        
        
        <div className="topcenter">
          <SearchIcon style={{marginLeft:'5px'}}/>
          <input type="text" placeholder="Recherche"/>
        </div>
        <div className="toprigth">
          <NotificationsActiveIcon />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
