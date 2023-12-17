import { useCallback } from "react";
import { useRouter } from "next/router";
import CommentSectionService from "../components/CommentSectionService";
import styles from "./CommentsService.module.css";

const CommentsService = () => {
  const router = useRouter();

  const onScreenshotFrom2023102012Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurLocationsClick = useCallback(() => {
    router.push("/Locations");
  }, [router]);

  const onBookCarClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);

  return (
    <div className={styles.commentsService}>
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
      <button
        className={styles.screenshotFrom2023102012}
        onClick={onScreenshotFrom2023102012Click}
      />
      <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
      <button className={styles.bookCar} onClick={onBookCarClick} />
      <button className={styles.rules} onClick={onRulesClick} />
      <div className={styles.commentsServiceChild} />
      <div className={styles.commentsServiceItem} />
      <b className={styles.shareYourOpinion}>Share your opinion</b>
      <b className={styles.pickUpDate}>Pick up date:</b>
      <div className={styles.commentsServiceInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <CommentSectionService />
      <button className={styles.register}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>REGISTER</b>
        </div>
      </button>
    </div>
  );
};

export default CommentsService;
