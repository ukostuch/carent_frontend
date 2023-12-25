/*
import React, { useState, useEffect, useCallback } from "react";
import CarCaly from "../components/CarCaly";
import CarCommentFrame from "../components/CarCommentFrame";
import MenuFrameString from "../components/MenuFrameString";
import { useRouter } from "next/router";
import styles from "./Car.module.css";

const Car = () => {
  const router = useRouter();
  const [carData, setCarData] = useState(null);
  const [reviewsData, setReviewsData] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch car data from your API or database using the carId
        const response = await fetch(`http://localhost:8080/offer/${router.query.carId}`);
        const data = await response.json();

        // Fetch car reviews from your API or database using the carId
        const reviewsResponse = await fetch(`http://localhost:8080/carreview/car/${router.query.carId}`);
        const reviewsData = await reviewsResponse.json();

        // Update the component state with fetched data
        setCarData(data);
        setReviewsData(reviewsData);
        const { locationId, pickupDate, returnDate } = router.query;
        setPickupLocation(locationId);
        setPickupDate(pickupDate);
        setReturnDate(returnDate);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    // Fetch data when the component mounts or when the carId changes
    if (router.query.carId) {
      fetchData();
    }
  }, [router.query.carId]);

  const onRegisterClick = useCallback(() => {
    router.push("/Register");
  }, [router]);

  const onScreenshotFrom2023102012Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurLocationsClick = useCallback(() => {
    router.push("/Locations");
  }, [router]);

  const onBookCarClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onServiceRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);
  
    return (
      <div className={styles.car}>
        {carData && (
          <CarCaly
            carModel={carData.carModel}
            price={carData.rentPriceForDay}
            zdjSamochodu3Male={carData.insidePhoto}
            opisSamochodu={carData.description}
            rok={carData.yearOfProduction}
            gear={carData.gear}
            fuel={carData.fuel}
            color={carData.color}
            drive={carData.drive}
            techCond={carData.technicalCondition}
            passengers={carData.passengers}
            technicalConditionOpis={carData.technicalDescription}
            clientName={reviewsData.userName}
            cientCountry={reviewsData.userCountry}
            comment={reviewsData.comment}
          />
        )}
        <div className={styles.carInner}>
          <div className={styles.groupChild} />
        </div>
        <b className={styles.ourLocations} onClick={onOurLocationsClick}>
          Our locations
        </b>
        <b className={styles.bookYourCar} onClick={onBookCarClick}>
          Book your car
        </b>
        <b className={styles.serviceRules} onClick={onServiceRulesClick}>
          Service rules
        </b>
        <button className={styles.register} onClick={onRegisterClick}>
          <div className={styles.buttonmain}>
            <img className={styles.icons} alt="" src="/icons.svg" />
            <b className={styles.label}>REGISTER</b>
          </div>
        </button>
        <button
          className={styles.screenshotFrom2023102012}
          onClick={onScreenshotFrom2023102012Click}
          />
          <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
          <button className={styles.bookCar} onClick={onBookCarClick} />
          <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
          <img className={styles.image32Icon} alt="" src="/image-17@2x.png" />
          <img className={styles.frontIcon} alt="" src={carData?.frontPhoto} />
          <img className={styles.frontDuzyIcon} alt="" src={carData?.frontPhoto} />
          <img className={styles.sideIcon} alt="" src={carData?.sidePhoto} />
          <MenuFrameString
            pickupLocation={pickupLocation}
            pickupDate={pickupDate}
            returnDate={returnDate}
            menuFrameTop="218px"
            menuFrameLeft="calc(50% - 1264px)"
            menuFrameWidth="2768px"
            menuFrameHeight="176px"
            rectangleDivTop="14px"
            rectangleDivLeft="calc(50% - 1673px)"
            rectangleDivWidth="2931px"
            rectangleDivHeight="172px"
            rectangleDivTop1="51px"
            rectangleDivLeft1="calc(50% - 758px)"
            pickUpLocationTop="57px"
            pickUpLocationLeft="calc(50% - 637px)"
            pickUpDateTop="57px"
            pickUpDateLeft="calc(50% - 279px)"
            returnDateTop="55px"
            returnDateLeft="calc(50% + 50px)"
            searchTop="56px"
            searchLeft="calc(50% + 335px)"
            image38="/image-38@2x.png"
            image38IconTop="57px"
            image38IconLeft="calc(50% - 376px)"
            image39IconTop="57px"
            image39IconLeft="calc(50% - 79px)"
            image40="/image-40@2x.png"
            image40IconTop="60px"
            image40IconLeft="calc(50% - 713px)"
            krakwTop="86px"
            krakwLeft="calc(50% - 628px)"
            divTop="86px"
            divLeft="calc(50% - 278px)"
            divTop1="86px"
            divLeft1="calc(50% + 35px)"
            
        />
      </div>
    );
  };
  
  export default Car;*/



  //DZIALA
  /*import React, { useState, useEffect, useCallback } from "react";
  import CarCaly from "../components/CarCaly";
  import CarCommentFrame from "../components/CarCommentFrame";
  import MenuFrameString from "../components/MenuFrameString";
  import { useRouter } from "next/router";
  import styles from "./Car.module.css";
  
  const Car = () => {
    const router = useRouter();
    const [carData, setCarData] = useState(null);
    const [reviewsData, setReviewsData] = useState([]);
    const [pickupLocation, setPickupLocation] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
  
    const locationIdToName = {
      "1": "Kraków",
      "2": "Gdynia",
      "3": "Olsztyn",
      "4": "Poznań",
      "5": "Lublin",
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch car data from your API or database using the carId
          const response = await fetch(`http://localhost:8080/offer/${router.query.carId}`);
          const data = await response.json();
  
          // Fetch car reviews from your API or database using the carId
          const reviewsResponse = await fetch(`http://localhost:8080/carreview/car/${router.query.carId}`);
          const reviewsData = await reviewsResponse.json();
  
          // Update the component state with fetched data
          setCarData(data);
          setReviewsData(reviewsData);
          const { locationId, pickupDate, returnDate } = router.query;
          //setPickupLocation(locationId);
          setPickupLocation(locationIdToName[String(locationId)]);

          setPickupDate(pickupDate);
          setReturnDate(returnDate);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
  
      // Fetch data when the component mounts or when the carId changes
      if (router.query.carId) {
        fetchData();
      }
    }, [router.query.carId]);
  
    const onRegisterClick = useCallback(() => {
      router.push("/Register");
    }, [router]);
  
    const onScreenshotFrom2023102012Click = useCallback(() => {
      router.push("/");
    }, [router]);
  
    const onOurLocationsClick = useCallback(() => {
      router.push("/Locations");
    }, [router]);
  
    const onBookCarClick = useCallback(() => {
      router.push("/Offer");
    }, [router]);
  
    const onServiceRulesClick = useCallback(() => {
      router.push("/Rules");
    }, [router]);
    
      return (
        <div className={styles.car}>
          {carData && (
            <CarCaly
              carModel={carData.carModel}
              price={carData.rentPriceForDay}
              zdjSamochodu3Male={carData.insidePhoto}
              opisSamochodu={carData.description}
              rok={carData.yearOfProduction}
              gear={carData.gear}
              fuel={carData.fuel}
              color={carData.color}
              drive={carData.drive}
              techCond={carData.technicalCondition}
              passengers={carData.passengers}
              technicalConditionOpis={carData.technicalDescription}
              clientName={reviewsData.userName}
              cientCountry={reviewsData.userCountry}
              comment={reviewsData.comment}
            />
          )}
          <div className={styles.carInner}>
            <div className={styles.groupChild} />
          </div>
          <b className={styles.ourLocations} onClick={onOurLocationsClick}>
            Our locations
          </b>
          <b className={styles.bookYourCar} onClick={onBookCarClick}>
            Book your car
          </b>
          <b className={styles.serviceRules} onClick={onServiceRulesClick}>
            Service rules
          </b>
          <button className={styles.register} onClick={onRegisterClick}>
            <div className={styles.buttonmain}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <b className={styles.label}>REGISTER</b>
            </div>
          </button>
          <button
            className={styles.screenshotFrom2023102012}
            onClick={onScreenshotFrom2023102012Click}
            />
            <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
            <button className={styles.bookCar} onClick={onBookCarClick} />
            <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
            <img className={styles.image32Icon} alt="" src="/image-17@2x.png" />
            <img className={styles.frontIcon} alt="" src={carData?.frontPhoto} />
            <img className={styles.frontDuzyIcon} alt="" src={carData?.frontPhoto} />
            <img className={styles.sideIcon} alt="" src={carData?.sidePhoto} />
            <MenuFrameString
              pickupLocation={pickupLocation}
              pickupDate={pickupDate}
              returnDate={returnDate}
              menuFrameTop="218px"
              menuFrameLeft="calc(50% - 1264px)"
              menuFrameWidth="2768px"
              menuFrameHeight="176px"
              rectangleDivTop="14px"
              rectangleDivLeft="calc(50% - 1673px)"
              rectangleDivWidth="2931px"
              rectangleDivHeight="172px"
              rectangleDivTop1="51px"
              rectangleDivLeft1="calc(50% - 758px)"
              pickUpLocationTop="57px"
              pickUpLocationLeft="calc(50% - 637px)"
              pickUpDateTop="57px"
              pickUpDateLeft="calc(50% - 279px)"
              returnDateTop="55px"
              returnDateLeft="calc(50% + 50px)"
              searchTop="56px"
              searchLeft="calc(50% + 335px)"
              image38="/image-38@2x.png"
              image38IconTop="57px"
              image38IconLeft="calc(50% - 376px)"
              image39IconTop="57px"
              image39IconLeft="calc(50% - 79px)"
              image40="/image-40@2x.png"
              image40IconTop="60px"
              image40IconLeft="calc(50% - 713px)"
              krakwTop="86px"
              krakwLeft="calc(50% - 628px)"
              divTop="86px"
              divLeft="calc(50% - 278px)"
              divTop1="86px"
              divLeft1="calc(50% + 35px)"
              
          />
        </div>
      );
    };
    
    export default Car;*/
  
    //DZIALA SUPER
    /*
    import React, { useState, useEffect, useCallback } from "react";
    import CarCaly from "../components/CarCaly";
    import CarCommentFrame from "../components/CarCommentFrame";
    import MenuFrameString from "../components/MenuFrameString";
    import { useRouter } from "next/router";
    import styles from "./Car.module.css";
    
    const Car = () => {
      const router = useRouter();
      const [carData, setCarData] = useState(null);
      const [reviewsData, setReviewsData] = useState([]);
      const [pickupLocation, setPickupLocation] = useState("");
      const [pickupDate, setPickupDate] = useState("");
      const [returnDate, setReturnDate] = useState("");
    
      const locationIdToName = {
        "1": "Kraków",
        "2": "Gdynia",
        "3": "Olsztyn",
        "4": "Poznań",
        "5": "Lublin",
      };
  
      useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch car data from your API or database using the carId
            const response = await fetch(`http://localhost:8080/offer/${router.query.carId}`);
            const data = await response.json();
    
            // Fetch car reviews from your API or database using the carId
            const reviewsResponse = await fetch(`http://localhost:8080/carreview/car/${router.query.carId}`);
            const reviewsData = await reviewsResponse.json();
    
            // Update the component state with fetched data
            setCarData(data);
            setReviewsData(reviewsData);
            const { locationId, pickupDate, returnDate } = router.query;
            //setPickupLocation(locationId);
            setPickupLocation(locationIdToName[String(locationId)]);
  
            setPickupDate(pickupDate);
            setReturnDate(returnDate);
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
    
        // Fetch data when the component mounts or when the carId changes
        if (router.query.carId) {
          fetchData();
        }
      }, [router.query.carId]);
    
      const onRegisterClick = useCallback(() => {
        router.push("/Register");
      }, [router]);
    
      const onScreenshotFrom2023102012Click = useCallback(() => {
        router.push("/");
      }, [router]);
    
      const onOurLocationsClick = useCallback(() => {
        router.push("/Locations");
      }, [router]);
    
      const onBookCarClick = useCallback(() => {
        router.push("/Offer");
      }, [router]);
    
      const onServiceRulesClick = useCallback(() => {
        router.push("/Rules");
      }, [router]);
      
        return (
          <div className={styles.car}>
            {carData && (
              <CarCaly
                carId={carData.carId}
                carModel={carData.carModel}
                price={carData.rentPriceForDay}
                zdjSamochodu3Male={carData.insidePhoto}
                opisSamochodu={carData.description}
                rok={carData.yearOfProduction}
                gear={carData.gear}
                fuel={carData.fuel}
                color={carData.color}
                drive={carData.drive}
                techCond={carData.technicalCondition}
                passengers={carData.passengers}
                technicalConditionOpis={carData.technicalDescription}
                clientName={reviewsData.userName}
                cientCountry={reviewsData.userCountry}
                comment={reviewsData.comment}
                pickupLocation={pickupLocation}
                pickupDate={pickupDate}
                returnDate={returnDate}
              />
            )}
            <div className={styles.carInner}>
              <div className={styles.groupChild} />
            </div>
            <b className={styles.ourLocations} onClick={onOurLocationsClick}>
              Our locations
            </b>
            <b className={styles.bookYourCar} onClick={onBookCarClick}>
              Book your car
            </b>
            <b className={styles.serviceRules} onClick={onServiceRulesClick}>
              Service rules
            </b>
            <button className={styles.register} onClick={onRegisterClick}>
              <div className={styles.buttonmain}>
                <img className={styles.icons} alt="" src="/icons.svg" />
                <b className={styles.label}>REGISTER</b>
              </div>
            </button>
            <button
              className={styles.screenshotFrom2023102012}
              onClick={onScreenshotFrom2023102012Click}
              />
              <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
              <button className={styles.bookCar} onClick={onBookCarClick} />
              <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
              <img className={styles.image32Icon} alt="" src="/image-17@2x.png" />
              <img className={styles.frontIcon} alt="" src={carData?.frontPhoto} />
              <img className={styles.frontDuzyIcon} alt="" src={carData?.frontPhoto} />
              <img className={styles.sideIcon} alt="" src={carData?.sidePhoto} />
              <MenuFrameString
                pickupLocation={pickupLocation}
                pickupDate={pickupDate}
                returnDate={returnDate}
                menuFrameTop="218px"
                menuFrameLeft="calc(50% - 1264px)"
                menuFrameWidth="2768px"
                menuFrameHeight="176px"
                rectangleDivTop="14px"
                rectangleDivLeft="calc(50% - 1673px)"
                rectangleDivWidth="2931px"
                rectangleDivHeight="172px"
                rectangleDivTop1="51px"
                rectangleDivLeft1="calc(50% - 758px)"
                pickUpLocationTop="57px"
                pickUpLocationLeft="calc(50% - 637px)"
                pickUpDateTop="57px"
                pickUpDateLeft="calc(50% - 279px)"
                returnDateTop="55px"
                returnDateLeft="calc(50% + 50px)"
                searchTop="56px"
                searchLeft="calc(50% + 335px)"
                image38="/image-38@2x.png"
                image38IconTop="57px"
                image38IconLeft="calc(50% - 376px)"
                image39IconTop="57px"
                image39IconLeft="calc(50% - 79px)"
                image40="/image-40@2x.png"
                image40IconTop="60px"
                image40IconLeft="calc(50% - 713px)"
                krakwTop="86px"
                krakwLeft="calc(50% - 628px)"
                divTop="86px"
                divLeft="calc(50% - 278px)"
                divTop1="86px"
                divLeft1="calc(50% + 35px)"
                
            />
          </div>
        );
      };
      
      export default Car;
    */

    
  

      import React, { useState, useEffect, useCallback } from "react";
      import CarCaly from "../components/CarCaly";
      import CarCommentFrame from "../components/CarCommentFrame";
      import MenuFrameString from "../components/MenuFrameString";
      import { useRouter } from "next/router";
      import styles from "./Car.module.css";
      
      const Car = () => {
        const router = useRouter();
        const [carData, setCarData] = useState(null);
        const [pickupLocation, setPickupLocation] = useState("");
        const [pickupDate, setPickupDate] = useState("");
        const [returnDate, setReturnDate] = useState("");
      
        const locationIdToName = {
          "1": "Kraków",
          "2": "Gdynia",
          "3": "Olsztyn",
          "4": "Poznań",
          "5": "Lublin",
        };
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              // Fetch car data from your API or database using the carId
              const response = await fetch(`http://localhost:8080/offer/${router.query.carId}`);
              const data = await response.json();
      
              // Update the component state with fetched data
              setCarData(data);
              const { locationId, pickupDate, returnDate } = router.query;
              setPickupLocation(locationIdToName[String(locationId)]);
              setPickupDate(pickupDate);
              setReturnDate(returnDate);
            } catch (error) {
              console.error("Error fetching data", error);
            }
          };
      
          // Fetch data when the component mounts or when the carId changes
          if (router.query.carId) {
            fetchData();
          }
        }, [router.query.carId]);
      
        const onRegisterClick = useCallback(() => {
          router.push("/Register");
        }, [router]);
      
        const onScreenshotFrom2023102012Click = useCallback(() => {
          router.push("/");
        }, [router]);
      
        const onOurLocationsClick = useCallback(() => {
          router.push("/Locations");
        }, [router]);
      
        const onBookCarClick = useCallback(() => {
          router.push("/Offer");
        }, [router]);
      
        const onServiceRulesClick = useCallback(() => {
          router.push("/Rules");
        }, [router]);
      
        return (
          <div className={styles.car}>
            {carData && (
              <CarCaly
                carId={carData.carId}
                carModel={carData.carModel}
                price={carData.rentPriceForDay}
                zdjSamochodu3Male={carData.insidePhoto}
                opisSamochodu={carData.description}
                rok={carData.yearOfProduction}
                gear={carData.gear}
                fuel={carData.fuel}
                color={carData.color}
                drive={carData.drive}
                techCond={carData.technicalCondition}
                passengers={carData.passengers}
                technicalConditionOpis={carData.technicalDescription}
                pickupLocation={pickupLocation}
                pickupDate={pickupDate}
                returnDate={returnDate}
              />
            )}
            <b className={styles.ourLocations} onClick={onOurLocationsClick}>
              Our locations
            </b>
            <b className={styles.bookYourCar} onClick={onBookCarClick}>
              Book your car
            </b>
            <b className={styles.serviceRules} onClick={onServiceRulesClick}>
              Service rules
            </b>
            <button className={styles.register} onClick={onRegisterClick}>
              <div className={styles.buttonmain}>
                <img className={styles.icons} alt="" src="/icons.svg" />
                <b className={styles.label}>REGISTER</b>
              </div>
            </button>
            <button
              className={styles.screenshotFrom2023102012}
              onClick={onScreenshotFrom2023102012Click}
              />
              <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
              <button className={styles.bookCar} onClick={onBookCarClick} />
              <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
              <img className={styles.image32Icon} alt="" src="/image-17@2x.png" />
              <img className={styles.frontIcon} alt="" src={carData?.frontPhoto} />
              <img className={styles.frontDuzyIcon} alt="" src={carData?.frontPhoto} />
              <img className={styles.sideIcon} alt="" src={carData?.sidePhoto} />
              <MenuFrameString
                pickupLocation={pickupLocation}
                pickupDate={pickupDate}
                returnDate={returnDate}
                menuFrameTop="218px"
                menuFrameLeft="calc(50% - 1264px)"
                menuFrameWidth="2768px"
                menuFrameHeight="176px"
                rectangleDivTop="14px"
                rectangleDivLeft="calc(50% - 1673px)"
                rectangleDivWidth="2931px"
                rectangleDivHeight="172px"
                rectangleDivTop1="51px"
                rectangleDivLeft1="calc(50% - 758px)"
                pickUpLocationTop="57px"
                pickUpLocationLeft="calc(50% - 637px)"
                pickUpDateTop="57px"
                pickUpDateLeft="calc(50% - 279px)"
                returnDateTop="55px"
                returnDateLeft="calc(50% + 50px)"
                searchTop="56px"
                searchLeft="calc(50% + 335px)"
                image38="/image-38@2x.png"
                image38IconTop="57px"
                image38IconLeft="calc(50% - 376px)"
                image39IconTop="57px"
                image39IconLeft="calc(50% - 79px)"
                image40="/image-40@2x.png"
                image40IconTop="60px"
                image40IconLeft="calc(50% - 713px)"
                krakwTop="86px"
                krakwLeft="calc(50% - 628px)"
                divTop="86px"
                divLeft="calc(50% - 278px)"
                divTop1="86px"
                divLeft1="calc(50% + 35px)"
                
            />
          </div>
        );
      };
      
      export default Car;