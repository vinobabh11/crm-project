import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchData } from "../api/fetchData";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const [formInput, setFormInput] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });
  const [isError, setIsError] = useState(false);
  const isStatus = useSelector((state) => state.auth.status) ?? "no status";

  useEffect(() => {
    if (isStatus !== undefined) {
        handleNavigation(isStatus);
    }
  }, [isStatus]);

  const handleNavigation = (status) => {
    switch (status) {
      case "loading":
        console.log(status);
        break;
      case "succeeded":
        window.location.pathname = '/dashboard'
        // router.push("/dashboard");
        setIsError(false);
        break;
      case "failed":
            setIsError(true);
        break;
      default:
        break;
    }
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = { username: formInput.username, password: formInput.password };
    dispatch(fetchData(user));
  };

  return (
    <div className="login-form">
      <p className="title">LogIn Form</p>
      <p className="error-red">{isError ? "Invalid credentials" : ""}</p>
      <form className="inputs" onSubmit={handleOnSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={formInput.username}
          onChange={(e) =>
            setFormInput({
              ...formInput,
              username: e.target.value,
            })
          }
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          value={formInput.password}
          onChange={(e) =>
            setFormInput({
              ...formInput,
              password: e.target.value,
            })
          }
        />
        <br />
        <input className="submit" type={"submit"} />
      </form>
    </div>
  );
};

export default LogIn;
