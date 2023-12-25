import styles from "./SummaryFrame.module.css";

const SummaryFrame = ({
  modelName,
  price,
  locationAdres,
  pickupDate,
  returnDate,
  driverIdentity,
  zdjSamochoduId,
}) => {
  return (
    <div className={styles.summaryFrame}>
      <div className={styles.summaryFrameChild} />
      <b className={styles.driverIdentity}>Driver identity:</b>
      <b className={styles.returnDate}>Return date:</b>
      <b className={styles.pickUpDate}>Pick-up date:</b>
      <b className={styles.location}>Location:</b>
      <b className={styles.priceZ}>Price (zł):</b>
      <b className={styles.model}>Model:</b>
      <div className={styles.taigun}>{modelName}</div>
      <div className={styles.div}>{price}</div>
      <div className={styles.krakwBieanowska15}>{locationAdres}</div>
      <div className={styles.div1}>{returnDate}</div>
      <div className={styles.div2}>{pickupDate}</div>
      <div className={styles.myUsername}>{driverIdentity}</div>
      <b className={styles.summary}>Summary:</b>
      <img
        className={styles.exterExteriorRightFrontThrIcon}
        alt=""
        src={zdjSamochoduId}
      />
    </div>
  );
};

export default SummaryFrame;
