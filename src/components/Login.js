import React from 'react'
import '../styles/Login.css'

function Login() {
    return (

            <div className="wrapper">
                <span className="icon-close"><i className="fa-solid fa-xmark"></i></span>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><i className="fa-solid fa-lock"></i></span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                        <p>Don't have an accont ? <a href="" className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
       
    )
}

export default Login