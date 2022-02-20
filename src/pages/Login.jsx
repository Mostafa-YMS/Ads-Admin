import { useRef } from "react";
import { signIn } from "../firebase";
import { useNavigate } from "react-router-dom";
import PhoneLogin from "../components/PhoneLogin";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signIn(emailRef.current.value, passwordRef.current.value);
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
          Doesn't have account ?
          <a
            className="btn btn-link"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register
          </a>
        </p>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
      <PhoneLogin />
    </>
  );
};

export default Login;
