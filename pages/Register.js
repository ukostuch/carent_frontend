import { useCallback } from "react";
import { useRouter } from "next/router";
import RegisterFormFrame from "../components/RegisterFormFrame";
import styles from "./Register.module.css";

const Register = () => {
  const router = useRouter();

  const onScreenshotFrom2023102012Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurLocationClick = useCallback(() => {
    router.push("/Locations");
  }, [router]);

  const onBookCarClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);

  return (
    <div className={styles.register}>
      <div className={styles.registerInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image16Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.registerChild} />
      <div className={styles.registerItem} />
      <b className={styles.registration}>Registration</b>
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
      <button className={styles.register1}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>REGISTER</b>
        </div>
      </button>
      <button
        className={styles.screenshotFrom2023102012}
        onClick={onScreenshotFrom2023102012Click}
      />
      <button className={styles.ourLocation} onClick={onOurLocationClick} />
      <button className={styles.bookCar} onClick={onBookCarClick} />
      <button className={styles.rules} onClick={onRulesClick} />
      <RegisterFormFrame />
    </div>
  );
};

export default Register;
