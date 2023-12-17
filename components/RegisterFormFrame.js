

  import { Checkbox, FormControlLabel } from "@mui/material";
  import { useRouter } from "next/router";
  import styles from "./RegisterFormFrame.module.css";
  import { useState } from "react";
  import EmployeeService from "./services/RegisterUserService";
  
  const RegisterFormFrame = () => {
    const router = useRouter();
  
    const [employee, setEmployee] = useState({
      username: "",
      password: "",
      firstName: "",
      surname: "",
      email: "",
      phoneNumber: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      seriesDriverLicense: "",
      street: "",
      city: "",
      country: "",
      postcode: "",
    });
  
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEmployee({ ...employee, [name]: value });
    };
  
    const registerUser = (e) => {
      e.preventDefault();
  
      // Nie konwertuj pól na liczby całkowite
      const payload = { ...employee };
  
      console.log("Request Payload:", payload);
  
      EmployeeService.registerUser(payload)
        .then((response) => {
          console.log(response);
          setSuccessMessage("Registration successful!");
          setErrorMessage("");
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage("Registration failed. Please try again.");
          setSuccessMessage("");
        });
    };
  
    const onLinkDoRegulaminuClick = () => {
      router.push("/Rules");
    };
  
      return (
        <div className={styles.registerFormFrame}>
          <b className={styles.setUsername}>Set username:</b>
          <input
            name="username"
            className={styles.registerFormFrameChild}
            placeholder="Username"
            type="text"
            value={employee.username}
            onChange={(e) => handleChange(e)}
          />
          <b className={styles.setPassword}>Set password:</b>
          <input
            name="password"
            className={styles.registerFormFrameItem}
            placeholder="Password"
            type="password"
            value={employee.password}
            onChange={(e) => handleChange(e)}
          />
          <b className={styles.personalInformation}>Personal information:</b>
          <input
            className={styles.registerFormFrameInner}
            placeholder="Name"
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.rectangleInput}
            placeholder="License"
            type="text"
            name="seriesDriverLicense"
            value={employee.seriesDriverLicense}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild1}
            placeholder="Surname"
            type="text"
            name="surname"
            value={employee.surname}
            onChange={(e) => handleChange(e)}
          />
          <b className={styles.name}>Name:</b>
          <b className={styles.surname}>Surname:</b>
          <b className={styles.birthDate}>Birth date:</b>
          <b className={styles.theSeriesAnd}>
            The series and number of the driver’s license:
          </b>
          <input
            className={styles.registerFormFrameChild2}
            placeholder="Email"
            type="text"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild3}
            placeholder="Phone"
            type="text"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
          <b className={styles.email}>Email:</b>
          <b className={styles.phoneNumber}>Phone number:</b>
          <input
            className={styles.registerFormFrameChild4}
            placeholder="Country"
            type="text"
            name="country"
            value={employee.country}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild5}
            placeholder="Postcode"
            type="text"
            name="postcode"
            value={employee.postcode}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild6}
            placeholder="City"
            type="text"
            name="city"
            value={employee.city}
            onChange={(e) => handleChange(e)}
          />
          <b className={styles.address}>Address:</b>
          <b className={styles.serviceRules}>Service rules:</b>
          <input
            className={styles.registerFormFrameChild7}
            placeholder="Street"
            type="text"
            name="street"
            value={employee.street}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild8}
            placeholder="Day"
            type="text"
            name="birthDay"
            value={employee.birthDay}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild9}
            placeholder="Month"
            type="text"
            name="birthMonth"
            value={employee.birthMonth}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.registerFormFrameChild10}
            placeholder="Year"
            type="text"
            name="birthYear"
            value={employee.birthYear}
            onChange={(e) => handleChange(e)}
          />
          <div className={styles.iHaveRead}>
            I have read terms and conditions of using car rental service Carent and
            I will follow these rules and regulations
          </div>
          <button
            className={styles.linkDoRegulaminu}
            onClick={onLinkDoRegulaminuClick}
          >
            <div className={styles.linkToService}>Link to service rules</div>
            <div className={styles.linkToServiceRules} />
          </button>
          <button onClick={registerUser} className={styles.groupParent}>
            <div className={styles.buttonmainWrapper}>
              <div className={styles.buttonmain}>
                <img className={styles.icons} alt="Register Icon" src="/icons3.svg" />
                <span className={styles.label}>REGISTER</span>
              </div>
            </div>
            <span className={styles.register}>REGISTER</span>
          </button>
  
  
          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}
  
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
  
  
  
          <FormControlLabel
            className={styles.checkboxcheckedCheckboxOnl}
            label=""
            control={
              <Checkbox color="primary" defaultChecked required size="medium" />
            }
          />
        </div>
      );
    };
    
    export default RegisterFormFrame;

