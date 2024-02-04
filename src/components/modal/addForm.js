import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../api/addProduct";
import { modalToggle } from "../../redux/reducers/dashboardSlice";

const AddForm = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    brand: "",
    model: "",
    price: "",
  });
  const [isError, setIsError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      formInput.model.length &&
      formInput.brand.length &&
      formInput.price.length
    ) {
      const payload = {
        title: formInput.model,
        brand: formInput.brand,
        price: formInput.price,
      };
      dispatch(addProduct(payload));
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

export default AddForm;
