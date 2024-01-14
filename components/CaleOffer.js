import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CaleOffer.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import OfertyFrame from "./OfertyFrame";
import { Form } from "react-bootstrap";
import { DatePicker, Select } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

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

    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== null && v !== undefined)
    );

    if (Object.keys(filteredFilters).length === 0) {
      fetchAllCars();
    } else {
      fetchFilteredData(filteredFilters);
    }

    setSelectedCar(filteredFilters); 
    
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