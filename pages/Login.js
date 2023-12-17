import { useCallback } from "react";
import { useRouter } from "next/router";
import LoginComponent from "../components/LoginComponent";
import styles from "./Login.module.css";

const Login = () => {
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

  const onButtonMainContainerClick = useCallback(() => {
    router.push("/Register");
  }, [router]);

  return (
    <div className={styles.login}>
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
      <div className={styles.loginChild} />
      <div className={styles.loginItem} />
      <div className={styles.loginInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.buttonmain} onClick={onButtonMainContainerClick}>
        <img className={styles.icons} alt="" src="/icons.svg" />
        <b className={styles.label}>REGISTER</b>
      </div>
      <LoginComponent />
    </div>
  );
};

export default Login;
