import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./CarCommentFrame.module.css";

const CarCommentFrame = ({ clientName, cientCountry, comment }) => {
  const router = useRouter();

  const onDodajKomentarzClick = useCallback(() => {
    router.push("/CommentsCar");
  }, [router]);

  return (
    <div className={styles.carCommentFrame}>
      <i className={styles.reallyComfortableCar}>{comment}</i>
      <b className={styles.ratingAndReviews}>Rating and reviews:</b>
      <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <button className={styles.prawastrzalka} />
      <button className={styles.lewastzralka} />
      <button className={styles.dodajKomentarz} onClick={onDodajKomentarzClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>ADD REVIEW</b>
        </div>
      </button>
      <div className={styles.hans}>{clientName}</div>
      <div className={styles.germany}>{cientCountry}</div>
    </div>
  );
};

export default CarCommentFrame;

/*import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./CarCommentFrame.module.css";

const CarCommentFrame = ({ clientName, cientCountry, comment, onDodajKomentarzClick }) => {
  return (
    <div className={styles.carCommentFrame}>
      <i className={styles.reallyComfortableCar}>{comment}</i>
      <div className={styles.ratingAndReviews}>
        <b>Rating and reviews:</b>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      </div>
      
      <button className={styles.prawastrzalka}>Next</button>
      <button className={styles.lewastzralka}>Previous</button>

     
      <button className={styles.dodajKomentarz} onClick={onDodajKomentarzClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>ADD REVIEW</b>
        </div>
      </button>

      <div className={styles.hans}>{clientName}</div>
      <div className={styles.germany}>{cientCountry}</div>
    </div>
  );
};

export default CarCommentFrame;*/
