import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./Rules.module.css";

const Rules = () => {
  const router = useRouter();

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

  return (
    <div className={styles.rules}>
      <div className={styles.rulesChild} />
      <b className={styles.ourLocations}>Our locations</b>
      <b className={styles.bookYourCar}>Book your car</b>
      <b className={styles.serviceRules}>Service rules</b>
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
      <button className={styles.serviceRules1} />
      <div className={styles.rulesItem} />
      <b className={styles.serviceRules2}>Service rules</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.reservationAndBookingContainer}>
          <span className={styles.reservationAndBookingContainer1}>
            <p className={styles.blankLine}>
              <b>
                <span className={styles.blankLine1}>&nbsp;</span>
              </b>
            </p>
            <p className={styles.blankLine}>
              <b>
                <span className={styles.blankLine1}>&nbsp;</span>
              </b>
            </p>
            <p className={styles.reservationAndBookingRules}>
              <span className={styles.reservationAndBookingRules1}>
                <b>1. Reservation and Booking Rules:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>Reservation can be made in advance.</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  Cancellation or modification must be done at least 2 cars
                  before the scheduled pickup time.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>2. Rental Duration and Mileage:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>{`Minimum rental duration is 1 day, and the maximum is 100 days. `}</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>3. Vehicle Pickup and Return:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>{`Vehicles can be picked up and returned to one of our rental offices. `}</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  You have to return to the same office from where you picked up
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>4. Rental Eligibility:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>Minimum age for renting a vehicle is 18 years.</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  A valid driver’s license and a major credit card are required.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>5. Privacy and Data Handling:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  We value your privacy. Customer data is stored and is not
                  shared with third parties.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>6. Insurance and Liability:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>Basic insurance included with rental.</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>7. Vehicle Condition and Maintenance</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  Vehicles are maintained to the highest standards and are
                  provided clean and in good condition. Renter must report any
                  damage or issues promptly to avoid liability.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>8. Fuel Policy:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>{`Vehicles must be returned with the same fuel level as at the tome of rental (typically full-to-full) `}</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>9. Prohibited Uses:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>{`Smoking, off road use, and transporting pets are prohibited. `}</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  Violation may result in additional cleaning or damage charges
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b> 10. Penalties and Fines:</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  Renter is responsible for all fines, penalties and violations
                  incurred during the rental period.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>11. Customer Support and Contacts</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>{`Phone: +48 4501 233 111 `}</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>Email: carent@gmail.com</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>12.Dispute Resolution</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  In the event of a dispute, we aim to resolve issues through
                  negotiation and mediation.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span> Legal action may be taken as a last resort.</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>13. Termination of Rental Agreement</b>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  We reserve the right to terminate the rental agreement it the
                  renter violates the terms and conditions.
                </span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.reservationAndBookingRules1}>
                <b>14. Terms and Conditions Acceptance:</b>
              </span>
            </p>
            <p className={styles.byMakingAReservationOrRen}>
              <span className={styles.reservationAndBookingRules1}>
                <span>
                  By making a reservation or rental, you agree to abide by these
                  terms and conditions.
                </span>
              </span>
            </p>
          </span>
        </div>
      </div>
      <div className={styles.rulesInner}>
        <div className={styles.groupItem} />
      </div>
      <img className={styles.image16Icon} alt="" src="/image-17@2x.png" />
    </div>
  );
};

export default Rules;
