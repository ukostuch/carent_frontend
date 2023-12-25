/*import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import styles from "./CaleOffer.module.css";

const CaleOffer = () => {
  const router = useRouter();

  const onSamochod2Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod3Click = useCallback(() => {
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

  const onSamochod5Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod12Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const onSamochod1Click = useCallback(() => {
    router.push("/Car");
  }, [router]);

  return (
    <div className={styles.caleOffer}>
      <div className={styles.gearType}>Gear type</div>
      <div className={styles.fuelType}>Fuel Type</div>
      <div className={styles.carType}>Car Type</div>
      <div className={styles.price}>Price</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select className={styles.selectdefaultFormselect} name="gear">
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select className={styles.selectdefaultFormselect1} name="fuel">
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select className={styles.selectdefaultFormselect2} name="car type">
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select className={styles.selectdefaultFormselect3} name="band">
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
      >
        <Select.Option value="Kraków">Kraków</Select.Option>
        <Select.Option value="Gdynia">Gdynia</Select.Option>
        <Select.Option value="Olsztyn">Olsztyn</Select.Option>
        <Select.Option value="Poznań">Poznań</Select.Option>
        <Select.Option value="Lublin">Lublin</Select.Option>
      </Select>
      <OfertyFrame />
    </div>
  );
};

export default CaleOffer;*/






























//calkiem dobre

/*
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
//import { Form, DatePicker, Select } from "antd";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";

const CaleOffer = () => {
  const router = useRouter();
  const [gear, setGear] = useState("");
  const [fuel, setFuel] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setBrandCar] = useState("");
  const [locationId, setLocationId] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [cars, setCars] = useState([]);

  const fetchFilteredData = async () => {
    const url = new URL("http://localhost:8080/offer/search");
    url.searchParams.append("gear", gear);
    url.searchParams.append("fuel", fuel);
    url.searchParams.append("type", type);
    url.searchParams.append("carBrand", carBrand)
    url.searchParams.append("locationId", locationId);
    url.searchParams.append("dateFrom", dateFrom ? dateFrom.format("YYYY-MM-DD") : "");
    url.searchParams.append("dateTo", dateTo ? dateTo.format("YYYY-MM-DD") : "");

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSamochodClick = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const handleGearChange = (value) => {
    setGear(value);
  };

  const handleFuelChange = (value) => {
    setFuel(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleBrandCarChange = (value) => {
    setBrandCar(value);
  };

  const handleLocationIdChange = (value) => {
    setLocationId(value);
  };

  const handleDateFromChange = (value) => {
    setDateFrom(value);
  };

  const handleDateToChange = (value) => {
    setDateTo(value);
  };

  const handleSearchClick = () => {
    fetchFilteredData();
  };

  useEffect(() => {
    // Initial data fetch (all cars)
    fetchFilteredData();
  }, []); // Run once on component mount

  return (
    <div className={styles.caleOffer}>
      <div className={styles.gear}>Gear type</div>
      <div className={styles.fuel}>Fuel Type</div>
      <div className={styles.type}>Car Type</div>
      <div className={styles.carBrand}>Car Brand</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select
        className={styles.selectdefaultFormselect}
        name="gear"
        onChange={(e) => handleGearChange(e.target.value)}
        value={gear}
      >
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect1}
        name="fuel"
        onChange={(e) => handleFuelChange(e.target.value)}
        value={fuel}
      >
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect2}
        name="car type"
        onChange={(e) => handleTypeChange(e.target.value)}
        value={type}
      >
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect3}
        name="carBrand"
        onChange={(e) => handleBrandCarChange(e.target.value)}
        value={carBrand}
      >
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
        onChange={handleDateFromChange}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
        onChange={handleDateToChange}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
        onChange={handleLocationIdChange}
        value={locationId}
      >
        <Select.Option value="Kraków">Kraków</Select.Option>
        <Select.Option value="Gdynia">Gdynia</Select.Option>
        <Select.Option value="Olsztyn">Olsztyn</Select.Option>
        <Select.Option value="Poznań">Poznań</Select.Option>
        <Select.Option value="Lublin">Lublin</Select.Option>
      </Select>

      <button className={styles.search} onClick={handleSearchClick}>
        Search
      </button>

      <OfertyFrame cars={cars}/>
    </div>
  );
};

export default CaleOffer;*/


