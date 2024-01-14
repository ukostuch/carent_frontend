import { useState, useEffect } from "react";
import { Input, Alert } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = () => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const username = router.query.myUsername;
  const [carInfo, setCarInfo] = useState([]);
  const [cancelStatus, setCancelStatus] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [changePasswordStatus, setChangePasswordStatus] = useState(null);


  const locationIdToName = {
    "1": "Kraków",
    "2": "Gdynia",
    "3": "Olsztyn",
    "4": "Poznań",
    "5": "Lublin",
  };

  const fetchCarInfo = async (carId) => {
    try {
      const response = await fetch(`http://localhost:8080/offer/${carId}`);
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  const updatePassword = async () => {
    try {
      const response = await fetch(`http://localhost:8080/update/user/${username}/${newPassword}`, {
        method: "GET",
      });

      if (response.ok) {
        console.log("Password updated successfully");
        setChangePasswordStatus("success");
      } else {
        const errorText = await response.text();
        console.error("Error updating password:", response.status, errorText);
        setChangePasswordStatus("error");
      }
    } catch (error) {
      console.error("Error updating password:", error.message);
      setChangePasswordStatus("error");
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);


  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };


  const handleCancelReservation = async () => {
    try {
      const rentalId = currentReservation.rentalId;
      const response = await fetch(`http://localhost:8080/rental/delete/${rentalId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        const updatedReservations = [...reservations];
        updatedReservations.splice(currentReservationIndex, 1);
        setReservations(updatedReservations);
  
        if (updatedReservations.length > 0) {
          setCurrentReservationIndex(0);
          const carId = updatedReservations[0].carId;
          fetchCarInfo(carId);
        } else {
          setCarInfo(null);
        }
        setCancelStatus("success");
      } else {
        const errorText = await response.text();
        console.error("Error canceling reservation:", response.status, errorText);
        setCancelStatus("error");
      }
    } catch (error) {
      console.error("Error canceling reservation:", error.message);
      setCancelStatus("error");
    }
  };

  const handleChangePassword = () => {
    updatePassword();
  };


  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>All your reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className={styles.changePassword} onClick={handleChangePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      {changePasswordStatus && (
        <div style={{ position: 'absolute', top: '250px', left: '85%', transform: 'translateX(-50%)', width: '80%' }}>
          {changePasswordStatus === "success" ? "Password changed successfully!" : "Failed to change password."}
        </div>
      )}
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      

      {reservations.length > 0 && currentReservation && (
        <div>
          <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location: </b>
          <b className={styles.siguan}>{carInfo.carModel}</b>
          <b className={styles.b}>{currentReservation.dateFrom}</b>
          <b className={styles.b1}>{currentReservation.dateTo}</b>
          <b className={styles.b2}>{currentReservation.cost}</b>
          <b className={styles.krakwBieanowska11}>{locationIdToName[currentReservation.locationId]}</b>
        </div>

      {carInfo.frontPhoto && (
      <img
        className={styles.samochod}
        src={carInfo.frontPhoto} 
      />
    )}
  </div>
  )}

{reservations.length > 0 && currentReservation && currentReservation.current && (
          <button className={styles.canccelReservation} onClick={handleCancelReservation}>
            <div className={styles.buttonmain}>
               <img className={styles.icons} alt="" src="/icons.svg" />
               <b className={styles.label}>CANCEL</b>
            </div>
          </button>
    )}
      
      {reservations.length > 1 && (
           <div style={{ position: 'absolute', bottom: '500px', left: '55%', transform: 'translateX(-50%)', width: '80%' }}>
           <button onClick={() => navigateReservation("prev")}>Previous</button>
           <button onClick={() => navigateReservation("next")}>Next</button>
         </div>
      )}
      {cancelStatus && (
        <div className={{ position: 'absolute', top: '600px', left: '85%', transform: 'translateX(-50%)', width: '80%' }}>
          {cancelStatus === "success" ? "Rental cancelled successfully!" : "Failed to cancel rental."}
        </div>
      )}
    </div>
  );
};

export default Profile;         