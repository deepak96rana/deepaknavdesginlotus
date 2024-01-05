import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import "./login.css";
import logo from "../../image/Lotus_Trans.png";
import lotus from "../../image/logo_Lotus.png";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = ({ onlogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [showPassword, setShowPassword] = React.useState(false);

  //   const handleClickShowPassword = () => setShowPassword((show) => !show);

  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "dsp" && password === "dsp") {
      navigate("/");
      onlogin();
    } else {
      window.alert("Wrong username or password");
    }
    // try {
    //   const response = await axios.post("http://localhost:5000/login", {
    //     username,
    //     password,
    //   });
    //   console.log(response.data);

    //   setLoggedIn(true);
    // } catch (error) {
    //   console.error("Error:", error.response.data.error);
    // }
  };

  return (
    <div
      className="page login p-3"
      style={{ backgroundColor: "rgb(64,64,83)" }}
    >
      <img src={logo} alt="logo" width={150} className="float-start mx-2" />{" "}
      {/* <img src="/siCalC.png" alt="calc" width={60} /> */}
      <h3 className="fw-bold">SilCal</h3>
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-sm-6" style={{ textAlign: "center" }}>
            <img src={lotus} alt="lotus" style={{ width: "50%" }} />
            <br />
            <br />
            <img src={logo} alt="logo" width={300} /> <br />
            <small>SilCal Developed by Lotus Wireless Technologies</small>
          </div>
          <div className="col-sm-6 px-5">
            <form className="px-5 py-5" onSubmit={handleLogin}>
              <h3>
                {" "}
                <i className="fa fa-user-o"></i> Login
              </h3>
              <hr />
              <fieldset>
                <div class="form-group mt-4">
                  <label for="exampleInputEmail1" class="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter User Name"
                    value={username}
                    onChange={(e) => handleUsername(e)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" class="form-label mt-3">
                    Password
                  </label>
                  {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl> */}

                  <input
                    type="password"
                    class="form-control"
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    placeholder="Password"
                    required
                  />
                  <a href="">
                    {" "}
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="d-grid">
                  <button
                    to="/line"
                    className="btn btn-primary mt-4"
                    type="submit"
                  >
                    Login{" "}
                  </button>
                </div>
                <a href="">
                  {" "}
                  <small>Create Account?</small>
                </a>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="footer">
          <small className="copyright">
            &copy; Copyright 20223, Lotus Wireless Technologies
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
