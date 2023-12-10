import React, { useState } from "react";
import TextBox from "../../Components/TextBox";
import styles from "./signup.module.css";
import CustomButton from "../../Components/CustomButton";
import { useNavigate } from "react-router";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/home");
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupBox}>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <TextBox
              value={name}
              setter={setName}
              label={"Name"}
              type={"text"}
              required={true}
            />
          </div>
          <div className="input-group">
            <TextBox
              value={email}
              setter={setEmail}
              label={"Email Address"}
              type={"email"}
              required={true}
            />
          </div>
          <div className="input-group">
            <TextBox
              value={password}
              setter={setPassword}
              label={"Password"}
              type={"password"}
              required={true}
            />
          </div>
          <CustomButton btnLabel={"SignUp"} onClick={handleSubmit} />
          <div
            className={styles.alreadyHaveAnAccountDiv}
            onClick={() => navigate("/")}
          >
            Already Have An Account?
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