//filtrowanie dzilal czesciowo
/*import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";

const CaleOffer = () => {
  const router = useRouter();
  const [gear, setGear] = useState("");
  const [fuel, setFuel] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setBrandCar] = useState("");
  const [locationId, setLocationId] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  //const [cars, setCars] = useState([]);


  const fetchFilteredData = async () => {
    const url = new URL("http://localhost:8080/offer/search");
    url.searchParams.append("gear", gear);
    url.searchParams.append("fuel", fuel);
    url.searchParams.append("type", type);
    url.searchParams.append("carBrand", carBrand)
    url.searchParams.append("locationId", locationId);
    url.searchParams.append("dateFrom", dateFrom ? dateFrom.format("YYYY-MM-DD") : "");
    url.searchParams.append("dateTo", dateTo ? dateTo.format("YYYY-MM-DD") : "");

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSamochodClick = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const handleGearChange = (value) => {
    setGear(value);
  };

  const handleFuelChange = (value) => {
    setFuel(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleBrandCarChange = (value) => {
    setBrandCar(value);
  };

  const handleLocationIdChange = (value) => {
    setLocationId(value);
  };

  const handleDateFromChange = (value) => {
    setDateFrom(value);
  };

  const handleDateToChange = (value) => {
    setDateTo(value);
  };

  const handleSearchClick = () => {
    fetchFilteredData();
  };

  useEffect(() => {
    // Initial data fetch (filtered cars based on current filters)
    fetchFilteredData();
  }, [gear, fuel, type, carBrand, locationId, dateFrom, dateTo]); // Add dependencies for filters

  return (
    <div className={styles.caleOffer}>
      <div className={styles.gear}>Gear type</div>
      <div className={styles.fuel}>Fuel Type</div>
      <div className={styles.type}>Car Type</div>
      <div className={styles.carBrand}>Car Brand</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select
        className={styles.selectdefaultFormselect}
        name="gear"
        onChange={(e) => handleGearChange(e.target.value)}
        value={gear}
      >
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect1}
        name="fuel"
        onChange={(e) => handleFuelChange(e.target.value)}
        value={fuel}
      >
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect2}
        name="type"
        onChange={(e) => handleTypeChange(e.target.value)}
        value={type}
      >
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect3}
        name="carBrand"
        onChange={(e) => handleBrandCarChange(e.target.value)}
        value={carBrand}
      >
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
        onChange={handleDateFromChange}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
        onChange={handleDateToChange}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
        onChange={handleLocationIdChange}
        value={locationId}
      >
        <Select.Option value="1">Kraków</Select.Option>
        <Select.Option value="2">Gdynia</Select.Option>
        <Select.Option value="3">Olsztyn</Select.Option>
        <Select.Option value="4">Poznań</Select.Option>
        <Select.Option value="5">Lublin</Select.Option>
      </Select>

      <button className={styles.search} onClick={handleSearchClick}>
        Search
      </button>

      <OfertyFrame filteredCars={filteredCars}/>
    </div>
  );
};

export default CaleOffer;*/



