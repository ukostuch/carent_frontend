import { useCallback } from "react";
import { useRouter } from "next/router";
import CaleOffer from "../components/CaleOffer";
import styles from "./Offer.module.css";

const Offer = () => {
  const router = useRouter();

  const onSamochod2Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod3Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod7Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod8Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod9Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod10Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod5Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod12Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod1Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onRegisterClick = useCallback(() => {
    router.push("/Register");
  }, [router]);

  const onScreenshotFrom2023102012Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurLocationsClick = useCallback(() => {
    router.push("/Locations");
  }, [router]);

  const onBookCarClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onServiceRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);

  return (
    <div className={styles.offer}>
      <div className={styles.offerChild} />
      <div className={styles.offerItem} />
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
      <button className={styles.register} onClick={onRegisterClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>REGISTER</b>
        </div>
      </button>
      <button
        className={styles.screenshotFrom2023102012}
        onClick={onScreenshotFrom2023102012Click}
      />
      <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
      <button className={styles.bookCar} onClick={onBookCarClick} />
      <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
      <CaleOffer />
    </div>
  );
};

export default Offer;
