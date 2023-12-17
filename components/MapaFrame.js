import React from "react";
import styles from "./MapaFrame.module.css";

const MapaFrame = () => {
  return (
    <div className={styles.mapaFrame}>
      <iframe 
        src="https://www.google.com/maps/d/u/0/embed?mid=1JZPQ0m5EKjNHRbe3d5W8gFz_tpZao9M&ehbc=2E312F&noprof=1" 
        width="1600"  
        height="1000"> 
      </iframe>
    </div>
  );
};

export default MapaFrame;