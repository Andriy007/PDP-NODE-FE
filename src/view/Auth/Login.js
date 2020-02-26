import React from "react";
import { connect } from "react-redux";
import {loginRequest} from "../../redux-saga/auth/authActions"
import { useForm } from 'react-hook-form'
import PizzaMan from "../../assets/images/pizza-man-138769-4937382.jpg"
import { Link } from "react-router-dom";

const LoginComponent = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => props.login(data);

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3">
        <div className="col-12 d-flex justify-content-center">
          <img height={300} src={PizzaMan} alt="pizza-man"/>
        </div>
        <div className="col-md-10 offset-md-1">
          <form className="d-flex flex-column px-5 pt-5 pb-0" onSubmit={handleSubmit(onSubmit)}>
            {
              props.error &&  <div className="w-100 error-banner">{props.error.password || props.error.email}</div>
            }
            <label htmlFor="mail">Email</label>
            <input id="mail" className="mb-3" name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
            {errors.email && <p className="error">Last name is required</p>}
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="mt-1 mb-3" name="password" ref={register({ required: true })} />
            {errors.password && <p className="error">password is required</p>}
            <input className="btn-submit" type="submit" value="Sign In" />
          </form>
          <div className="d-flex justify-content-between pt-4 px-1 col-md-10 offset-md-1">
            <p>Still not register?</p>
            <Link to={"/auth/sign-up"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => state.auth,
  dispatch => ({
    login: payload => dispatch(loginRequest(payload)),
  })
)(LoginComponent);
