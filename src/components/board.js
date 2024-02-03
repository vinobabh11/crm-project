import React from "react";
import { useSelector } from "react-redux";
import CrmTable from "./crmTable";
import LineChart from "./lineChart";
import TopNav from "./topNav";

const Board = () => {
  const active = useSelector((state) => state.dash.active);
  return (
    <div>
      <TopNav />
      <div className="board">
        {active && active === "Dashboard" ? <LineChart /> : <CrmTable />}
      </div>
    </div>
  );
};

export default Board;
