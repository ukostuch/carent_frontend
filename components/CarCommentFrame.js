/*import { useCallback } from "react";
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
*/

//TEZ DZIALA, SA ZAWSZE 2 STRZALKI ALE MOZNA PRZEIJAC NAWET JAK SIE SKONCZA KOMENTARZE
/*import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CarCommentFrame.module.css";

const CarCommentFrame = ({ carId }) => {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 1; // Ilość komentarzy na stronę

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Fetch comments for the specified carId
        const response = await fetch(`http://localhost:8080/carreview/car/${carId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments", error);
      }
    };

    // Fetch comments when the component mounts or when carId changes
    if (carId) {
      fetchComments();
    }
  }, [carId]);

  const onDodajKomentarzClick = useCallback(() => {
    router.push("/CommentsCar");
  }, [router]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const displayedComments = comments.slice(startIndex, endIndex);

  return (
    <div className={styles.carCommentFrame}>
      <b className={styles.ratingAndReviews}>Rating and reviews:</b>
      <div className={styles.commentsSection}>
        {displayedComments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <i className={styles.reallyComfortableCar}>{comment.comment}</i>
            <div className={styles.clientInfo}>
              <div className={styles.clientName}>{comment.userName}</div>
              <div className={styles.clientCountry}>{comment.userCountry}</div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.prawastrzalka} onClick={handleNextPage} />
      <button className={styles.lewastzralka} onClick={handlePrevPage} />
      <button className={styles.dodajKomentarz} onClick={onDodajKomentarzClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>ADD REVIEW</b>
        </div>
      </button>
    </div>
  );
};

export default CarCommentFrame;*/

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CarCommentFrame.module.css";

const CarCommentFrame = ({ carId, carModel }) => {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 1; // Ilość komentarzy na stronę

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Fetch comments for the specified carId
        const response = await fetch(`http://localhost:8080/carreview/car/${carId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments", error);
      }
    };


    if (carId) {
      fetchComments();
    }
  }, [carId]);

  const onDodajKomentarzClick = useCallback(() => {
    router.push({
      pathname: "/CommentsCar",
      query: {
        carModel: carModel,
        carId: carId,
      },
    });
  }, [router, carId, carModel]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const displayedComments = comments.slice(startIndex, endIndex);

  const canGoNext = endIndex < comments.length;
  const canGoPrev = currentPage > 1;

  return (
    <div className={styles.carCommentFrame}>
      <b className={styles.ratingAndReviews}>Rating and reviews:</b>
      <div className={styles.commentsSection}>
        {displayedComments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <i className={styles.reallyComfortableCar}>{comment.comment}</i>
            <div className={styles.clientInfo}>
              <div className={styles.clientName}>{comment.userName}</div>
              <div className={styles.clientCountry}>{comment.userCountry}</div>
            </div>
          </div>
        ))}
      </div>
      {canGoPrev && <button className={styles.lewastzralka} onClick={handlePrevPage} />}
      {canGoNext && <button className={styles.prawastrzalka} onClick={handleNextPage} />}
      <button className={styles.dodajKomentarz} onClick={onDodajKomentarzClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>ADD REVIEW</b>
        </div>
      </button>
    </div>
  );
};

export default CarCommentFrame;