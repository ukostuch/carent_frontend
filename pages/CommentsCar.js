import { useCallback } from "react";
import { useRouter } from "next/router";
import CommentSection from "../components/CommentSection";
import styles from "./CommentsCar.module.css";

const CommentsCar = () => {
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
    <div className={styles.commentsCar}>
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
      <div className={styles.commentsCarChild} />
      <div className={styles.commentsCarItem} />
      <b className={styles.shareYourOpinion}>Share your opinion</b>
      <b className={styles.pickUpDate}>Pick up date:</b>
      <div className={styles.commentsCarInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <CommentSection carModel="Yaris" />
      <button className={styles.register}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>REGISTER</b>
        </div>
      </button>
    </div>
  );
};

export default CommentsCar;
