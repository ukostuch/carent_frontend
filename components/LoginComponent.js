//DZIALA
/*import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./Frame 1.module.css";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // Your API endpoint for login
      const response = await fetch("http://localhost:8080/login2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log("Login successful");
        setErrorMessage("");
        // Redirect to the desired route on successful login
        router.push("/Payment");
      } else {
        console.error("Invalid email or password");
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className={styles.loginFrame}>
      <b className={styles.login}>Login</b>
      <button onClick={loginUser} className={styles.buttonmainWrapper}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>SEND</b>
        </div>
      </button>
      <input
        name="email"
        className={styles.loginFrameChild}
        placeholder="Email"
        type="text"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        name="password"
        className={styles.loginFrameItem}
        placeholder="Password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <b className={styles.ifYouHavent}>
        If you haven’t created an account yet, please click REGISTER button.
      </b>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default LoginComponent;*/

/*import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./Frame 1.module.css";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [clientData, setClientData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // Your API endpoint for login
      const response = await fetch("http://localhost:8080/login2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log("Login successful");
        setErrorMessage("");
        router.push({
          pathname: "/Payment",
          query: {
            carId: router.query.carId,
            //pickupLocation: router.query.pickupLocation,
            //pickupDate: router.query.pickupDate,
            //returnDate: router.query.returnDate,
            username: email,
          },
        });
        
      } else {
        console.error("Invalid email or password");
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className={styles.loginFrame}>
      <b className={styles.login}>Login</b>
      <button onClick={loginUser} className={styles.buttonmainWrapper}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>SEND</b>
        </div>
      </button>
      <input
        name="email"
        className={styles.loginFrameChild}
        placeholder="Email"
        type="text"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        name="password"
        className={styles.loginFrameItem}
        placeholder="Password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <b className={styles.ifYouHavent}>
        If you haven’t created an account yet, please click REGISTER button.
      </b>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default LoginComponent;*/


import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./Frame 1.module.css";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // Your API endpoint for login
      const response = await fetch("http://localhost:8080/login2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log("Login successful");
        setErrorMessage("");
        router.push({
          pathname: "/Payment",
          query: {
            carId: router.query.carId,
            pickupLocation: router.query.pickupLocation,
            pickupDate: router.query.pickupDate,
            returnDate: router.query.returnDate,
            username: credentials.username,
          },
        });
      } else {
        console.error("Invalid email or password");
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className={styles.loginFrame}>
      <b className={styles.login}>Login</b>
      <button onClick={loginUser} className={styles.buttonmainWrapper}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>SEND</b>
        </div>
      </button>
      <input
        name="username"
        className={styles.loginFrameChild}
        placeholder="Username"
        type="text"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        name="password"
        className={styles.loginFrameItem}
        placeholder="Password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <b className={styles.ifYouHavent}>
        If you haven’t created an account yet, please click REGISTER button.
      </b>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default LoginComponent;