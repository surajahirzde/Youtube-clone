import { Link, useNavigate } from "react-router-dom";
import "./styles/Login.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Globaldata } from "../Helper/Globaldata";

const Login = (props) => {
  const { setuserdata } = useContext(Globaldata);
  const [file, setfile] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setfile(reader.result); // store the data URL
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email: e.target[0].value,
      Password: e.target[1].value,
      media: file,
    };

    // store data in localstorage for login in form of array
    const data1 = JSON.parse(localStorage.getItem("data")) || [];
    if (props.btnName === "Register") {
      localStorage.setItem("data", JSON.stringify([...data1, data]));
      e.target[0].value = "";
      e.target[1].value = "";
      setfile(null);
      navigate("/login");
    } else if (props.btnName === "Login") {
      const getLocalData = JSON.parse(localStorage.getItem("data"));
      if (getLocalData) {
        getLocalData.forEach((element) => {
          if (
            element.Email === data.Email &&
            element.Password === data.Password
          ) {
            setuserdata(element);
            setIsLoggedIn("yes");
            localStorage.setItem("user", JSON.stringify(element));
            navigate("/");
          } else {
            setIsLoggedIn("no");
          }
        });
      }
      isLoggedIn === "no" && alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h1>{props.btnName}</h1>
          <input
            type="email"
            required
            id="Email"
            placeholder="Enter Your Email"
          />
          <input
            type="Password"
            required
            id="Password"
            placeholder="Enter Your Password"
          />
          {props.btnName === "Register" && (
            <input
              type="file"
              id="file"
              required
              accept="image/*"
              onChange={handleFileChange}
            />
          )}
          <button style={{ marginBottom: "10px" }}>{props.btnName}</button>

          {props.btnName === "Register" ? (
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          ) : (
            <p>
              Don&apos;t have an account? <Link to="/register">Register</Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  btnName: PropTypes.string.isRequired,
};
