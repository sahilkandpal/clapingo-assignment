import React from 'react'
import "./loginform.css";
import ClapingoLogo from "../../assets/ClapingoLogo.png";
import Button from '../common/Button';
import {useForm} from "react-hook-form";
import { useAuthContext } from '../../context/authContext';

function LoginForm() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {login} = useAuthContext();

  const onSubmit = (data) => {
    console.log("data",data);
    login(JSON.stringify(data));
  }

  console.log(errors);

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="logo_container">
        <img src={ClapingoLogo} alt="site logo" />
      </div>
      <div className="form_group">
          <label htmlFor="userId">User Id</label>
          <input type="text" id="userId" name="userId" {...register("userId", {required: "User Id is required"})} placeholder="Enter you User Id" />
          <p className="error_msg">{errors.userId && `* ${errors.userId?.message}`}</p>
      </div>
      <div className="form_group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" {...register("password", {required: "password is required"})} placeholder="Enter you password" />
          <p className="error_msg">{errors.password && `* ${errors.password?.message}`}</p>
      </div>
      <Button className="login_btn" type="secondary">Login</Button>
    </form>
  )
}

export default LoginForm