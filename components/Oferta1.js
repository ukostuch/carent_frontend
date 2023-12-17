/*import { useMemo } from "react";
import styles from "./Oferta1.module.css";

const Oferta1 = ({
  nazwa1Id,
  samochod1Id,
  oferta1Left,
  rectangleDivLeft,
  onSamochod1Click,
  samochod1Left,
  samochod1BackgroundImage,
  nazwa1Left,
  model1Left,
  oferta1Right,
  rectangleDivRight,
  samochod1Right,
  nazwa1Right,
  model1Right,
  oferta1Top,
  samochod1Top,
  rectangleDivBorderRadius,
  carModel
}) => {
  const oferta1Style = useMemo(() => {
    return {
      left: oferta1Left,
      right: oferta1Right,
      top: oferta1Top,
    };
  }, [oferta1Left, oferta1Right, oferta1Top]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      left: rectangleDivLeft,
      right: rectangleDivRight,
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivLeft, rectangleDivRight, rectangleDivBorderRadius]);

  const samochod1Style = useMemo(() => {
    return {
      left: samochod1Left,
      backgroundImage: samochod1BackgroundImage,
      right: samochod1Right,
      top: samochod1Top,
    };
  }, [samochod1Left, samochod1BackgroundImage, samochod1Right, samochod1Top]);

  const nazwa1Style = useMemo(() => {
    return {
      left: nazwa1Left,
      right: nazwa1Right,
    };
  }, [nazwa1Left, nazwa1Right]);

  const model1Style = useMemo(() => {
    return {
      left: model1Left,
      right: model1Right,
    };
  }, [model1Left, model1Right]);

  return (
    <div className={styles.oferta1} style={oferta1Style}>
      <div className={styles.oferta1Child} style={rectangleDiv2Style} />
      <button
        className={styles.samochod1}
        onClick={onSamochod1Click}
        id={samochod1Id}
        style={samochod1Style}
      />
      <button className={styles.nazwa1} id={nazwa1Id} style={nazwa1Style} />
      <div className={styles.model1} style={model1Style}>
        Model 1
      </div>
    </div>
  );
};*/









import { useMemo } from "react";
import styles from "./Oferta1.module.css";

const Oferta1 = ({
  nazwa1Id,
  samochod1Id,
  oferta1Left,
  rectangleDivLeft,
  onSamochod1Click,
  samochod1Left,
  samochod1BackgroundImage,
  nazwa1Left,
  model1Left,
  oferta1Right,
  rectangleDivRight,
  samochod1Right,
  nazwa1Right,
  model1Right,
  oferta1Top,
  samochod1Top,
  rectangleDivBorderRadius,
  carModel,
}) => {
  const oferta1Style = useMemo(() => {
    return {
      left: oferta1Left,
      right: oferta1Right,
      top: oferta1Top,
    };
  }, [oferta1Left, oferta1Right, oferta1Top]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      left: rectangleDivLeft,
      right: rectangleDivRight,
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivLeft, rectangleDivRight, rectangleDivBorderRadius]);

  const samochod1Style = useMemo(() => {
    return {
      left: samochod1Left,
      backgroundImage: samochod1BackgroundImage,
      right: samochod1Right,
      top: samochod1Top,
    };
  }, [samochod1Left, samochod1BackgroundImage, samochod1Right, samochod1Top]);

  const nazwa1Style = useMemo(() => {
    return {
      left: nazwa1Left,
      right: nazwa1Right,
    };
  }, [nazwa1Left, nazwa1Right]);

  const model1Style = useMemo(() => {
    return {
      left: model1Left,
      right: model1Right,
    };
  }, [model1Left, model1Right]);

  return (
    <div className={styles.oferta1} style={oferta1Style}>
      <div className={styles.oferta1Child} style={rectangleDiv2Style} />
      <button
        className={styles.samochod1}
        onClick={onSamochod1Click}
        id={samochod1Id}
        style={samochod1Style}
      />
      <button className={styles.nazwa1} id={nazwa1Id} style={nazwa1Style} />
      <div className={styles.model1} style={model1Style}>
        {carModel}
      </div>
    </div>
  );
};

export default Oferta1;
