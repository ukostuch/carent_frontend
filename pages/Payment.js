import { useCallback } from "react";
import { useRouter } from "next/router";
import SummaryFrame from "../components/SummaryFrame";
import TpayFrame from "../components/TpayFrame";
import MenuFrameString from "../components/MenuFrameString";
import UserHeaderFrame from "../components/UserHeaderFrame";
import styles from "./Payment.module.css";

const Payment = () => {
  const router = useRouter();

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
      <SummaryFrame
        modelName="Taigun"
        price="400"
        locationAdres="Kraków, Bieżanowska 15"
        pickupDate="2023-12-29"
        returnDate="2024-01-04"
        driverIdentity="my_username"
      />
      <TpayFrame />
      <MenuFrameString
        pickupLocation="Kraków"
        pickupDate="2023-11-21"
        returnDate="2023-11-28"
        image38="/image-38@2x.png"
        image40="/image-40@2x.png"
      />
      <UserHeaderFrame
        myUsername="my_username"
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
