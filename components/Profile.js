/*import "antd/dist/antd.min.css";
import { Input } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";

const Profile = ({ history1SamochodId, history2SamochodId }) => {
  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>my_username
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      <button className={styles.canccelReservation}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>CANCEL</b>
        </div>
      </button>
      <button className={styles.samochod} />
      <b className={styles.pickUpDate}>Pick up date:</b>
      <b className={styles.model}>Model:</b>
      <b className={styles.returnDate}>Return date:</b>
      <b className={styles.priceZ}>Price (zł):</b>
      <b className={styles.location}>Location:</b>
      <b className={styles.siguan}>Siguan</b>
      <b className={styles.b}>2023-12-31</b>
      <b className={styles.b1}>2024-01-03</b>
      <b className={styles.b2}>301</b>
      <b className={styles.krakwBieanowska11}>Kraków, Bieżanowska 11</b>
      <div className={styles.profileItem} />
      <button className={styles.samochod1} id={history1SamochodId} />
      <b className={styles.pickUpDate1}>Pick up date:</b>
      <b className={styles.model1}>Model:</b>
      <b className={styles.returnDate1}>Return date:</b>
      <b className={styles.priceZ1}>Price (zł):</b>
      <b className={styles.location1}>Location:</b>
      <b className={styles.yaris}>Yaris</b>
      <b className={styles.b3}>2023-11-03</b>
      <b className={styles.b4}>2023-11-05</b>
      <b className={styles.b5}>102</b>
      <b className={styles.krakwBieanowska12}>Kraków, Bieżanowska 12</b>
      <div className={styles.profileInner} />
      <button className={styles.samochod2} id={history2SamochodId} />
      <b className={styles.location2}>Location:</b>
      <b className={styles.priceZ2}>Price (zł):</b>
      <b className={styles.returnDate2}>Return date:</b>
      <b className={styles.pickUpDate2}>Pick up date:</b>
      <b className={styles.model2}>Model:</b>
      <b className={styles.leon}>Leon</b>
      <b className={styles.b6}>2023-10-10</b>
      <b className={styles.b7}>2023-10-21</b>
      <b className={styles.b8}>503</b>
      <b className={styles.krakwBieanowska13}>Kraków, Bieżanowska 13</b>
    </div>
  );
};

export default Profile;*/

/*import "antd/dist/antd.min.css";
import { Input } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";

const Profile = ({ userReservations }) => {
  const router = useRouter();
  const reservation1 = userReservations[0];
  const reservation2 = userReservations[1];
  const reservation3 = userReservations[2];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{router.query.myUsername}</div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>

      
      {reservation1 && (
        <div className={styles.profileItem}>
          <button className={styles.samochod} />
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{reservation1.howManyDays}</b>
          <b className={styles.b}>{reservation1.dateFrom}</b>
          <b className={styles.b1}>{reservation1.dateTo}</b>
          <b className={styles.b2}>{reservation1.cost}</b>
          <b className={styles.krakwBieanowska11}>{reservation1.locationId}</b>
        </div>
      )}

      
      {reservation2 && (
        <div className={styles.profileItem}>
          <button className={styles.samochod} />
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{reservation2.howManyDays}</b>
          <b className={styles.b}>{reservation2.dateFrom}</b>
          <b className={styles.b1}>{reservation2.dateTo}</b>
          <b className={styles.b2}>{reservation2.cost}</b>
          <b className={styles.krakwBieanowska11}>{reservation2.locationId}</b>
        </div>
      )}

      
      {reservation3 && (
        <div className={styles.profileItem}>
          <button className={styles.samochod} />
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{reservation3.howManyDays}</b>
          <b className={styles.b}>{reservation3.dateFrom}</b>
          <b className={styles.b1}>{reservation3.dateTo}</b>
          <b className={styles.b2}>{reservation3.cost}</b>
          <b className={styles.krakwBieanowska11}>{reservation3.locationId}</b>
        </div>
      )}

      <div className={styles.profileInner} />
    </div>
  );
};

export default Profile;*/

