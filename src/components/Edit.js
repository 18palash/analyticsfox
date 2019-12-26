import React, { Component } from 'react';
import { Redirect , Link } from 'react-router-dom';
export default class Register extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: ''
            
        }
    }

    onChangeName(event) {
        this.setState({ name: event.target.value })
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value })
    }
    onChangePhone(event) {
        this.setState({ phone: event.target.value })
    }
    onChangeUsername(event) {
        this.setState({ username: event.target.value })
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    validate = () => {
        let fullnameError = "";
        let emailError = "";
        let phoneError = "";
        let usernameError = "";
        let passwordError = "";
        
        
        if (!this.state.name) {
                fullnameError = "Full Name cannot be blank";
            }

        if (!this.state.email) {
                emailError = "Email cannot be blank";
            }

        if (!this.state.phone) {
                phoneError = "Phone cannot be blank";
            }
        
        if (!this.state.username) {
          usernameError = "Username cannot be blank";
        }
        
        if (!this.state.password) {
            passwordError = "Password cannot be blank";
          }
        
        if (fullnameError || emailError || phoneError || usernameError || passwordError) {
          this.setState({ fullnameError, emailError, phoneError, usernameError, passwordError });
          return false;
        }
    
        return true;
      };
    componentDidMount() {
        this.userData = JSON.parse(sessionStorage.getItem('user'));
        if (sessionStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone,
                username: this.userData.username,
                password: this.userData.password
            })  
        }
    }
         

    
    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(event) {
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                isValid : true
               
            })    
        }
        event.preventDefault()
        
    }
    
    

    render() {
        if (this.state.isValid === true) {
            alert("Details Updated")
            return <Redirect to='/home' />
            
        }
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" 
                        value={this.state.name} onChange={this.onChangeName} />

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.fullnameError}
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" 
                        value={this.state.email} onChange={this.onChangeEmail} />

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" className="form-control" 
                        value={this.state.phone} onChange={this.onChangePhone} />

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.phoneError}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Usename</label>
                        <input type="text" className="form-control" 
                        value={this.state.username} onChange={this.onChangeUsername} />
                        
                        <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.usernameError}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" 
                        value={this.state.password} onChange={this.onChangePassword} />

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
                
                
            </div>
        )
    }
}
