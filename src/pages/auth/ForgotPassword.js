import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR MSG IN FORGOT PASSWORD", error);
      });
  };

  return (
    <div className="container col-md-6 offset-md-3 col-xl-4 offset-xl-4">
      {loading ? (
        <h4 className="text-danger">Loading</h4>
      ) : (
          <div className="form form--login">
            <h1 className="alpha">Lost password?</h1>
            <p>Ohk, don't panic. You can recover it here.</p>
            <div>
              <form onSubmit={handleSubmit} className="form-wrap">
                <input
                  className="inputbox email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email id"
                  autoFocus
                />
                <button disabled={!email} className="button">
                  Send me <i className="fa fa-rocket"></i>
                </button>
              </form>
            </div>
            <hr />
            <p>You remember your Password? Brilliant!</p>
            <Link to="/login">
              <p>
                <a className="scroll">&laquo; Login here</a>
              </p>
            </Link>
          </div>
      )}
    </div>
  );
};

export default ForgotPassword;
