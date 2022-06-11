import React, { Component } from "react";
import Header from "../../Header";

const url = "https://zomato-login-logout.herokuapp.com/api/auth/login";

class Login extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            email : "",
            password : "",
            message : ""
        }
    }

    handleChange = (event)=>{
        this.setState({[event.target.value] : event.target.value})
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
        .then((data) => {
            if(data.auth === false)
            {
                this.setState({message : data.token})
                this.props.history.push("/");
            }else{
                sessionStorage.setItem("ltk" , data.token)
                
            }
        })
    }
    
    render()
    {
        return(
            <>
                <div className="container">
                    <h1>Login Form</h1>
                    <h2 style={{color : "red"}}>{this.state.message}</h2>
                    <form>
                        <label>Enter Email : <input type="text" onChange={this.handleChange} /></label>
                        <label>Enter Password : <input type="text" onChange={this.handleChange} /></label>
                        <button onClick={this.handleSubmit}>Register</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;