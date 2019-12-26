import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    userData;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: ''
            
        }
    }

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
        event.preventDefault()
        
    }
    

    render() {
        return (
            <div className="container">
                <div className="container" >
                    <div className="form-group">
                        <h1>Name is : {this.state.name}</h1> 
                    </div>
                    <div className="form-group">
                        <h1>Email is : {this.state.email}</h1>
                    </div>
                    <div className="form-group">
                        <h1>Phone is : {this.state.phone} </h1>
                    </div>
                    <div className="form-group">
                        <h1>Username is : {this.state.username}</h1>
                    </div>
                    <div className="form-group">
                        <h1>Password is : {this.state.password} </h1>
                    </div>    
                          
                        
                        
                        
                </div>
                <div className="container">
                <Link to="/edit"><p>Edit Details</p></Link>
                <Link to="/"><p>Logout</p></Link>
                </div>
            </div>

        )
    }
}