/*import "antd/dist/antd.min.css";
import { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";

const Profile = ({ myUsername }) => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    const fetchCarInfo = async (carId) => {
      try {
        const response = await fetch(`http://localhost:8080/offer/${carId}`);
        const data = await response.json();
        setCarInfo(data);
      } catch (error) {
        console.error("Error fetching car info:", error);
      }
    };

    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);

  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);

    // Pobieranie informacji o samochodzie dla nowej rezerwacji
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };

  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{router.query.myUsername}</div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>

      {reservations.length > 0 && carInfo && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{currentReservation.dateFrom}</b>
          <b className={styles.b}>{currentReservation.dateTo}</b>
          <b className={styles.b1}>{currentReservation.cost}</b>
          <b className={styles.b2}>{currentReservation.locationId}</b>
          <b className={styles.krakwBieanowska11}>Kraków, Bieżanowska 11</b>

          
          <b className={styles.model}>Car Model:</b>
          <div>{carInfo.carModel}</div>
          <b className={styles.frontPhoto}>Front Photo:</b>
          <img src={carInfo.frontPhoto} alt="Front Photo" />
        </div>
      )}

   
      {reservations.length > 1 && (
        <div>
          <button onClick={() => navigateReservation("prev")}>Previous</button>
          <button onClick={() => navigateReservation("next")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Profile;*/

//zadzialalo po zakomentowania routera i biblioteki ?
/*import { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Profile.module.css";
//import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = ({ myUsername }) => {
  //const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const [username, setUsername] = useState(myUsername);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
  };

  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      <button className={styles.canccelReservation}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>CANCEL</b>
        </div>
      </button>

      {reservations.length > 0 && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{currentReservation.dateFrom}</b>
          <b className={styles.b}>{currentReservation.dateTo}</b>
          <b className={styles.b1}>{currentReservation.cost}</b>
          <b className={styles.b2}>{currentReservation.locationId}</b>
          <b className={styles.krakwBieanowska11}>Kraków, Bieżanowska 11</b>
        </div>
      )}

      
      {reservations.length > 1 && (
        <div>
          <button onClick={() => navigateReservation("prev")}>Previous</button>
          <button onClick={() => navigateReservation("next")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Profile;*/

/*import "antd/dist/antd.min.css";
import { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";

const Profile = ({ myUsername }) => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    const fetchCarInfo = async (carId) => {
      try {
        const response = await fetch(`http://localhost:8080/offer/${carId}`);
        const data = await response.json();
        setCarInfo(data);
      } catch (error) {
        console.error("Error fetching car info:", error);
      }
    };

    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);

  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);

    // Pobieranie informacji o samochodzie dla nowej rezerwacji
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };

  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{router.query.myUsername}</div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>

      {reservations.length > 0 && carInfo && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{currentReservation.dateFrom}</b>
          <b className={styles.b}>{currentReservation.dateTo}</b>
          <b className={styles.b1}>{currentReservation.cost}</b>
          <b className={styles.b2}>{currentReservation.locationId}</b>
          <b className={styles.krakwBieanowska11}>Kraków, Bieżanowska 11</b>

          
          <b className={styles.model}>Car Model:</b>
          <div>{carInfo.carModel}</div>
          <b className={styles.frontPhoto}>Front Photo:</b>
          <img src={carInfo.frontPhoto} alt="Front Photo" />
        </div>
      )}

   
      {reservations.length > 1 && (
        <div>
          <button onClick={() => navigateReservation("prev")}>Previous</button>
          <button onClick={() => navigateReservation("next")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Profile;*/

