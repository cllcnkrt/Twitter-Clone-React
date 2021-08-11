import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
function Sidebar() {
  return (
    <div className="sidebar">
      {/* twitter icon */}
      <TwitterIcon color="primary" />

      {/* SidebarOptions */}
      <SidebarOption Icon={HomeIcon} text="Home"/>
  
      <SidebarOption Icon={SearchIcon} text="Explore"/>
    
       <SidebarOption Icon={HomeIcon} text="Notifications"/> 
     

      {/* Button -> Tweet */}
    </div>
  );
}

export default Sidebar;
