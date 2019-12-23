import React from 'react';

const Login = () => { 
    return (
        <div className="Login">
            <h1>Login page</h1>
            <form >
                <label>User Name</label>
                <input type="text" data-test="username"  />
                <br/>
                <label>Password</label>
                <input type="password" data-test="password" />
                <br/>
                <input type="submit" value="Log In" data-test="submit" />
            </form>
        </div>
    );
}

export default Login;