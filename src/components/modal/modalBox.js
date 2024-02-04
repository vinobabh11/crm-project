import React from "react";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../redux/reducers/dashboardSlice";

const ModalBox = ({ customComponent: CustomComponent }) => {
  const dispatch = useDispatch();
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => dispatch(modalToggle(false))}>
          &times;
        </span>
        <CustomComponent/>
      </div>
    </div>
  );
};

export default ModalBox;
