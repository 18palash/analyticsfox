import React , {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
       
        this.state = {  
            username : "",
            password : ""
        }
    }

    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
    }
   
    handlelogin = (event) => {
        
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

                    <label>Password</label>
                    <input type="password" name="password" 
                     value= {this.state.password} onChange={this.handlechangeall} />
                    <br/>

                    <input type="submit" value="Login" name="submit"/>
                </form>
            </div>
        )

    }
    
}

export default Login;