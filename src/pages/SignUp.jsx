import { useRef } from "react";
import { signUp } from "../firebase";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import PhoneLogin from "../components/PhoneLogin";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="card m-5">
        <div className="form-group m-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </div>
        <div className="form-group m-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <p className="mx-3">
          Have an account ?
          <a
            className="btn btn-link"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login
          </a>
        </p>
        <button className="btn btn-primary" onClick={handleSignUp}>
          Register
        </button>
      </div>
      <PhoneLogin />
    </>
  );
};

export default SignUp;
