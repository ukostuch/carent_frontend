import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SummaryFrame from "../components/SummaryFrame";
import TpayFrame from "../components/TpayFrame";
import MenuFrameString from "../components/MenuFrameString";
import UserHeaderFrame from "../components/UserHeaderFrame";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import styles from "./Payment.module.css";

const stripePromise = loadStripe("pk_test_51ORJeRFDZtq9cBLGdXiZ86RoLdZ2VuU66uPobuqmphyIpu9ev9ZNTr1HJadBce7SPkVzFWwZpZIze0a0R7bpXdap00LZ1yFeg2");

const Payment = () => {
  const router = useRouter();
  const { carId, pickupLocation, pickupDate, returnDate, username } = router.query;
  const [carInfo, setCarInfo] = useState([]);
  const [reservationStatus, setReservationStatus] = useState(null);

  const onScreenshotFrom2023102012Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurLocationsClick = useCallback(() => {
    router.push("/Locations");
  }, [router]);

  const onBookYourCar1Click = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);

  const calculateTotalPrice = (pricePerDay, pickupDate, returnDate) => {
    const startDate = new Date(pickupDate);
    const endDate = new Date(returnDate);
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return pricePerDay * (numberOfDays + 1);
  };

  const handleConfirmButtonClick = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/rental", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          carId: carId,
          dateFrom: pickupDate,
          dateTo: returnDate,
          cost: calculateTotalPrice(carInfo.rentPriceForDay, pickupDate, returnDate),
        }),
      });

      if (response.ok) {
        console.log("Success");
        setReservationStatus("success");
      } else {
        console.error("Failure");
        setReservationStatus("failure");
      }
    } catch (error) {
      console.error("Error during reservation creation:", error);
      setReservationStatus("failure");
    }
  }, [username, carId, carInfo, pickupDate, returnDate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/offer/${carId}`);
        const data = await response.json();
        setCarInfo(data);
      } catch (error) {
        console.error("Error fetching car data", error);
      }
    };

    if (carId) {
      fetchData();
    }
  }, [carId]);
  return (
    <div className={styles.payment}>
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
      <button
        className={styles.screenshotFrom2023102012}
        onClick={onScreenshotFrom2023102012Click}
      />
      <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
      <button className={styles.bookYourCar1} onClick={onBookYourCar1Click} />
      <button className={styles.rules} onClick={onRulesClick} />
      <div className={styles.paymentChild} />
      <div className={styles.paymentItem} />
      <div className={styles.groupParent}>
        <div className={styles.carParent}>
          <div className={styles.car}>Car</div>
          <div className={styles.details}>Details</div>
          <div className={styles.payment1}>Payment</div>
        </div>
        <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
      </div>
      <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
      <img className={styles.image42Icon} alt="" src="/image-42@2x.png" />
      <div className={styles.paymentInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image37Icon1} alt="" src="/image-17@2x.png" />
      {carInfo && (
        <SummaryFrame
          modelName={carInfo.carModel}
          price={calculateTotalPrice(carInfo.rentPriceForDay, pickupDate, returnDate)}
          locationAdres={pickupLocation}
          pickupDate={pickupDate}
          returnDate={returnDate}
          driverIdentity={username}
          zdjSamochoduId={carInfo.frontPhoto}
        />
      )}
      <div className={styles.confirmButton} onClick={handleConfirmButtonClick}>
        <b className={styles.label}>CONFIRM</b>
      </div>
      {reservationStatus && (
        <div className={styles.reservationStatus}>
          {reservationStatus === "success" ? "Success" : "Failure"}
        </div>
      )}
      <TpayFrame 
        total={calculateTotalPrice(carInfo.rentPriceForDay, pickupDate, returnDate)}
        username={username}
        carId={carId}
        pickupDate={pickupDate}
        returnDate={returnDate}
        setReservationStatus={setReservationStatus}
      />
      <MenuFrameString
        pickupLocation={pickupLocation}
        pickupDate={pickupDate}
        returnDate={returnDate}
        image38="/image-38@2x.png"
        image40="/image-40@2x.png"
      />
      <UserHeaderFrame
        myUsername={username}
        userHeaderFrameRight="104px"
        userHeaderFrameWidth="302px"
        userHeaderFrameHeight="108px"
        userLogoTop="12px"
        userLogoRight="194px"
        loggedInTop="66px"
        loggedInRight="16px"
        myUsernameTop="22px"
        myUsernameLeft="unset"
        myUsernameFontFamily="Roboto"
        myUsernameWidth="146px"
        myUsernameHeight="44px"
        myUsernameRight="16px"
      />
    </div>
  );
};

export default Payment;