import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDash } from "../../redux/reducers/dashboardSlice";

const SideNavbar = () => {
  const [active, setActive] = useState('Dashboard');
  const dispatch = useDispatch();

  const handleOnClick =(e)=>{
    e.preventDefault();
    dispatch(changeDash(e.target.innerHTML))
    setActive(e.target.innerHTML)
  }
  
  return (
    <div className="sidenav">
      <div className={`table ${active === 'Dashboard' && active}`}  onClick={handleOnClick}>Dashboard</div>
      <div className={`table ${active === 'CRM' && active}`}  onClick={handleOnClick}>CRM</div>
    </div>
  );
};

export default SideNavbar;
