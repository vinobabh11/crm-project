import React from "react";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const router = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  
  return (
    <div className="topNavbar">
      <div>User Details</div>
      <div onClick={handleLogout}>Log out</div>
    </div>
  );
};

export default TopNav;
