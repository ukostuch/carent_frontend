//import { useCallback } from "react";
/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

  const OfertyFrame = () => {
    const router = useRouter();
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8080/offer")
        .then((response) => response.json())
        .then((data) => setCars(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    const redirectToCarDetails = useCallback((carId) => {
      router.push(`/Car/${carId}`);
    }, [router]);

    const onSamochod2Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod3Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod12Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod1Click = useCallback(() => {
      router.push("/Car");
    }, [router]);

    const onSamochod4Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod5Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod6Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod7Click = useCallback(() => {
      router.push("/Car");
    }, [router]);

    const onSamochod8Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod9Click = useCallback(() => {
      router.push("/Car");
    }, [router]);

    const onSamochod10Click = useCallback(() => {
      router.push("/Car");
    }, [router]);
  
    const onSamochod11Click = useCallback(() => {
      router.push("/Car");
    }, [router]);

  return (
    <div className={styles.ofertyFrame}>
      <div className={styles.tloPom} />
      <button className={styles.strzalkaprawo} />
      <button className={styles.strzalkalewo} />
      <Oferta1
        oferta1Left="calc(50% - 269px)"
        rectangleDivLeft="calc(50% - 216px)"
        onSamochod1Click={onSamochod2Click}
        samochod1Left="calc(50% - 188px)"
        samochod1BackgroundImage="url('/samochod2@3x.png')"
        nazwa1Left="calc(50% - 117px)"
        model1Left="calc(50% - 117px)"
        oferta1Right="unset"
        rectangleDivRight="unset"
        samochod1Right="unset"
        nazwa1Right="unset"
        model1Right="unset"
        oferta1Top="78px"
        samochod1Top="24px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="unset"
        rectangleDivLeft="unset"
        onSamochod1Click={onSamochod3Click}
        samochod1Left="unset"
        samochod1BackgroundImage="url('/samochod3@3x.png')"
        nazwa1Left="unset"
        model1Left="unset"
        oferta1Right="752px"
        rectangleDivRight="1px"
        samochod1Right="23px"
        nazwa1Right="91px"
        model1Right="91px"
        oferta1Top="78px"
        samochod1Top="24px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="644px"
        rectangleDivLeft="0px"
        nazwa1Left="105px"
        model1Left="105px"
        oferta1Right="unset"
        rectangleDivRight="unset"
        samochod1BackgroundImage="url('/samochod9@3x.png')"  //////////////
        nazwa1Right="unset"
        model1Right="unset"
        oferta1Top="461px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="calc(50% - 269px)"
        rectangleDivLeft="calc(50% - 215px)"
        nazwa1Left="calc(50% - 116px)"
        model1Left="calc(50% - 116px)"
        oferta1Right="unset"
        rectangleDivRight="unset"
        nazwa1Right="unset"
        samochod1BackgroundImage="url('/samochod4@3x.png')"
        model1Right="unset"
        oferta1Top="461px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="unset"
        rectangleDivLeft="unset"
        nazwa1Left="unset"
        model1Left="unset"
        samochod1BackgroundImage="url('/samochod21@3x.png')"
        oferta1Right="752px"
        rectangleDivRight="1px"
        nazwa1Right="95px"
        model1Right="95px"
        oferta1Top="461px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="644px"
        rectangleDivLeft="0px"
        onSamochod1Click={onSamochod7Click}
        samochod1Left="27px"
        samochod1BackgroundImage="url('/samochod13@3x.png')"  ////////////////////zmienione
        nazwa1Left="105px"
        model1Left="105px"
        oferta1Right="unset"
        rectangleDivRight="unset"
        samochod1Right="unset"
        nazwa1Right="unset"
        model1Right="unset"
        oferta1Top="844px"
        samochod1Top="30px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="calc(50% - 269px)"
        rectangleDivLeft="calc(50% - 215px)"
        onSamochod1Click={onSamochod8Click}
        samochod1Left="calc(50% - 188px)"
        samochod1BackgroundImage="url('/samochod8@3x.png')"
        nazwa1Left="calc(50% - 115px)"
        model1Left="calc(50% - 115px)"
        oferta1Right="unset"
        rectangleDivRight="unset"
        samochod1Right="unset"
        nazwa1Right="unset"
        model1Right="unset"
        oferta1Top="844px"
        samochod1Top="30px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="unset"
        rectangleDivLeft="unset"
        onSamochod1Click={onSamochod9Click}
        samochod1Left="unset"
        samochod1BackgroundImage="url('/samochod9@3x.png')"
        nazwa1Left="unset"
        model1Left="unset"
        oferta1Right="755px"
        rectangleDivRight="-2px"
        samochod1Right="23px"
        nazwa1Right="91px"
        model1Right="91px"
        oferta1Top="844px"
        samochod1Top="30px"
        rectangleDivBorderRadius="unset"
      />
      <Oferta1
        oferta1Left="644px"
        rectangleDivLeft="0px"
        onSamochod1Click={onSamochod10Click}
        samochod1Left="27px"
        samochod1BackgroundImage="url('/samochod10@3x.png')"
        nazwa1Left="105px"
        model1Left="105px"
        oferta1Right="unset"
        rectangleDivRight="unset"
        samochod1Right="unset"
        nazwa1Right="unset"
        model1Right="unset"
        oferta1Top="1227px"
        samochod1Top="32px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="calc(50% - 271px)"
        rectangleDivLeft="calc(50% - 213px)"
        onSamochod1Click={onSamochod5Click}
        samochod1Left="calc(50% - 188px)"
        samochod1BackgroundImage="url('/samochod4@3x.png')"
        nazwa1Left="calc(50% - 114px)"
        model1Left="calc(50% - 114px)"
        oferta1Right="unset"
        rectangleDivRight="unset"
        samochod1Right="unset"
        nazwa1Right="unset"
        model1Right="unset"
        oferta1Top="1227px"
        samochod1Top="32px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        oferta1Left="unset"
        rectangleDivLeft="unset"
        onSamochod1Click={onSamochod12Click}
        samochod1Left="unset"
        samochod1BackgroundImage="url('/samochod12@3x.png')"
        nazwa1Left="unset"
        model1Left="unset"
        oferta1Right="748px"
        rectangleDivRight="3px"
        samochod1Right="23px"
        nazwa1Right="91px"
        model1Right="91px"
        oferta1Top="1227px"
        samochod1Top="32px"
        rectangleDivBorderRadius="8px"
      />
      <Oferta1
        nazwa1Id="Model 1"
        samochod1Id={`https://imgd.aeplcdn.com/664x374/n/cw/ec/144851/exter-exterior-right-front-three-quarter-29.jpeg?isig=0&q=80`}
        onSamochod1Click={onSamochod1Click}
      />
    </div>
  );
};

export default OfertyFrame;*/

/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  return (
    <div className={styles.ofertyFrame}>
      {cars.map((car, index) => (
        <Oferta1
          key={index}
          oferta1Left={index % 4 === 0 ? "calc(50% - 269px)" : "unset"}
          rectangleDivLeft={index % 4 === 0 ? "calc(50% - 216px)" : "unset"}
          onSamochod1Click={() => onCarClick(car.Id)}
          samochod1Left={index % 4 === 0 ? "calc(50% - 188px)" : "unset"}
          samochod1BackgroundImage={`url(${car.frontPhoto})`}
          nazwa1Left={index % 4 === 0 ? "calc(50% - 117px)" : "unset"}
          model1Left={index % 4 === 0 ? "calc(50% - 117px)" : "unset"}
          oferta1Right={index % 4 === 0 ? "unset" : "752px"}
          rectangleDivRight={index % 4 === 0 ? "unset" : "1px"}
          samochod1Right={index % 4 === 0 ? "unset" : "23px"}
          nazwa1Right={index % 4 === 0 ? "unset" : "91px"}
          model1Right={index % 4 === 0 ? "unset" : "91px"}
          oferta1Top={`${78 + Math.floor(index / 4) * 383}px`}
          samochod1Top={`${24 + Math.floor(index / 4) * 383}px`}
          rectangleDivBorderRadius="8px"
          carModel={car.carModel}
        />
      ))}
    </div>
  );
};

export default OfertyFrame;*/


/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  return (
    <div className={styles.ofertyFrame}>
      {cars.map((car, index) => (
        <Oferta1
          key={index}
          oferta1Left={`calc(50% - 269px + ${index % 4 * 300}px)`}
          rectangleDivLeft={`calc(50% - 216px + ${index % 4 * 300}px)`}
          onSamochod1Click={() => onCarClick(car.Id)}
          samochod1Left={`calc(50% - 188px + ${index % 4 * 300}px)`}
          samochod1BackgroundImage={`url(${car.frontPhoto})`}
          nazwa1Left={`calc(50% - 117px + ${index % 4 * 300}px)`}
          model1Left={`calc(50% - 117px + ${index % 4 * 300}px)`}
          oferta1Right={index % 4 === 0 ? "unset" : "752px"}
          rectangleDivRight={index % 4 === 0 ? "unset" : "1px"}
          samochod1Right={index % 4 === 0 ? "unset" : "23px"}
          nazwa1Right={index % 4 === 0 ? "unset" : "91px"}
          model1Right={index % 4 === 0 ? "unset" : "91px"}
          oferta1Top={`${78 + Math.floor(index / 4) * 383}px`}
          samochod1Top={`${24 + (index % 4) * 383}px`}
          rectangleDivBorderRadius="8px"
          carModel={car.carModel}
        />
      ))}
    </div>
  );
};

