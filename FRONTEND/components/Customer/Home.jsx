import React, { useState, useContext } from "react";
import AuthService from "../../AuthService";

import { useNavigate } from "react-router-dom";


import { AuthContext } from "../../AuthContext";

const Homepage = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const navigation = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    AuthService.login(user).then((data) => {
      console.log(data);

      const { isAuthenticated, user } = data;

      console.log(isAuthenticated);
      console.log(user);
      console.log(data);

      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        navigation("/products");
      } else setMessage(message);
    });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
      <h1>Shopping Cart</h1><br/><br/>
         <table border-size="1px">
        <th>
        
        <h3>Customer</h3>
        <br></br>
        <br></br>
     
        <input
          type="text"
          name="email"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Username"
        />
        <br></br>
        
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <br></br>
        <br></br>
        <a href="/viewitems"><input className="btn btn-lg btn-primary btn-block" type="button" value="Login"/></a>
        </th><br/><br/>

        <th padding="100px">
        <h3>Trader </h3>
        <br></br>
        <br></br>
      
        <input
          type="text"
          name="email"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Username"
        />
        <br></br>
      
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <br></br>
        <br></br>
        <a href="/vInventory"><input className="btn btn-lg btn-primary btn-block" type="button" value="Login"/></a>
        </th>
        </table>
      </form>
      <br/><br/>
    </div>
  );
};

export default Homepage;