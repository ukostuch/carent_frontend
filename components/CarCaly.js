import { useCallback } from "react";
import { useRouter } from "next/router";
import CarCommentFrame from "./CarCommentFrame";
import styles from "./CarCaly.module.css";
import CommentSection from "./CommentSection";

const CarCaly = ({
  carId,
  carModel,
  price,
  zdjSamochodu3Male,
  opisSamochodu,
  rok,
  gear,
  fuel,
  color,
  drive,
  techCond,
  passengers,
  technicalConditionOpis,
  pickupLocation,
  pickupDate,
  returnDate,
}) => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push({
      pathname: "/Login",
      query: {
        carId,
        pickupLocation,
        pickupDate,
        returnDate,
      },
    });
  }, [router, carId, pickupLocation, pickupDate, returnDate]);

  return (
    <div className={styles.carCaly}>
      <div className={styles.carCalyChild} />
      <button className={styles.carCalyItem} />
      <div className={styles.groupParent}>
        <div className={styles.carParent}>
          <div className={styles.car}>Car</div>
          <div className={styles.details}>Details</div>
          <div className={styles.payment}>Payment</div>
        </div>
        <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
        <img className={styles.image38Icon} alt="" src="/image-381@2x.png" />
        <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      </div>
      <button className={styles.inside} style={{ backgroundImage: `url(${zdjSamochodu3Male})` }} />
      <button className={styles.nazwaSamochodu} />
      <button className={styles.groupContainer} onClick={onGroupButtonClick}>
        <div className={styles.buttonmainWrapper}>
          <div className={styles.buttonmain}>
            <img className={styles.icons} alt="" src="/icons.svg" />
            <b className={styles.label}>REGISTER</b>
          </div>
        </div>
        <b className={styles.continueToBook}>CONTINUE TO BOOK</b>
      </button>
      <div className={styles.zDay}>{`zł/day`}</div>
      <div className={styles.model11}>{carModel}</div>
      <div className={styles.inOrderTo}>
        In order to continue you have to be logged in
      </div>
      <div className={styles.div}>{price}</div>
      <b className={styles.description}>Description:</b>
      <button className={styles.opis} />
      <div className={styles.hyundaiExterHas}>{opisSamochodu}</div>
      <button className={styles.opisTechiniczny} />
      <b className={styles.technicalCondition}>Technical condition:</b>
      <div className={styles.technicalConditionIs}>{technicalConditionOpis}</div>
      <div className={styles.tabelaZeSpecyfikacjaWrapper}>
        <div className={styles.tabelaZeSpecyfikacja}>
          <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
          <button className={styles.fuel} />
          <button className={styles.gear} />
          <button className={styles.color} />
          <button className={styles.drive} />
          <button className={styles.passengers} />
          <button className={styles.airConditioning} />
          <button className={styles.technicalCondition1} />
          <button className={styles.yearOfProduction} />
        </div>
      </div>
      <img className={styles.image46Icon} alt="" src="/image-46@2x.png" />
      <div className={styles.green}>{color}</div>
      <div className={styles.diesel}>{fuel}</div>
      <div className={styles.manual}>{gear}</div>
      <div className={styles.div1}>{passengers}</div>
      <div className={styles.div2}>{techCond}</div>
      <div className={styles.x4}>{drive}</div>
      <div className={styles.div3}>{rok}</div>
      <CarCommentFrame 
      carId={carId}
      carModel={carModel} />
    </div>
  );
};

export default CarCaly;