import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(value);
  const hasError = !isValueValid && isTouched;

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    hasError,
    changeValueHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