//sa na poczatku samochody ale nie dzialaja zadne filtry
/*import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";

const CaleOffer = () => {
  const router = useRouter();
  const [gear, setGear] = useState("");
  const [fuel, setFuel] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setBrandCar] = useState("");
  const [locationId, setLocationId] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  const fetchFilteredData = async () => {
    // Sprawdź, czy któryś z filtrów jest ustawiony
    if (gear || fuel || type || carBrand || locationId || dateFrom || dateTo) {
      const url = new URL("http://localhost:8080/offer/search");
      url.searchParams.append("gear", gear);
      url.searchParams.append("fuel", fuel);
      url.searchParams.append("type", type);
      url.searchParams.append("carBrand", carBrand)
      url.searchParams.append("locationId", locationId);
      url.searchParams.append("dateFrom", dateFrom);
      url.searchParams.append("dateTo", dateTo);

      try {
        const response = await fetch(url.toString());
        const data = await response.json();
        setFilteredCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const onSamochodClick = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const handleGearChange = (value) => {
    setGear(value);
  };

  const handleFuelChange = (value) => {
    setFuel(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleBrandCarChange = (value) => {
    setBrandCar(value);
  };

  const handleLocationIdChange = (value) => {
    setLocationId(value);
  };

  const handleDateFromChange = (value) => {
    setDateFrom(value);
  };

  const handleDateToChange = (value) => {
    setDateTo(value);
  };

  const handleSearchClick = () => {
    fetchFilteredData();
  };

  useEffect(() => {
    // Domyślne pobranie wszystkich samochodów przy pierwszym renderowaniu
    const fetchData = async () => {
      const url = new URL("http://localhost:8080/offer");
      try {
        const response = await fetch(url.toString());
        const data = await response.json();
        setFilteredCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.caleOffer}>
      <div className={styles.gear}>Gear type</div>
      <div className={styles.fuel}>Fuel Type</div>
      <div className={styles.type}>Car Type</div>
      <div className={styles.carBrand}>Car Brand</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select
        className={styles.selectdefaultFormselect}
        name="gear"
        onChange={(e) => handleGearChange(e.target.value)}
        value={gear}
      >
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect1}
        name="fuel"
        onChange={(e) => handleFuelChange(e.target.value)}
        value={fuel}
      >
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect2}
        name="type"
        onChange={(e) => handleTypeChange(e.target.value)}
        value={type}
      >
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect3}
        name="carBrand"
        onChange={(e) => handleBrandCarChange(e.target.value)}
        value={carBrand}
      >
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
        onChange={handleDateFromChange}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
        onChange={handleDateToChange}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
        onChange={handleLocationIdChange}
        value={locationId}
      >
        <Select.Option value="Kraków">Kraków</Select.Option>
        <Select.Option value="Gdynia">Gdynia</Select.Option>
        <Select.Option value="Olsztyn">Olsztyn</Select.Option>
        <Select.Option value="Poznań">Poznań</Select.Option>
        <Select.Option value="Lublin">Lublin</Select.Option>
      </Select>

      <button className={styles.search} onClick={handleSearchClick}>
        Search
      </button>

      <OfertyFrame filteredCars={filteredCars}/>
    </div>
  );
};

export default CaleOffer;*/

