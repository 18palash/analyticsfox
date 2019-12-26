import React , {Component} from 'react';
import { Redirect , Link } from 'react-router-dom';


export default class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {  
            toHome: false,
            username : "",
            password : "",
            usernameComp: "",
            passwordComp: ""            
        }
    }

    componentDidMount() {
        this.userData = JSON.parse(sessionStorage.getItem('user'));
        if (sessionStorage.getItem('user')) {
            this.setState({
                usernameComp: this.userData.username,
                passwordComp: this.userData.password
            }) 
            
            
        }
    }
    validate = () => {
        let usernameError = "";
        let passwordError = "";
        
        if (!this.state.username) {
          usernameError = "name cannot be blank";
        }
        if (!this.state.password) {
            passwordError = "name cannot be blank";
          }  
        if (usernameError || passwordError) {
          this.setState({ usernameError, passwordError });
          return false;
        }
    
        return true;
      };
    
    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
    }
   
    handlelogin = (event) => {
        if (this.state.username == this.state.usernameComp && this.state.password == this.state.passwordComp){
            this.setState({
                toHome: true
            }) 
        }
        else{
            alert("enter correct login details")
        }
            event.preventDefault();
    }
    




    render(){
        if (this.state.toHome === true) {
            alert("Login successful")
            return <Redirect to='/home' />
        }
        return(
            <div className="container">
                <h1>Login Page</h1>
                <form onSubmit = {this.handlelogin} >          

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="username"
                        value= {this.state.username} onChange={this.handlechangeall} />
                        
                        <div style={{ fontSize: 12, 
                            color: "red" }}>
                            {this.state.usernameError}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" 
                        value= {this.state.password} onChange={this.handlechangeall} />
                        
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit"  className="btn btn-primary btn-lg" value="Login" name="Login">Login</button>
                        <Link to="/register"><p>Not a User ? Register here</p></Link> 
                    </div>
                </form>  
                
                    
            </div>
        )

    }
    
}

