import React from 'react'

function Register () {
  return (
    <>
    <div className="wrapper">
                <span className="icon-close"><i className="fa-solid fa-xmark"></i></span>
        <div class="form-box register">
            <h2>Registration</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-user"></i></span>
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div class="remember-forgot">
                <label><input type="checkbox" />agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="login-register">
                    <p>Already have an accont ? <a href="" class="login-link">Login</a></p>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default Register;