import React from "react";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const router = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/");
  };
  
  return (
    <div className="topNavbar">
      <div onClick={handleLogout}>Log out</div>
    </div>
  );
};

export default TopNav;