//zadzialalo po zakomentowania routera i biblioteki ?
/*import { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Profile.module.css";
//import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = ({ myUsername }) => {
  //const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const [username, setUsername] = useState(myUsername);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
  };

  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      <button className={styles.canccelReservation}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>CANCEL</b>
        </div>
      </button>

      {reservations.length > 0 && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location:</b>
          <b className={styles.siguan}>{currentReservation.dateFrom}</b>
          <b className={styles.b}>{currentReservation.dateTo}</b>
          <b className={styles.b1}>{currentReservation.cost}</b>
          <b className={styles.b2}>{currentReservation.locationId}</b>
          <b className={styles.krakwBieanowska11}>Kraków, Bieżanowska 11</b>
        </div>
      )}

      
      {reservations.length > 1 && (
        <div>
          <button onClick={() => navigateReservation("prev")}>Previous</button>
          <button onClick={() => navigateReservation("next")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Profile;*/

//DZIALA
/*import { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Profile.module.css";
//import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = ({myUsername}) => {
  //const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  //const username = router.query.myUsername;
  const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState(null);


  const locationIdToName = {
    "1": "Kraków",
    "2": "Gdynia",
    "3": "Olsztyn",
    "4": "Poznań",
    "5": "Lublin",
  };

  const fetchCarInfo = async (carId) => {
    try {
      const response = await fetch(`http://localhost:8080/offer/${carId}`);
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  //useEffect(() => {
  //  const fetchCarInfo = async (carId) => {
  //    try {
  //      const response = await fetch(`http://localhost:8080/offer/${carId}`);
   //     const data = await response.json();
    //    setCarInfo(data);
   //   } catch (error) {
    //    console.error("Error fetching car info:", error);
    //  }
   // };

   // if (reservations.length > 0) {
   //   const carId = reservations[currentReservationIndex].carId;
   //   fetchCarInfo(carId);
   // }
  //}, [reservations, currentReservationIndex]);

  useEffect(() => {
    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);



  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };

  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      <button className={styles.canccelReservation}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <b className={styles.label}>CANCEL</b>
        </div>
      </button>

      {reservations.length > 0 && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location: </b>
          <b className={styles.siguan}>{carInfo.carModel}</b>
          <b className={styles.b}>{currentReservation.dateFrom}</b>
          <b className={styles.b1}>{currentReservation.dateTo}</b>
          <b className={styles.b2}>{currentReservation.cost}</b>
          <b className={styles.krakwBieanowska11}>{locationIdToName[currentReservation.locationId]}</b>
        </div>
      )}

      
      {reservations.length > 1 && (
        <div>
          <button onClick={() => navigateReservation("prev")}>Previous</button>
          <button onClick={() => navigateReservation("next")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Profile;*/

/*import { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = ({myUsername}) => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  //const username = router.query.myUsername;
  const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState(null);


  const locationIdToName = {
    "1": "Kraków",
    "2": "Gdynia",
    "3": "Olsztyn",
    "4": "Poznań",
    "5": "Lublin",
  };

  const fetchCarInfo = async (carId) => {
    try {
      const response = await fetch(`http://localhost:8080/offer/${carId}`);
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);



  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };

  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>Your three last reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      

      {reservations.length > 0 && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location: </b>
          <b className={styles.siguan}>{carInfo.carModel}</b>
          <b className={styles.b}>{currentReservation.dateFrom}</b>
          <b className={styles.b1}>{currentReservation.dateTo}</b>
          <b className={styles.b2}>{currentReservation.cost}</b>
          <b className={styles.krakwBieanowska11}>{locationIdToName[currentReservation.locationId]}</b>
        </div>
      )}

      {currentReservation.current && (
          <button className={styles.canccelReservation}>
            <div className={styles.buttonmain}>
               <img className={styles.icons} alt="" src="/icons.svg" />
               <b className={styles.label}>CANCEL</b>
            </div>
          </button>
    )}
      
      {reservations.length > 1 && (
        <div>
          <button onClick={() => navigateReservation("prev")}>Previous</button>
          <button onClick={() => navigateReservation("next")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Profile;*/



