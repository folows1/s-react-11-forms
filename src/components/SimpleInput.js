import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && <p className="error-text">Invalid Email.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
