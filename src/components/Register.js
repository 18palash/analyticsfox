import React , {Component} from 'react';

class Register extends Component {
    constructor(props){
        super(props);
       
        this.state = {  
            fullname: "",
            email: "",
            phone : "",
            username : "",
            password : ""
        }
    }

    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
    }
   
    handlesubmit = (event) => {
        alert(` my name is ${this.state.fullname}. 
                My email id is ${this.state.email}
                My mobile number is ${this.state.phone}.
                My password is ${this.state.password} `);
        
        //alert as JSON         
        alert( JSON.stringify(this.state));
        event.preventDefault();
    }
    
    render(){
        return(
            <div className="Register">
                <h1>Register Page</h1>
                <form onSubmit = {this.handlesubmit} >
                    <label>Full Name</label>
                    <input type="text"  name="fullname" 
                     value= {this.state.fullname} onChange={this.handlechangeall} />
                    <br/>

                    <label>Email</label>
                    <input type="email" name="email"
                     value= {this.state.email} onChange={this.handlechangeall} />
                    <br/>

                    <label>Contact Number</label>
                    <input type="number" name="phone" 
                     value= {this.state.phone} onChange={this.handlechangeall} />
                    <br/>

                    <label>Username</label>
                    <input type="text" name="username"
                     value= {this.state.username} onChange={this.handlechangeall} />
                    <br/>

                    <label>Password</label>
                    <input type="password" name="password" 
                     value= {this.state.password} onChange={this.handlechangeall} />
                    <br/>

                    <input type="submit" value="Register" name="submit"/>
                </form>
            </div>
        )

    }
    
}

export default Register;