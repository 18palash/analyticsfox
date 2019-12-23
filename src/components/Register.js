import React from 'react';

const Register = () => {
    return(
        <div className="Register">
            <h1>Register Page</h1>
            <form >
                <label>Full Name</label>
                <input type="text" data-test="Full Name"  />
                <br/>
                <label>Email</label>
                <input type="text" data-test="Email"  />
                <br/>
                <label>Contact Number</label>
                <input type="text" data-test="Contact Number"  />
                <br/>
                <label>Username</label>
                <input type="text" data-test="username"  />
                <br/>
                <label>Password</label>
                <input type="password" data-test="password" />
                <br/>
                <input type="submit" value="Register" data-test="submit" />
            </form>
        </div>
    )
}

export default Register;