//nawet ok sa zdjecia na poczatku!!
/*import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";

const CaleOffer = () => {
  const router = useRouter();
  const [gear, setGear] = useState("");
  const [fuel, setFuel] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setBrandCar] = useState("");
  const [locationId, setLocationId] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);
  const [allCars, setAllCars] = useState([]); // Dodaj nowy stan dla wszystkich samochodów

  const fetchAllCars = async () => {
    const url = new URL("http://localhost:8080/offer");
    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setAllCars(data); // Ustaw wszystkie samochody
      setFilteredCars(data); // Na początku, wszystkie samochody są filtrowane
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFilteredData = async () => {
    const url = new URL("http://localhost:8080/offer/search");
    url.searchParams.append("gear", gear);
    url.searchParams.append("fuel", fuel);
    url.searchParams.append("type", type);
    url.searchParams.append("carBrand", carBrand)
    url.searchParams.append("locationId", locationId);
    url.searchParams.append("dateFrom", dateFrom ? dateFrom.format("YYYY-MM-DD") : "");
    url.searchParams.append("dateTo", dateTo ? dateTo.format("YYYY-MM-DD") : "");

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSamochodClick = useCallback(() => {
    router.push("/Car");
  }, [router]);

  const handleGearChange = (value) => {
    setGear(value);
  };

  const handleFuelChange = (value) => {
    setFuel(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleBrandCarChange = (value) => {
    setBrandCar(value);
  };

  const handleLocationIdChange = (value) => {
    setLocationId(value);
  };

  const handleDateFromChange = (value) => {
    setDateFrom(value);
  };

  const handleDateToChange = (value) => {
    setDateTo(value);
  };

  const handleSearchClick = () => {
    if (locationId || dateFrom || dateTo) {
      fetchFilteredData();
    } else {
      // Jeżeli żadne filtry lokalizacji, daty od i daty do nie są ustawione, pobierz wszystkie samochody
      fetchAllCars();
    }
  };

  useEffect(() => {
    // Domyślne pobranie wszystkich samochodów przy pierwszym renderowaniu
    fetchAllCars();
  }, []); // Efekt dla pobrania wszystkich samochodów przy pierwszym renderowaniu

  return (
    <div className={styles.caleOffer}>
      <div className={styles.gear}>Gear type</div>
      <div className={styles.fuel}>Fuel Type</div>
      <div className={styles.type}>Car Type</div>
      <div className={styles.carBrand}>Car Brand</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select
        className={styles.selectdefaultFormselect}
        name="gear"
        onChange={(e) => handleGearChange(e.target.value)}
        value={gear}
      >
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect1}
        name="fuel"
        onChange={(e) => handleFuelChange(e.target.value)}
        value={fuel}
      >
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect2}
        name="type"
        onChange={(e) => handleTypeChange(e.target.value)}
        value={type}
      >
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect3}
        name="carBrand"
        onChange={(e) => handleBrandCarChange(e.target.value)}
        value={carBrand}
      >
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
        onChange={handleDateFromChange}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
        onChange={handleDateToChange}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
        onChange={handleLocationIdChange}
        value={locationId}
      >
        <Select.Option value="1">Kraków</Select.Option>
        <Select.Option value="2">Gdynia</Select.Option>
        <Select.Option value="3">Olsztyn</Select.Option>
        <Select.Option value="4">Poznań</Select.Option>
        <Select.Option value="5">Lublin</Select.Option>
      </Select>

      <button className={styles.search} onClick={handleSearchClick}>
        Search
      </button>

      <OfertyFrame filteredCars={filteredCars}/>
    </div>
  );
};

export default CaleOffer;*/


//NAJLEPSZA-dzialaja:samalokalizacja, lokalizacja+data, na poczatku sa samochody, dzoala tez fuel i cartype(tylko po wybraniu trzeba nacisnac search)

