import { useCallback } from "react";
import { useRouter } from "next/router";
import MapaFrame from "../components/MapaFrame";
import styles from "./Locations.module.css";

const Locations = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/Register");
  }, [router]);

  const onScreenshotFrom2023102012Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBookCarClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onServiceRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);

  return (
    <div className={styles.locations}>
      <img
        className={styles.imagePasted20232210At08}
        alt=""
        src="/image-pasted-20232210-at-0821-1@2x.png"
      />
      <div className={styles.locationsChild} />
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <img className={styles.locationsItem} alt="" src="/rectangle-14.svg" />
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
      <b className={styles.openingHours}>Opening hours:</b>
      <div className={styles.ourCompanyProvides}>
        Our company provides service 7 days a week for 24 hours.
      </div>
      <b className={styles.contact}>Contact:</b>
      <div className={styles.phone484561Container}>
        <b className={styles.phone}>Phone</b>
        <b>{`: `}</b>
        <span>+48 4561 233 111</span>
      </div>
      <div className={styles.emailCarrestgmailcom}>
        <b className={styles.phone}>Email</b>
        <b>{`: `}</b>
        <span>carrest@gmail.com</span>
      </div>
      <b className={styles.ourBranches}>Our branches</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.gdyniaSopocka15}>Gdynia, Sopocka 15</b>
        <b className={styles.olsztynSielska22}>Olsztyn, Sielska 22</b>
        <b className={styles.krakwBieanowska18}>Kraków, Bieżanowska 18</b>
        <b className={styles.poznaDworcowa3}>Poznań, Dworcowa 3</b>
        <b className={styles.lublinJanowska11}>Lublin, Janowska 11</b>
        <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
        <img className={styles.image26Icon} alt="" src="/image-23@2x.png" />
        <img className={styles.image27Icon} alt="" src="/image-23@2x.png" />
        <img className={styles.image25Icon} alt="" src="/image-23@2x.png" />
        <img className={styles.image24Icon} alt="" src="/image-23@2x.png" />
      </div>
      <div className={styles.locationsInner}>
        <div className={styles.groupItem} />
      </div>
      <img className={styles.image16Icon} alt="" src="/image-17@2x.png" />
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
      <button className={styles.buttonmainWrapper} onClick={onGroupButtonClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>REGISTER</b>
        </div>
      </button>
      <button
        className={styles.screenshotFrom2023102012}
        onClick={onScreenshotFrom2023102012Click}
      />
      <button className={styles.locations1} />
      <button className={styles.bookCar} onClick={onBookCarClick} />
      <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
      <div className={styles.rectangleDiv} />
      <div className={styles.weAreWaitingContainer}>
        <span>{`We  are waiting for you in 5 `}</span>
        <b>branches all over Poland.</b>
      </div>
      <b className={styles.checkOutWhere}>Check out where you can find us</b>
      <MapaFrame />
    </div>
  );
};

export default Locations;
