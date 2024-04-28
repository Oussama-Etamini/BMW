import React, { useContext } from 'react'
import '../styles/Register.css'
import { varF } from '../App';

function Register() {
    const { setClick, setClick1 } = useContext(varF);
    const Clicked2 = () => {
        setClick(true);
        setClick1(false);
    }
    const close = () => {
        setClick1(false);
    }
    return (
        <>
            <div className="wrapper">
                <span className="icon-close" onClick={close}><i className="fa-solid fa-xmark"></i></span>
                <div class="form-box register">
                    <h2>Registration</h2>
                    <form action="#">
                        <div class="input-box">
                            <div class="ico"><i class="fa-solid fa-user"></i></div>
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div class="input-box">
                            <span class="ico"><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div class="input-box">
                            <span class="ico"><i class="fa-solid fa-lock"></i></span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div class="remember-forgot">
                            <label><input type="checkbox" />agree to the terms & conditions</label>
                        </div>
                        <button type="submit" class="btn">Register</button>
                        <div class="login-register">
                            <p>Already have an accont ? <a href="#" onClick={Clicked2} class="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;