export default OfertyFrame;*/






/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  return (
    <div className={styles.ofertyFrame} style={{ overflowY: "scroll", maxHeight: "80vh" }}>
      <div className={styles.tloPom} />
      <button className={styles.strzalkaprawo} />
      <button className={styles.strzalkalewo} />
      {cars.map((car, index) => (
        <Oferta1
          key={index}
          oferta1Left={index % 4 === 0 ? "calc(50% - 269px)" : "unset"}
          rectangleDivLeft={index % 4 === 0 ? "calc(50% - 216px)" : "unset"}
          onSamochod1Click={() => onCarClick(car.id)}
          samochod1Left={index % 4 === 0 ? "calc(50% - 188px)" : "unset"}
          samochod1BackgroundImage={`url(${car.frontPhoto})`}
          nazwa1Left={index % 4 === 0 ? "calc(50% - 117px)" : "unset"}
          model1Left={index % 4 === 0 ? "calc(50% - 117px)" : "unset"}
          oferta1Right={index % 4 === 0 ? "unset" : "752px"}
          rectangleDivRight={index % 4 === 0 ? "unset" : "1px"}
          samochod1Right={index % 4 === 0 ? "unset" : "23px"}
          nazwa1Right={index % 4 === 0 ? "unset" : "91px"}
          model1Right={index % 4 === 0 ? "unset" : "91px"}
          oferta1Top={`${78 + Math.floor(index / 4) * 383}px`}
          samochod1Top={`${24 + Math.floor(index / 4) * 383}px`}
          rectangleDivBorderRadius="8px"
          carModel={car.carModel}
        />
      ))}
    </div>
  );
};