/*import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";

const CaleOffer = () => {
  const router = useRouter();
  const [gear, setGear] = useState("");
  const [fuel, setFuel] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setBrandCar] = useState("");
  const [locationId, setLocationId] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);
  const [allCars, setAllCars] = useState([]); // Dodaj nowy stan dla wszystkich samochodów
  const[filteredFilters, setFilteredFilters] = useState({});

  const fetchAllCars = async () => {
    const url = new URL("http://localhost:8080/offer");
    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setAllCars(data); // Ustaw wszystkie samochody
      setFilteredCars(data); // Na początku, wszystkie samochody są filtrowane
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFilteredData = async (filters) => {
    const url = new URL("http://localhost:8080/offer/search");

    // Dodaj parametry filtrowania do URL
    Object.entries(filters).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  //const onSamochodClick = useCallback((carId) => {
   // router.push({
     // pathname: "/Car",
     // query: { carId },
    //});
  //}, [router]);

  const onSamochodClick = useCallback((carId) => {
    const { locationId, dateFrom, dateTo } = filteredFilters;
    const queryParams = new URLSearchParams({
      locationId,
      dateFrom,
      dateTo,
    });

    router.push({
      pathname: "/Car",
      query: { carId, ...queryParams.get("") && { queryParams: queryParams.toString() } },
    });
  }, [router, filteredFilters]);

  const handleGearChange = (value) => {
    setGear(value);
  };

  const handleFuelChange = (value) => {
    setFuel(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleBrandCarChange = (value) => {
    setBrandCar(value);
  };

  const handleLocationIdChange = (value) => {
    setLocationId(value);
  };

  const handleDateFromChange = (value) => {
    setDateFrom(value);
  };

  const handleDateToChange = (value) => {
    setDateTo(value);
  };

  const handleSearchClick = () => {
    const filters = {
      gear: gear || null,
      fuel: fuel || null,
      type: type || null,
      carBrand: carBrand || null,
      locationId: locationId || null,
      dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : null,
      dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : null,
    };

    // Usuń null i undefined wartości z obiektu filters
    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== null && v !== undefined)
    );

    // Jeżeli nie ma żadnych filtrów, pobierz wszystkie samochody
    if (Object.keys(filteredFilters).length === 0) {
      fetchAllCars();
    } else {
      // W przeciwnym razie pobierz dane z filtrowaniem
      fetchFilteredData(filteredFilters);
    }
  };

  useEffect(() => {
    // Domyślne pobranie wszystkich samochodów przy pierwszym renderowaniu
    fetchAllCars();
  }, []); // Efekt dla pobrania wszystkich samochodów przy pierwszym renderowaniu

  return (
    <div className={styles.caleOffer}>
      <div className={styles.gear}>Gear type</div>
      <div className={styles.fuel}>Fuel Type</div>
      <div className={styles.type}>Car Type</div>
      <div className={styles.carBrand}>Car Brand</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select
        className={styles.selectdefaultFormselect}
        name="gear"
        onChange={(e) => handleGearChange(e.target.value)}
        value={gear}
      >
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect1}
        name="fuel"
        onChange={(e) => handleFuelChange(e.target.value)}
        value={fuel}
      >
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect2}
        name="type"
        onChange={(e) => handleTypeChange(e.target.value)}
        value={type}
      >
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect3}
        name="carBrand"
        onChange={(e) => handleBrandCarChange(e.target.value)}
        value={carBrand}
      >
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
        onChange={handleDateFromChange}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
        onChange={handleDateToChange}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
        onChange={handleLocationIdChange}
        value={locationId}
      >
        <Select.Option value="1">Kraków</Select.Option>
        <Select.Option value="2">Gdynia</Select.Option>
        <Select.Option value="3">Olsztyn</Select.Option>
        <Select.Option value="4">Poznań</Select.Option>
        <Select.Option value="5">Lublin</Select.Option>
      </Select>

      <button className={styles.search} onClick={handleSearchClick}>
      </button>

      <OfertyFrame filteredCars={filteredCars}/>
    </div>
  );
};

export default CaleOffer;*/


import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";