//DZIALAA
/*import { useState, useEffect } from "react";
import { Input, Alert } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = () => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const username = router.query.myUsername;
  //const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState(null);
  const [cancelStatus, setCancelStatus] = useState(null);


  const locationIdToName = {
    "1": "Kraków",
    "2": "Gdynia",
    "3": "Olsztyn",
    "4": "Poznań",
    "5": "Lublin",
  };

  const fetchCarInfo = async (carId) => {
    try {
      const response = await fetch(`http://localhost:8080/offer/${carId}`);
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);


  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };


  const handleCancelReservation = async () => {
    try {
      const rentalId = currentReservation.rentalId;
      const response = await fetch(`http://localhost:8080/rental/delete/${rentalId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        const updatedReservations = [...reservations];
        updatedReservations.splice(currentReservationIndex, 1);
        setReservations(updatedReservations);
  
        if (updatedReservations.length > 0) {
          setCurrentReservationIndex(0);
          const carId = updatedReservations[0].carId;
          fetchCarInfo(carId);
        } else {
          setCarInfo(null);
        }
        setCancelStatus("success");
      } else {
        // Obsługa błędów HTTP
        const errorText = await response.text();
        console.error("Error canceling reservation:", response.status, errorText);
        setCancelStatus("error");
      }
    } catch (error) {
      // Obsługa innych błędów
      console.error("Error canceling reservation:", error.message);
      setCancelStatus("error");
    }
  };


  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>All your reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      

      {reservations.length > 0 && currentReservation && (
        <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location: </b>
          <b className={styles.siguan}>{currentReservation.dateFrom}</b>
          <b className={styles.b}>{currentReservation.dateFrom}</b>
          <b className={styles.b1}>{currentReservation.dateTo}</b>
          <b className={styles.b2}>{currentReservation.cost}</b>
          <b className={styles.krakwBieanowska11}>{locationIdToName[currentReservation.locationId]}</b>
        </div>
      )}

      {reservations.length > 0 && currentReservation && currentReservation.current && (
          <button className={styles.canccelReservation} onClick={handleCancelReservation}>
            <div className={styles.buttonmain}>
               <img className={styles.icons} alt="" src="/icons.svg" />
               <b className={styles.label}>CANCEL</b>
            </div>
          </button>
    )}
      
      {reservations.length > 1 && (
           <div style={{ position: 'absolute', bottom: '500px', left: '55%', transform: 'translateX(-50%)', width: '80%' }}>
           <button onClick={() => navigateReservation("prev")}>Previous</button>
           <button onClick={() => navigateReservation("next")}>Next</button>
         </div>
      )}
      {cancelStatus === "success" && (
        <Alert variant="success">Reservation canceled successfully!</Alert>
      )}
      {cancelStatus === "error" && (
        <Alert variant="danger">Error canceling reservation.</Alert>
      )}
    </div>
  );
};

export default Profile;*/






