// BookingContext.js
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [carData, setCarData] = useState(null);
  const [userData, setUserData] = useState(null);
  //const [bookingData, setBookingData] = useState(null);

  return (
    <BookingContext.Provider value={{carData, userData}}>
      {children}
    </BookingContext.Provider>
  );
};

const useBooking = () => {
  const context = useContext(BookingContext);
  return context;
};

export { BookingProvider, useBooking };