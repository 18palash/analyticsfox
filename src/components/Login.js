import React , {Component} from 'react';



class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {  
            username : "",
            password : "",
            usernameError: "",
            passwordError: ""            
        }
    }

    validate = () => {
        let usernameError = "";
        let passwordError = "";
        // let passwordError = "";
    
        if (!this.state.username) {
          usernameError = "name cannot be blank";
        }
        
        if (!this.state.password) {
            passwordError = "name cannot be blank";
          }
          
        if (!this.state.username.includes("@")) {
          usernameError = "invalid email";
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
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            alert( JSON.stringify(this.state));
             
        }
            alert( JSON.stringify(this.state));
        
            event.preventDefault();
    }
    
    render(){
        return(
            <div className="Register">
                <h1>Register Page</h1>
                <form onSubmit = {this.handlelogin} >          

                    <label>Username</label>
                    <input type="text" name="username"
                     value= {this.state.username} onChange={this.handlechangeall} />
                    <br/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.usernameError}
                    </div>
                    <br/>

                    <label>Password</label>
                    <input type="password" name="password" 
                     value= {this.state.password} onChange={this.handlechangeall} />
                    <br/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                    <br/>
                    <input type="submit" value="Login" name="submit"/>
                </form>
                    <p>Not a User ? Register here</p>
            </div>
        )

    }
    
}

export default Login;