//DZIALA DOBRZE - SA ZDJECIA
/*import { useState, useEffect } from "react";
import { Input, Alert } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = () => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const username = router.query.myUsername;
  //const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState([]);
  const [cancelStatus, setCancelStatus] = useState(null);


  const locationIdToName = {
    "1": "Kraków",
    "2": "Gdynia",
    "3": "Olsztyn",
    "4": "Poznań",
    "5": "Lublin",
  };

  const fetchCarInfo = async (carId) => {
    try {
      const response = await fetch(`http://localhost:8080/offer/${carId}`);
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);


  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };


  const handleCancelReservation = async () => {
    try {
      const rentalId = currentReservation.rentalId;
      const response = await fetch(`http://localhost:8080/rental/delete/${rentalId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        const updatedReservations = [...reservations];
        updatedReservations.splice(currentReservationIndex, 1);
        setReservations(updatedReservations);
  
        if (updatedReservations.length > 0) {
          setCurrentReservationIndex(0);
          const carId = updatedReservations[0].carId;
          fetchCarInfo(carId);
        } else {
          setCarInfo(null);
        }
        setCancelStatus("success");
      } else {
        // Obsługa błędów HTTP
        const errorText = await response.text();
        console.error("Error canceling reservation:", response.status, errorText);
        setCancelStatus("error");
      }
    } catch (error) {
      // Obsługa innych błędów
      console.error("Error canceling reservation:", error.message);
      setCancelStatus("error");
    }
  };


  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>All your reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
      />
      <button className={styles.changePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      

      {reservations.length > 0 && currentReservation && (
        <div>
          <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location: </b>
          <b className={styles.siguan}>{carInfo.carModel}</b>
          <b className={styles.b}>{currentReservation.dateFrom}</b>
          <b className={styles.b1}>{currentReservation.dateTo}</b>
          <b className={styles.b2}>{currentReservation.cost}</b>
          <b className={styles.krakwBieanowska11}>{locationIdToName[currentReservation.locationId]}</b>
        </div>

      {carInfo.frontPhoto && (
      <img
        className={styles.samochod}
        src={carInfo.frontPhoto} 
      />
    )}
  </div>
  )}

      {reservations.length > 0 && currentReservation && currentReservation.current && (
          <button className={styles.canccelReservation} onClick={handleCancelReservation}>
            <div className={styles.buttonmain}>
               <img className={styles.icons} alt="" src="/icons.svg" />
               <b className={styles.label}>CANCEL</b>
            </div>
          </button>
    )}
      
      {reservations.length > 1 && (
           <div style={{ position: 'absolute', bottom: '500px', left: '55%', transform: 'translateX(-50%)', width: '80%' }}>
           <button onClick={() => navigateReservation("prev")}>Previous</button>
           <button onClick={() => navigateReservation("next")}>Next</button>
         </div>
      )}
      {cancelStatus === "success" && (
        <Alert variant="success">Reservation canceled successfully!</Alert>
      )}
      {cancelStatus === "error" && (
        <Alert variant="danger">Error canceling reservation.</Alert>
      )}
    </div>
  );
};

export default Profile;*/

