import React from "react";
import { useSelector } from "react-redux";
import Crm from "./crm";
import LineChart from "./lineChart";
import ModalBox from "../modal/modalBox";
import TopNav from "../navbar/topNav";
import AddForm from "../modal/addForm";
import EditForm from "../modal/editForm";

const Board = () => {
  const active = useSelector((state) => state.dash.active);
  const show = useSelector((state) => state.dash.show);
  const title = useSelector((state) => state.dash.title); 

  return (
    <div>
      <TopNav />
      <div className="board">
        {active && active === "Dashboard" ? <LineChart/> : <Crm />}
      </div>
      {show && title === "add" && <ModalBox customComponent={AddForm}/>}
      {show && title === "edit" && <ModalBox customComponent={EditForm}/>}
    </div>
  );
};

export default Board;
