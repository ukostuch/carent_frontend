import { useMemo } from "react";
import styles from "./MenuFrameString.module.css";

const MenuFrameString = ({
  pickupLocation,
  pickupDate,
  returnDate,
  menuFrameTop,
  menuFrameLeft,
  menuFrameWidth,
  menuFrameHeight,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivTop1,
  rectangleDivLeft1,
  pickUpLocationTop,
  pickUpLocationLeft,
  pickUpDateTop,
  pickUpDateLeft,
  returnDateTop,
  returnDateLeft,
  searchTop,
  searchLeft,
  image38,
  image38IconTop,
  image38IconLeft,
  image39IconTop,
  image39IconLeft,
  image40,
  image40IconTop,
  image40IconLeft,
  krakwTop,
  krakwLeft,
  divTop,
  divLeft,
  divTop1,
  divLeft1,
}) => {
  const menuFrameStyle = useMemo(() => {
    return {
      top: menuFrameTop,
      left: menuFrameLeft,
      width: menuFrameWidth,
      height: menuFrameHeight,
    };
  }, [menuFrameTop, menuFrameLeft, menuFrameWidth, menuFrameHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth,
    rectangleDivHeight,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      top: rectangleDivTop1,
      left: rectangleDivLeft1,
    };
  }, [rectangleDivTop1, rectangleDivLeft1]);

  const pickUpLocationStyle = useMemo(() => {
    return {
      top: pickUpLocationTop,
      left: pickUpLocationLeft,
    };
  }, [pickUpLocationTop, pickUpLocationLeft]);

  const pickUpDateStyle = useMemo(() => {
    return {
      top: pickUpDateTop,
      left: pickUpDateLeft,
    };
  }, [pickUpDateTop, pickUpDateLeft]);

  const returnDateStyle = useMemo(() => {
    return {
      top: returnDateTop,
      left: returnDateLeft,
    };
  }, [returnDateTop, returnDateLeft]);

  const searchStyle = useMemo(() => {
    return {
      top: searchTop,
      left: searchLeft,
    };
  }, [searchTop, searchLeft]);

  const image38IconStyle = useMemo(() => {
    return {
      top: image38IconTop,
      left: image38IconLeft,
    };
  }, [image38IconTop, image38IconLeft]);

  const image39IconStyle = useMemo(() => {
    return {
      top: image39IconTop,
      left: image39IconLeft,
    };
  }, [image39IconTop, image39IconLeft]);

  const image40IconStyle = useMemo(() => {
    return {
      top: image40IconTop,
      left: image40IconLeft,
    };
  }, [image40IconTop, image40IconLeft]);

  const krakwStyle = useMemo(() => {
    return {
      top: krakwTop,
      left: krakwLeft,
    };
  }, [krakwTop, krakwLeft]);

  const divStyle = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
    };
  }, [divTop, divLeft]);

  const div1Style = useMemo(() => {
    return {
      top: divTop1,
      left: divLeft1,
    };
  }, [divTop1, divLeft1]);

  return (
    <div className={styles.menuFrame} style={menuFrameStyle}>
      <div className={styles.menuFrameChild} style={rectangleDivStyle} />
      <div className={styles.menuFrameItem} style={rectangleDiv1Style} />
      <div className={styles.pickUpLocation} style={pickUpLocationStyle}>
        Pick-up location
      </div>
      <div className={styles.pickUpDate} style={pickUpDateStyle}>
        Pick-up date
      </div>
      <div className={styles.returnDate} style={returnDateStyle}>
        Return date
      </div>
      <button className={styles.search} style={searchStyle} />
      <img
        className={styles.image38Icon}
        alt=""
        src={image38}
        style={image38IconStyle}
      />
      <img
        className={styles.image39Icon}
        alt=""
        src="/image-38@2x.png"
        style={image39IconStyle}
      />
      <img
        className={styles.image40Icon}
        alt=""
        src={image40}
        style={image40IconStyle}
      />
      <div className={styles.krakw} style={krakwStyle}>
        {pickupLocation}
      </div>
      <div className={styles.div} style={divStyle}>
        {pickupDate}
      </div>
      <div className={styles.div1} style={div1Style}>
        {returnDate}
      </div>
    </div>
  );
};

export default MenuFrameString;
