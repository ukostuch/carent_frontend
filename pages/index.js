import { useCallback } from "react";
import { useRouter } from "next/router";
import ServiceCommentFrame from "../components/ServiceCommentFrame";
import styles from "./index.module.css";

const HomePage = () => {
  const router = useRouter();

  const onOurOfferButtonClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onOurOfferButton1Click = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onCommentsButtonClick = useCallback(() => {
    router.push("/CommentsService");
  }, [router]);

  const onRegisterButtonClick = useCallback(() => {
    router.push("/Register");
  }, [router]);

  const onOurLocationsClick = useCallback(() => {
    router.push("/Locations");
  }, [router]);

  const onBookyourCarClick = useCallback(() => {
    router.push("/Offer");
  }, [router]);

  const onServiceRulesClick = useCallback(() => {
    router.push("/Rules");
  }, [router]);

  return (
    <div className={styles.homepage}>
      <img
        className={styles.xv20is18625x4161Icon}
        alt=""
        src="/12xv20is18625x416-1@2x.png"
      />
      <div className={styles.homepageChild} />
      <b className={styles.findYourBest}>{`Find your best car with Carent `}</b>
      <div className={styles.youCanReceive}>
        You can receive your dream car, that meets your expectations, for as
        long as you wish, whenever you are in Poland
      </div>
      <button className={styles.ourOfferButton} onClick={onOurOfferButtonClick}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons4.svg" />
          <b className={styles.label}>OUR OFFER</b>
        </div>
      </button>
      <div className={styles.homepageItem} />
      <div className={styles.homepageInner} />
      <div className={styles.ecoFriendlyParent}>
        <b className={styles.ecoFriendly}>Eco-friendly</b>
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <div className={styles.ourCompanyIs}>
          Our company is eco-friendly and has a wide offer of electric and
          hybrid cars. If you wish to contribute to saving environment feel free
          to rent one of our innovative cars
        </div>
      </div>
      <div className={styles.familyFriendlyParent}>
        <b className={styles.ecoFriendly}>Family-friendly</b>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.inOurOffer}>
          In our offer we have vehicles suitable for all members of family. You
          don't need to worry about safety of your children as we offer kid
          seats.
        </div>
      </div>
      <div className={styles.budgetFriendlyParent}>
        <b className={styles.ecoFriendly}>Budget-friendly</b>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <div className={styles.youCanRent}>
          You can rent high-end vehicles in a reasonable price. Even if you
          travel on a budget you don't have to give up on comfort and luxury.
        </div>
      </div>
      <div className={styles.howItWorksParent}>
        <b className={styles.howItWorks}>How it works</b>
        <b className={styles.followTheseStepsContainer}>
          <p className={styles.followTheseSteps}>
            Follow these steps and easily book your comfortable car.
          </p>
          <p className={styles.followTheseSteps}>Enjoy your trip!</p>
        </b>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.homepageChild1} />
      <b className={styles.pickUpDate}>Pick-up date</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.chooseLocation}>Choose location</b>
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <b className={styles.youCanChoose}>
          You can choose from our multiple locations all around Poland
        </b>
      </div>
      <b className={styles.wheneverYouWant}>
        Whenever you want to rent a car, our company is there for you, as our
        spots are open seven days a week.
      </b>
      <b className={styles.clickSearchAnd}>
        Click SEARCH and choose a perfect car and enjoy your adventure
      </b>
      <button
        className={styles.ourOfferButton1}
        onClick={onOurOfferButton1Click}
      >
        <div className={styles.buttonmainWrapper}>
          <div className={styles.buttonmain1}>
            <img className={styles.icons} alt="" src="/icons3.svg" />
            <b className={styles.label1}>REGISTER</b>
          </div>
        </div>
        <b className={styles.search}>SEARCH</b>
      </button>
      <div className={styles.homepageChild2} />
      <button className={styles.commentsButton} onClick={onCommentsButtonClick}>
        <div className={styles.buttonmain2}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label1}>REGISTER</b>
        </div>
        <b className={styles.shareYourOpinion}>SHARE YOUR OPINION WITH US</b>
      </button>
      <div className={styles.groupDiv}>
        <div className={styles.groupItem} />
      </div>
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar1}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
      <button className={styles.registerButton} onClick={onRegisterButtonClick}>
        <div className={styles.buttonmain3}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label3}>REGISTER</b>
        </div>
      </button>
      <button className={styles.screenshotFrom2023102012} />
      <button className={styles.ourLocations1} onClick={onOurLocationsClick} />
      <button className={styles.bookyourCar} onClick={onBookyourCarClick} />
      <button className={styles.serviceRules1} onClick={onServiceRulesClick} />
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.welcomeToCarentContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.carent}>Carent</span>
        <span>
          , where our mission is to make your travel experience exceptional.
          We're here to turn your journeys into unforgettable adventures
        </span>
      </div>
      <ServiceCommentFrame
        commentText="I really enjoyed the service! Definitely will come back again"
        clientName="Greta"
        clientCountry="Sweden"
      />
    </div>
  );
};

export default HomePage;
