import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkTheUseraction } from "../store/actions/actions";

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [users, setUsers] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const clearForm = () => {
    setUsers({
      userName: "",
      email: "",
      password: "",
    });
  };

  const loginState = useSelector((state) => state.users);
  console.log(loginState);

  const loggedIn = loginState.find(
    (x) => x.email === users.email && x.password === users.password
  );

  const handleChange = (e) => {
    let newUser = { ...users };
    newUser[e.target.name] = e.target.value;
    setUsers(newUser);
  };

  const { userName, email, password } = users;

  const signInUser = (users) => {
    if (loggedIn) {
      dispatch(checkTheUseraction(users));
      toast.success("Login  Successfully");
    }
    else{
        toast.warning("invalid username/password or please signup first")
    }
    clearForm();
  };
  return (
    <div>
        <form>
            <div className="box-center p-2">
                <h3 className="py-3">Login Here</h3>
                <input type="text" name="userName" className="input-field" placeholder="enter username " value={userName} onChange={(e)=>{handleChange(e)}}/>

                <input type="email" name="email" className="input-field" placeholder="enter email " value={email} onChange={(e)=>{handleChange(e)}}/>

                <input type="password" name="password" className="input-field" placeholder="enter password " value={password} onChange={(e)=>{handleChange(e)}}/>


                <div>
                    <button className="btn btn-primary my-2" type="button" onClick={()=>{signInUser(users)}}>signIn</button>
                </div>

                <div>
                    <Link to={"/signup"} className="text-decoration-none"> <p className="signUp-link">signUp For shop-Hub</p></Link>
                </div>
            </div>
        </form>
        <ToastContainer/>
    </div>
  );
};

export default Login;
