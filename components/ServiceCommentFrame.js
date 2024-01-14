import { useEffect, useState } from 'react';
import styles from "./ServiceCommentFrame.module.css";

const ServiceCommentFrame = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className={styles.serviceCommentFrame}>
      <button className={styles.strzalkaLewo} onClick={handlePrev}>&lt;</button>
      <div>
        <img className={styles.image11Icon} alt="" src="/image-111@2x.png" />
        <img className={styles.image12Icon} alt="" src="/image-121@2x.png" />
        <p className={styles.iReallyEnjoyed}>{reviews[currentIndex]?.comment}</p>
        <div className={styles.greta}>{reviews[currentIndex]?.userName}</div>
        <div className={styles.sweden}>{reviews[currentIndex]?.userCountry}</div>
      </div>
      <button className={styles.strzlkaPrawo} onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ServiceCommentFrame;
