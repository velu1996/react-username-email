import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    hasError: fNameInputHasError,
    isValid: enteredFNameIsValid,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    hasError: lNameInputHasError,
    isValid: enteredLNameIsValid,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid:enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmailInput
  } = useInput((value)=>value.includes("@"));

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredEmail,enteredFName,enteredLName);
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const fNameInputClasses = fNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameInputHasError
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <div className={fNameInputClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameInputHasError && (
            <p className="error-text">First name cannot be blank</p>
          )}
        </div>

        <div className={lNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameInputHasError && (
            <p className="error-text">Last name cannot be blank</p>
          )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Enter a valid Email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
