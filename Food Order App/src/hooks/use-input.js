import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueIsInvalid = !valueIsValid && inputIsTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueIsInvalid: valueIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