import { useState, useEffect } from "react";
import { Input, Alert } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Profile = () => {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const username = router.query.myUsername;
  //const [username, setUsername] = useState(myUsername);
  const [carInfo, setCarInfo] = useState([]);
  const [cancelStatus, setCancelStatus] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [changePasswordStatus, setChangePasswordStatus] = useState(null);


  const locationIdToName = {
    "1": "Kraków",
    "2": "Gdynia",
    "3": "Olsztyn",
    "4": "Poznań",
    "5": "Lublin",
  };

  const fetchCarInfo = async (carId) => {
    try {
      const response = await fetch(`http://localhost:8080/offer/${carId}`);
      const data = await response.json();
      setCarInfo(data);
    } catch (error) {
      console.error("Error fetching car info:", error);
    }
  };

  const updatePassword = async () => {
    try {
      const response = await fetch(`http://localhost:8080/update/user/${username}/${newPassword}`, {
        method: "GET",
      });

      if (response.ok) {
        // Obsługa sukcesu
        console.log("Password updated successfully");
        setChangePasswordStatus("success");
      } else {
        // Obsługa błędów HTTP
        const errorText = await response.text();
        console.error("Error updating password:", response.status, errorText);
        setChangePasswordStatus("error");
      }
    } catch (error) {
      // Obsługa innych błędów
      console.error("Error updating password:", error.message);
      setChangePasswordStatus("error");
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${username}/rentals`);
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [username]);

  useEffect(() => {
    // Przykład pobierania informacji o samochodzie dla pierwszej rezerwacji
    if (reservations.length > 0) {
      const carId = reservations[currentReservationIndex].carId;
      fetchCarInfo(carId);
    }
  }, [reservations, currentReservationIndex]);


  const navigateReservation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentReservationIndex + 1) % reservations.length
        : (currentReservationIndex - 1 + reservations.length) % reservations.length;
    setCurrentReservationIndex(newIndex);
    const carId = reservations[newIndex].carId;
    fetchCarInfo(carId);
  };


  const handleCancelReservation = async () => {
    try {
      const rentalId = currentReservation.rentalId;
      const response = await fetch(`http://localhost:8080/rental/delete/${rentalId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        const updatedReservations = [...reservations];
        updatedReservations.splice(currentReservationIndex, 1);
        setReservations(updatedReservations);
  
        if (updatedReservations.length > 0) {
          setCurrentReservationIndex(0);
          const carId = updatedReservations[0].carId;
          fetchCarInfo(carId);
        } else {
          setCarInfo(null);
        }
        setCancelStatus("success");
      } else {
        // Obsługa błędów HTTP
        const errorText = await response.text();
        console.error("Error canceling reservation:", response.status, errorText);
        setCancelStatus("error");
      }
    } catch (error) {
      // Obsługa innych błędów
      console.error("Error canceling reservation:", error.message);
      setCancelStatus("error");
    }
  };

  const handleChangePassword = () => {
    updatePassword();
    // Dodaj tutaj dodatkową logikę lub stan, jeśli chcesz obsługiwać sukces/porażkę zmiany hasła
  };


  const currentReservation = reservations[currentReservationIndex];

  return (
    <div className={styles.profile}>
      <b className={styles.yourThreeLast}>All your reservations:</b>
      <b className={styles.yourUsername}>Your username:</b>
      <div className={styles.myUsername}>{username}
      </div>
      <Input
        className={styles.inputdefault}
        name="pssrd"
        size="middle"
        placeholder="New password"
        bordered={true}
        allowClear={true}
        type="text"
        style={{ width: "346px" }}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className={styles.changePassword} onClick={handleChangePassword}>
        <div className={styles.buttonmain}>
          <img className={styles.icons} alt="" src="/icons3.svg" />
          <b className={styles.label}>CHANGE</b>
        </div>
      </button>
      {changePasswordStatus && (
        <div style={{ position: 'absolute', top: '250px', left: '85%', transform: 'translateX(-50%)', width: '80%' }}>
          {changePasswordStatus === "success" ? "Password changed successfully!" : "Failed to change password."}
        </div>
      )}
      <b className={styles.yourNewPassword}>Your new password:</b>
      <b className={styles.changePassword1}>Change password:</b>
      <div className={styles.profileChild} />
      

      {reservations.length > 0 && currentReservation && (
        <div>
          <div>
          <b className={styles.pickUpDate}>Pick up date:</b>
          <b className={styles.model}>Model:</b>
          <b className={styles.returnDate}>Return date:</b>
          <b className={styles.priceZ}>Price (zł):</b>
          <b className={styles.location}>Location: </b>
          <b className={styles.siguan}>{carInfo.carModel}</b>
          <b className={styles.b}>{currentReservation.dateFrom}</b>
          <b className={styles.b1}>{currentReservation.dateTo}</b>
          <b className={styles.b2}>{currentReservation.cost}</b>
          <b className={styles.krakwBieanowska11}>{locationIdToName[currentReservation.locationId]}</b>
        </div>

      {carInfo.frontPhoto && (
      <img
        className={styles.samochod}
        src={carInfo.frontPhoto} 
      />
    )}
  </div>
  )}

{reservations.length > 0 && currentReservation && currentReservation.current && (
          <button className={styles.canccelReservation} onClick={handleCancelReservation}>
            <div className={styles.buttonmain}>
               <img className={styles.icons} alt="" src="/icons.svg" />
               <b className={styles.label}>CANCEL</b>
            </div>
          </button>
    )}
      
      {reservations.length > 1 && (
           <div style={{ position: 'absolute', bottom: '500px', left: '55%', transform: 'translateX(-50%)', width: '80%' }}>
           <button onClick={() => navigateReservation("prev")}>Previous</button>
           <button onClick={() => navigateReservation("next")}>Next</button>
         </div>
      )}
      {cancelStatus && (
        <div className={{ position: 'absolute', top: '600px', left: '85%', transform: 'translateX(-50%)', width: '80%' }}>
          {cancelStatus === "success" ? "Rental cancelled successfully!" : "Failed to cancel rental."}
        </div>
      )}
    </div>
  );
};

export default Profile;         