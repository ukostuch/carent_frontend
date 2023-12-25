/*import { useCallback } from "react";
import { useRouter } from "next/router";
import UserHeaderFrame from "../components/UserHeaderFrame";
import Profile from "../components/Profile";
import styles from "./User1.module.css";

const User1 = () => {
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
    <div className={styles.user}>
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
      <div className={styles.userChild} />
      <div className={styles.userItem} />
      <b className={styles.yourProfile}>Your profile</b>
      <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
      <div className={styles.userInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image43Icon} alt="" src="/image-17@2x.png" />
      <UserHeaderFrame myUsername={router.query.myUsername} />
      <Profile
        history1SamochodId={`https://imgd.aeplcdn.com/664x374/n/cw/ec/144851/exter-exterior-right-front-three-quarter-29.jpeg?isig=0&q=80`}
        history2SamochodId={`https://imgd.aeplcdn.com/664x374/n/cw/ec/144851/exter-exterior-right-front-three-quarter-29.jpeg?isig=0&q=80`}
      />
    </div>
  );
};

export default User1;*/

/*import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserHeaderFrame from "../components/UserHeaderFrame";
import Profile from "../components/Profile";
import styles from "./User1.module.css";

const User1 = () => {
  const router = useRouter();
  const [userReservations, setUserReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserReservations = async (username) => {
    try {
      const response = await fetch(`http://localhost:8080/${username}/rentals`); // Zmiana myUsername na username
      const data = await response.json();

      setUserReservations(data);
      setLoading(false);
    } catch (error) {
      console.error("Błąd podczas pobierania rezerwacji", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const { myUsername: username } = router.query;
    if (username) {
      fetchUserReservations(username);
    }
  }, [router.query]);

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
    <div className={styles.user}>
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
      <div className={styles.userChild} />
      <div className={styles.userItem} />
      <b className={styles.yourProfile}>Your profile</b>
      <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
      <div className={styles.userInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image43Icon} alt="" src="/image-17@2x.png" />
      <UserHeaderFrame myUsername={router.query.myUsername} />
      <Profile userReservations={userReservations} />
    </div>
  );
};

export default User1;*/

import { useCallback } from "react";
import { useRouter } from "next/router";
import UserHeaderFrame from "../components/UserHeaderFrame";
import Profile from "../components/Profile";
import styles from "./User1.module.css";

const User1 = () => {
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
    <div className={styles.user}>
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
      <div className={styles.userChild} />
      <div className={styles.userItem} />
      <b className={styles.yourProfile}>Your profile</b>
      <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
      <div className={styles.userInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.image43Icon} alt="" src="/image-17@2x.png" />
      <UserHeaderFrame myUsername={router.query.myUsername} />
      <Profile myUsername={router.query.myUsername} /> 
      
    </div>
  );
};

export default User1;
/*<Profile myUsername={router.query.myUsername} /> */