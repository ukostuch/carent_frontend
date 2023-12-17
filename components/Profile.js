import "antd/dist/antd.min.css";
import { Input } from "antd";
import styles from "./Profile.module.css";

const Profile = ({ history1SamochodId, history2SamochodId }) => {
  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>my_username</div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      <button className={styles.canccelReservation}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>CANCEL</b>
        </div>
      </button>
      <button className={styles.samochod} />
      <b className={styles.pickUpDate}>Pick up date:</b>
      <b className={styles.model}>Model:</b>
      <b className={styles.returnDate}>Return date:</b>
      <b className={styles.priceZ}>Price (zł):</b>
      <b className={styles.location}>Location:</b>
      <b className={styles.siguan}>Siguan</b>
      <b className={styles.b}>2023-12-31</b>
      <b className={styles.b1}>2024-01-03</b>
      <b className={styles.b2}>301</b>
      <b className={styles.krakwBieanowska11}>Kraków, Bieżanowska 11</b>
      <div className={styles.profileItem} />
      <button className={styles.samochod1} id={history1SamochodId} />
      <b className={styles.pickUpDate1}>Pick up date:</b>
      <b className={styles.model1}>Model:</b>
      <b className={styles.returnDate1}>Return date:</b>
      <b className={styles.priceZ1}>Price (zł):</b>
      <b className={styles.location1}>Location:</b>
      <b className={styles.yaris}>Yaris</b>
      <b className={styles.b3}>2023-11-03</b>
      <b className={styles.b4}>2023-11-05</b>
      <b className={styles.b5}>102</b>
      <b className={styles.krakwBieanowska12}>Kraków, Bieżanowska 12</b>
      <div className={styles.profileInner} />
      <button className={styles.samochod2} id={history2SamochodId} />
      <b className={styles.location2}>Location:</b>
      <b className={styles.priceZ2}>Price (zł):</b>
      <b className={styles.returnDate2}>Return date:</b>
      <b className={styles.pickUpDate2}>Pick up date:</b>
      <b className={styles.model2}>Model:</b>
      <b className={styles.leon}>Leon</b>
      <b className={styles.b6}>2023-10-10</b>
      <b className={styles.b7}>2023-10-21</b>
      <b className={styles.b8}>503</b>
      <b className={styles.krakwBieanowska13}>Kraków, Bieżanowska 13</b>
    </div>
  );
};

export default Profile;
