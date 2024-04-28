import React, { useContext } from 'react'
import '../styles/Login.css'
import { varF } from '../App';

function Login() {
    const { setClick, setClick1 } = useContext(varF);
    const close = () => {
        setClick(false);
    }
    const Clicked1 = () => {
        setClick(false);
        setClick1(true);
    }
    return (
        <div className="wrappe">
            <span className="icon-close" onClick={close}><i className="fa-solid fa-xmark"></i></span>
            <div className="form-box login">
                <h2>Login</h2>
                <form action="#"> 
                    <div className="input-box">
                        <span className="ico"><i className="fa-solid fa-envelope"></i></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="ico"><i className="fa-solid fa-lock"></i></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="">Forgot Password</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="login-register">
                        <p>Don't have an account ?
                            <a href="#" onClick={Clicked1} className="register-link"> Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;