export default OfertyFrame;*/


//nawet dziala 4 na 1 stronie, strzalki
/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 4;

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCars = cars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage);

  return (
    <div className={styles.ofertyFrameContainer}>
      <div className={styles.ofertyFrame}>
        {visibleCars.map((car, index) => (
          <Oferta1
            key={index}
            oferta1Left={`calc(25% - 269px + ${index % 4 * 15}%)`}
            rectangleDivLeft={`calc(25% - 216px + ${index % 4 * 15}%)`}
            onSamochod1Click={() => onCarClick(car.id)}
            samochod1Left={`calc(25% - 188px + ${index % 4 * 15}%)`}
            samochod1BackgroundImage={`url(${car.frontPhoto})`}
            nazwa1Left={`calc(25% - 117px + ${index % 4 * 15}%)`}
            model1Left={`calc(25% - 117px + ${index % 4 * 15}%)`}
            oferta1Right={index % 4 === 0 ? "unset" : "752px"}
            rectangleDivRight={index % 4 === 0 ? "unset" : "1px"}
            samochod1Right={index % 4 === 0 ? "unset" : "23px"}
            nazwa1Right={index % 4 === 0 ? "unset" : "91px"}
            model1Right={index % 4 === 0 ? "unset" : "91px"}
            oferta1Top={`${78 + Math.floor(index / 4) * 383}px`}
            samochod1Top={`${24 + Math.floor(index / 4) * 383}px`}
            rectangleDivBorderRadius="8px"
            carModel={car.carModel}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={prevClickHandler} disabled={currentPage === 0}>
            Prev
          </button>
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          <button onClick={nextClickHandler} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;*/


//widac wszytkie ale krzywo
/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 16;

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCars = cars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage);

  return (
    <div className={styles.ofertyFrameContainer}>
      <div className={styles.ofertyFrame}>
        {visibleCars.map((car, index) => (
          <Oferta1
            key={index}
            oferta1Left={`calc(25% - 269px + ${index % 4 * 25}%)`}
            rectangleDivLeft={`calc(25% - 216px + ${index % 4 * 25}%)`}
            onSamochod1Click={() => onCarClick(car.id)}
            samochod1Left={`calc(25% - 188px + ${index % 4 * 25}%)`}
            samochod1BackgroundImage={`url(${car.frontPhoto})`}
            nazwa1Left={`calc(25% - 117px + ${index % 4 * 25}%)`}
            model1Left={`calc(25% - 117px + ${index % 4 * 25}%)`}
            oferta1Right={index % 4 === 0 ? "unset" : "752px"}
            rectangleDivRight={index % 4 === 0 ? "unset" : "1px"}
            samochod1Right={index % 4 === 0 ? "unset" : "23px"}
            nazwa1Right={index % 4 === 0 ? "unset" : "91px"}
            model1Right={index % 4 === 0 ? "unset" : "91px"}
            oferta1Top={`${78 + Math.floor(index / 4) * 383}px`}
            samochod1Top={`${24 + (index % 4) * 120}px`}
            rectangleDivBorderRadius="8px"
            carModel={car.carModel}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={prevClickHandler} disabled={currentPage === 0}>
            Prev
          </button>
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          <button onClick={nextClickHandler} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;*/

//dobra pierwsza kolumna
/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCars = cars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage);

  return (
    <div className={styles.ofertyFrameContainer}>
      <div className={styles.ofertyFrame}>
        {visibleCars.map((car, index) => (
          <Oferta1
            key={index}
            oferta1Left={`calc(16.67% - 0 + ${index % 3 * 15.33}%)`}
            rectangleDivLeft={`calc(16.67% - 0 + ${index % 3 * 15.33}%)`}
            onSamochod1Click={() => onCarClick(car.id)}
            samochod1Left={`calc(16.67% - 188px + ${index % 3 * 15.33}%)`}
            samochod1BackgroundImage={`url(${car.frontPhoto})`}
            nazwa1Left={`calc(16.67% - 117px + ${index % 3 * 15.33}%)`}
            model1Left={`calc(16.67% - 117px + ${index % 3 * 15.33}%)`}
            oferta1Right={index % 3 === 0 ? "unset" : "752px"}
            rectangleDivRight={index % 3 === 0 ? "unset" : "1px"}
            samochod1Right={index % 3 === 0 ? "unset" : "23px"}
            nazwa1Right={index % 3 === 0 ? "unset" : "91px"}
            model1Right={index % 3 === 0 ? "unset" : "91px"}
            oferta1Top={`${78 + Math.floor(index / 3) * 383}px`}
            samochod1Top={`${24 + (index % 3) * 120}px`}
            rectangleDivBorderRadius="8px"
            carModel={car.carModel}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={prevClickHandler} disabled={currentPage === 0}>
            Prev
          </button>
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          <button onClick={nextClickHandler} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;*/


//calkiem bardzoodbre
/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCars = cars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage);

  return (
    <div className={styles.ofertyFrameContainer}>
      <div className={styles.ofertyFrame}>
        {visibleCars.map((car, index) => (
          <Oferta1
            key={index}
            oferta1Left={`calc(33.33% - 150px + ${index % 3 *20-8}%)`}
            rectangleDivLeft={`calc(33.33% - 150px + ${index % 3 *20-8}%)`}
            onSamochod1Click={() => onCarClick(car.id)}
            samochod1Left={`calc(33.33% - 150px + ${index % 3 *20-8}%)`}
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
        <div className={styles.pagination}>
          <button onClick={prevClickHandler} disabled={currentPage === 0}>
            Prev
          </button>
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          <button onClick={nextClickHandler} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;*/



//dobre
/*import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import styles from "./OfertyFrame.module.css";

const OfertyFrame = () => {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:8080/offer")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const redirectToCarDetails = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const onCarClick = useCallback((carId) => {
    router.push(`/Car/${carId}`);
  }, [router]);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCars = cars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage);

  return (
    <div className={styles.ofertyFrameContainer}>
      <div className={styles.ofertyFrame}>
        {visibleCars.map((car, index) => (
          <Oferta1
            key={index}
            oferta1Left={`calc(33.33% - 150px + ${index % 3 *20-8}%)`}
            rectangleDivLeft={`calc(33.33% - 150px + ${index % 3 *20-8}%)`}
            onSamochod1Click={() => onCarClick(car.id)}
            samochod1Left={`calc(33.33% - 150px + ${index % 3 *20-8}%)`}
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
        <div className={styles.pagination}>
          <button onClick={prevClickHandler} disabled={currentPage === 0}>
            Prev
          </button>
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          <button onClick={nextClickHandler} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;*/


//filtrowanie dziala
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Oferta1 from "./Oferta1";
import { DatePicker, Select } from "antd";
import styles from "./OfertyFrame.module.css";


const OfertyFrame = ({ filteredCars, selectedCar}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 12;

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const nextClickHandler = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIdx = currentPage * carsPerPage;
  const endIdx = Math.min((currentPage + 1) * carsPerPage, filteredCars.length);

  const visibleCars = [];
  for (let i = startIdx; i < endIdx; i++) {
    visibleCars.push(filteredCars[i]);
  }

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
        <div className={styles.pagination}>
          <button onClick={prevClickHandler} disabled={currentPage === 0}>
            Prev
          </button>
          <span>{`${currentPage + 1} / ${totalPages}`}</span>
          <button onClick={nextClickHandler} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OfertyFrame;
