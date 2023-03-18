import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUserToStateAction } from "../store/actions/actions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let newUser = { ...users };
    newUser[e.target.name] = e.target.value;
    setUsers(newUser);
  };

  const { userName, email, password } = users;

  const addUsers = (users) => {
    dispatch(addUserToStateAction(users));
    navigate("/login");
    clearForm();
  };

  const clearForm = () => {
    setUsers({
      userName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form>
        <div className="box-center p-2">
          <h3 className="py-3">SignUp Here</h3>
          <input
            type="text"
            name="userName"
            className="input-field"
            placeholder="enter username "
            value={userName}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="enter email "
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="enter password "
            value={password}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => addUsers(users)}
            >
              Signup
            </button>
          </div>
          <div>
            <Link to={"/login"} className="text-decoration-none">
              {" "}
              <p className="signup-link">Already have an account?</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
