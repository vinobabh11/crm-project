import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../api/updateProduct";
import { modalToggle } from "../../redux/reducers/dashboardSlice";

const EditForm = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    brand: "",
    model: "",
    price: "",
  });
  const [isError, setIsError] = useState(false);
  const row = useSelector((state) => state.dash.row);

  useEffect(() => {
    if (row) {
      setFormInput({
        model: row?.title,
        brand: row?.brand,
        price: row?.price,
      });
    }
  }, [row]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (row) {
      const formData = {
        title: formInput.model,
        brand: formInput.brand,
        price: formInput.price,
      };
      const payload = {id: row?.id, data: formData}
      dispatch(updateProduct(payload));
      dispatch(modalToggle(false));
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="add-form">
      <p className="title">Add Product</p>
      <p className="error-red">{isError ? "Fill all the fields" : ""}</p>
      <form className="inputs" onSubmit={handleOnSubmit}>
        <label>Brand</label>
        <input
          type="text"
          value={formInput.brand}
          onChange={(e) =>
            setFormInput({
              ...formInput,
              brand: e.target.value,
            })
          }
        />{" "}
        <br />
        <label>Model</label>
        <input
          type="text"
          value={formInput.model}
          onChange={(e) =>
            setFormInput({
              ...formInput,
              model: e.target.value,
            })
          }
        />
        <br />
        <label>Price</label>
        <input
          type="text"
          value={formInput.price}
          onChange={(e) =>
            setFormInput({
              ...formInput,
              price: e.target.value,
            })
          }
        />
        <br />
        <input className="submit" type={"submit"} />
      </form>
    </div>
  );
};

export default EditForm;
