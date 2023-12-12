import React, { useState } from 'react';
import TextBox from '../../Components/TextBox';
import styles from './login.module.css';
import CustomButton from '../../Components/CustomButton';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { loginApi } from '../../Api/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email || !password) {
            toast.error("Missing or Invalid Credentials!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        else {
            loginApi(email, password).then((res) => {
                console.log('res', res);
                toast.success("Logged In Successfully!", {
                    position: toast.POSITION.TOP_CENTER,
                })
                navigate('/home');
            }).catch((error) => console.log(error));
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <div>
                    <div className="input-group">
                        <TextBox value={email} setter={setEmail} label={'Email Address'} type={'email'} required={true} />
                    </div>
                    <div className="input-group">
                        <TextBox value={password} setter={setPassword} label={'Password'} type={'password'} required={true} />
                    </div>
                    <CustomButton btnLabel={'Login'} onClick={handleSubmit} />
                    <ToastContainer />
                    <div className={styles.dontHaveAnAccountDiv} onClick={() => navigate('/signup')}>Don't Have An Account?</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
