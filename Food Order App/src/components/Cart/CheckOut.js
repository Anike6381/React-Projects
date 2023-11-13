import React from "react";
import classes from "./CheckOut.module.css";
import useInput from "../../hooks/use-input";

const CheckOut = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueIsInvalid: nameInputIsInvalid,
    valueChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    valueIsInvalid: streetInputIsInvalid,
    valueChangeHandler: enteredStreetChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    valueIsInvalid: postalCodeInputIsInvalid,
    valueChangeHandler: enteredPostalCodeChangeHandler,
    inputBlurHandler: postalCodeInputBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput((value) => value.trim().length >= 5);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    valueIsInvalid: cityInputIsInvalid,
    valueChangeHandler: enteredCityChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid &&
    enteredStreetIsValid
  ) {
    formIsValid = true;
  }

  const nameInputClasses = `${classes.control} ${
    nameInputIsInvalid ? classes.invalid : ""
  }`;

  const streetInputClasses = `${classes.control} ${
    streetInputIsInvalid ? classes.invalid : ""
  }`;

  const postalInputClasses = `${classes.control} ${
    postalCodeInputIsInvalid ? classes.invalid : ""
  }`;

  const cityInputClasses = `${classes.control} ${
    cityInputIsInvalid ? classes.invalid : ""
  }`;

  const checkoutData = {
    name: enteredName,
    street: enteredStreet,
    postalCode: enteredPostalCode,
    city: enteredCity,
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm(checkoutData);

    resetNameInput();
    resetStreetInput();
    resetPostalCodeInput();
    resetCityInput();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name *</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p>Name can't be empty</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street *</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={enteredStreetChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetInputIsInvalid && <p>Please provide your address</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code *</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={enteredPostalCodeChangeHandler}
          onBlur={postalCodeInputBlurHandler}
        />
        {postalCodeInputIsInvalid && (
          <p>Postal Code should be of 5 characters</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City *</label>
        <input
          type="text"
          id="text"
          value={enteredCity}
          onChange={enteredCityChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityInputIsInvalid && <p>Please enter your City</p>}
      </div>
      <div className={classes.actions}>
        <p>* Required</p>
        <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
