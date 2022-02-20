import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState, useRef } from "react";

const PhoneLogin = () => {
  const phoneRef = useRef();
  const codeRef = useRef();
  const numberError = useRef();
  const [expand, setExpand] = useState(false);

  const generateRecapatche = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const requestSmsCode = () => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (re.test(phoneRef.current.value)) {
      generateRecapatche();
      const verifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneRef.current.value, verifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setExpand(true);
        })
        .catch((err) =>
          console.log(err)(
            (numberError.current.innerText =
              "check connection phone number use country code or reload and try again ")
          )
        );
    } else {
      numberError.current.innerText = "Enter proper phone number";
    }
  };

  const confirmCode = () => {
    if (codeRef.current.value.length === 6) {
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(codeRef.current.value)
        .then((result) => {
          // User signed in successfully.
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          numberError.current.innerText = "bad verification code";
          // ...
        });
    } else {
      numberError.current.innerText = "verification code should be 6 digits";
    }
  };

  return (
    <div className="card m-5">
      <p className="m-2">or login with phone number</p>
      <p className="text-danger mx-3" ref={numberError}></p>

      <div className="form-group m-3">
        <input
          type="text"
          className="form-control"
          placeholder="Phone number"
          ref={phoneRef}
          required
        />
      </div>
      {expand && (
        <div className="form-group m-3">
          <label>enter the received sms code</label>
          <input
            type="number"
            className="form-control"
            placeholder="code"
            ref={codeRef}
            required
          />
        </div>
      )}
      {expand ? (
        <button className="btn btn-primary" onClick={confirmCode}>
          Login
        </button>
      ) : (
        <button className="btn btn-primary" onClick={requestSmsCode}>
          Submit
        </button>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneLogin;