const CaleOffer = () => {
  const router = useRouter();
  const [gear, setGear] = useState("");
  const [fuel, setFuel] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setBrandCar] = useState("");
  const [locationId, setLocationId] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState([]);

  const fetchAllCars = async () => {
    const url = new URL("http://localhost:8080/offer");
    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setAllCars(data);
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFilteredData = async (filters) => {
    const url = new URL("http://localhost:8080/offer/search");

    Object.entries(filters).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSamochodClick = useCallback(
    (carId) => {
      router.push({
        pathname: `/Car`,
        query: {
          carId,
          locationId: locationId,
          dateFrom: dateFrom,
          dateTo: dateTo,
        },
      });
    },
    [router, locationId, dateFrom, dateTo]
  );


  const handleGearChange = (value) => {
    setGear(value);
  };

  const handleFuelChange = (value) => {
    setFuel(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleBrandCarChange = (value) => {
    setBrandCar(value);
  };

  const handleLocationIdChange = (value) => {
    setLocationId(value);
  };

  const handleDateFromChange = (value) => {
    setDateFrom(value);
  };

  const handleDateToChange = (value) => {
    setDateTo(value);
  };

  const handleSearchClick = async() => {
    const filters = {
      gear: gear || null,
      fuel: fuel || null,
      type: type || null,
      carBrand: carBrand || null,
      locationId: locationId || null,
      dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : null,
      dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : null,
    };

    // Usuń null i undefined wartości z obiektu filters
    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== null && v !== undefined)
    );

    // Jeżeli nie ma żadnych filtrów, pobierz wszystkie samochody
    if (Object.keys(filteredFilters).length === 0) {
      fetchAllCars();
    } else {
      // W przeciwnym razie pobierz dane z filtrowaniem
      fetchFilteredData(filteredFilters);
    }

    // Zapisz wybrane filtry
    setSelectedCar(filteredFilters); 
    /*setSelectedCar({
      locationId,
      dateFrom,
      dateTo,
    });*/
   // setLocationId({locationId});
   // setDateFrom({dateFrom});
   // setDateTo({dateTo});
  };


  useEffect(() => {
    fetchAllCars();
  }, []);

  return (
    <div className={styles.caleOffer}>
      <div className={styles.gear}>Gear type</div>
      <div className={styles.fuel}>Fuel Type</div>
      <div className={styles.type}>Car Type</div>
      <div className={styles.carBrand}>Car Brand</div>
      <div className={styles.sortBy}>Sort by</div>
      <Form.Select
        className={styles.selectdefaultFormselect}
        name="gear"
        onChange={(e) => handleGearChange(e.target.value)}
        value={gear}
      >
        <option>Gear type</option>
        <option value="automatic">automatic</option>
        <option value="manual">manual</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect1}
        name="fuel"
        onChange={(e) => handleFuelChange(e.target.value)}
        value={fuel}
      >
        <option>Fuel type</option>
        <option value="hybrid">hybrid</option>
        <option value="electric">electric</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect2}
        name="type"
        onChange={(e) => handleTypeChange(e.target.value)}
        value={type}
      >
        <option>Car type</option>
        <option value="hatchback">hatchback</option>
        <option value="suv">suv</option>
        <option value="sedan">sedan</option>
        <option value="sport">sport</option>
        <option value="minivan">minivan</option>
        <option value="pickup">pickup</option>
      </Form.Select>
      <Form.Select
        className={styles.selectdefaultFormselect3}
        name="carBrand"
        onChange={(e) => handleBrandCarChange(e.target.value)}
        value={carBrand}
      >
        <option>Car brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Subaru">Subaru</option>
        <option value="Fiat">Fiat</option>
        <option value="Audi">Audi</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Tesla">Tesla</option>
        <option value="Renault">Renault</option>
        <option value="Ford">Ford</option>
        <option value="Mazda">Mazda</option>
        <option value="Kia">Kia</option>
        <option value="Dacia">Dacia</option>
      </Form.Select>
      <div className={styles.caleOfferChild} />
      <div className={styles.caleOfferItem} />
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpDate}>Pick-up date</div>
      <div className={styles.returnDate}>Return date</div>
      <button className={styles.search} />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-38@2x.png" />
      <DatePicker
        className={styles.pickUpDate1}
        name="Date_from"
        size="middle"
        placeholder="From"
        allowClear={false}
        bordered={true}
        onChange={handleDateFromChange}
      />
      <DatePicker
        className={styles.returnDate1}
        name="Date_to"
        size="middle"
        placeholder="To"
        allowClear={false}
        bordered={true}
        onChange={handleDateToChange}
      />
      <Select
        className={styles.selectInput}
        placeholder="Select"
        size="middle"
        style={{ width: "161px" }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
        onChange={handleLocationIdChange}
        value={locationId}
      >
        <Select.Option value="1">Kraków</Select.Option>
        <Select.Option value="2">Gdynia</Select.Option>
        <Select.Option value="3">Olsztyn</Select.Option>
        <Select.Option value="4">Poznań</Select.Option>
        <Select.Option value="5">Lublin</Select.Option>
      </Select>

      <button className={styles.search} onClick={handleSearchClick}>
      </button>

      <OfertyFrame 
        filteredCars={filteredCars}
        selectedCar={selectedCar}
      />
    </div>
  );
};

export default CaleOffer;