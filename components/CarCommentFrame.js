import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CarCommentFrame.module.css";

const CarCommentFrame = ({ carId, carModel }) => {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 1; 

  useEffect(() => {
    const fetchComments = async () => {
      try {
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