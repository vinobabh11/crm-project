import React from "react";
import CrmTable from "./crmTable";
import { useDispatch } from "react-redux";
import {
  changeDash,
  changeForm,
  modalToggle,
} from "../../redux/reducers/dashboardSlice";

const Crm = () => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(changeDash(e.target.innerHTML));
    dispatch(changeForm("add"));
    dispatch(modalToggle(true));
  };
  return (
    <div>
      <div className="crm-container">
        <div className="add-product" onClick={handleAdd}>
          Add More Product
        </div>
      </div>
      <CrmTable />
    </div>
  );
};

export default Crm;
