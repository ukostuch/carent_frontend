import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import { DatePicker, Select } from "antd";
import styles from "./OfertyFrame.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


const OfertyFrame = ({ filteredCars, selectedCar}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 12;

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };


  const prevClickHandler = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const startIdx = currentPage * carsPerPage;
  const endIdx = Math.min((currentPage + 1) * carsPerPage, filteredCars.length);

  const visibleCars = [];
  for (let i = startIdx; i < endIdx; i++) {
    visibleCars.push(filteredCars[i]);
  }

  const canGoNext = endIdx < filteredCars.length; 
  const canGoPrev = currentPage >= 1;   

  const onCarClick = useCallback(
    (carId) => {
      router.push({
        pathname: "/Car",
        query: { 
          carId, 
          locationId: selectedCar.locationId, 
          pickupDate: selectedCar.dateFrom, 
          returnDate: selectedCar.dateTo,
        },
      });
    },
    [router, selectedCar],
  );

  return (
    <div className={styles.ofertyFrameContainer}>
      <div className={styles.ofertyFrame}>
        {visibleCars.map((car, index) => (
          <Oferta1
            key={index}
            oferta1Left={`calc(33.33% - 150px + ${index % 3 *18-8}%)`}
            rectangleDivLeft={`calc(33.33% - 150px + ${index % 3 *18-8}%)`}
            onSamochod1Click={() => onCarClick(car.carId)}
            samochod1Left={`calc(33.33% - 150px + ${index % 3 *18-8}%)`}
            samochod1BackgroundImage={`url(${car.frontPhoto})`}
            nazwa1Left={`calc(33.33% -15 + ${index % 3 *20-8}%)`}
            model1Left={`calc(33.33% -15 + ${index % 3 *20-8}%)`}
            oferta1Right={index % 3 === 0 ? "unset" : "22px"}
            rectangleDivRight={index % 3 === 0 ? "unset" : "1px"}
            samochod1Right={index % 3 === 0 ? "unset" : "22px"}
            nazwa1Right={index % 3 === 0 ? "unset" : "91px"}
            model1Right={index % 3 === 0 ? "unset" : "91px"}
            oferta1Top={`calc(78px + ${Math.floor(index / 3) * 360}px)`}
            samochod1Top={`calc(24px + ${Math.floor(index / 3) * 10}px)`}
            rectangleDivBorderRadius="8px"
            carModel={car.carModel}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.OfertyFrame}>
          {canGoPrev &&<button className={styles.strzalkalewo} onClick={prevClickHandler}>&lt;</button>}
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          {canGoNext && <button className={styles.strzalkaprawo} onClick={nextClickHandler}>&gt;</button>}
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;
