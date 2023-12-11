import React, { useState } from "react";
import TextBox from "../../Components/TextBox";
import styles from "./signup.module.css";
import CustomButton from "../../Components/CustomButton";
import { useNavigate } from "react-router";
import { signupApi } from "../../Api/api";
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !password) {
      toast.error("Missing or Invalid Credentials!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else {
      signupApi(name, email, password).then((res) => {
        console.log('res', res);
        toast.success("Student Registered Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate('/home');
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupBox}>
        <h2>Signup</h2>
        <div>
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
          <ToastContainer />
          <div
            className={styles.alreadyHaveAnAccountDiv}
            onClick={() => navigate("/")}
          >
            Already Have An Account?
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
