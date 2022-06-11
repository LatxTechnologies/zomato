import React, { Component } from "react";

const url = "http://zomato-login-logout.herokuapp.com/api/auth/register";
class Register extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name : "",
            email : "",
            password : "",
            phone : ""
        }
    }

    handleChange = (event)=>{
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = () =>{
        fetch(url, {
            method : "POST",
            header : {
                "accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then(this.props.history.push("/"))
    }
    
    render()
    {
        return(
            <>
                <form>
                    <label>Enter Name : <input type="text" onChange={this.handleChange} name="name" /></label>
                    <label>Enter Email : <input type="text" onChange={this.handleChange} name="email" /></label>
                    <label>Enter Password : <input type="text" onChange={this.handleChange} name="password" /></label>
                    <label>Enter Phone : <input type="text" onChange={this.handleChange} name="phone" /></label>
                    <button onClick={this.handleSubmit}>Register</button>
                </form>
            </>
        )   
    }
}

export default Register;