import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const lurl = "https://nav-intern-zomoto-api.herokuapp.com/location";
const rurl = "https://nav-intern-zomoto-api.herokuapp.com/restro?state_id=";

class Search extends Component{
    
    constructor(props)
    {
        super(props);
        console.log("constructor");
        this.state={
            location:"",
            restrodata : ""
        }
    }
    renderCity = (data) =>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item.state_id} >{item.state}</option>
                )
            })
        }
          
    }


    handleCity = (event) =>{
        let stateId = event.target.value;
        console.log(stateId);
        fetch(`${rurl}${stateId}`, {method : "GET"})
        .then((res)=> res.json())
        .then((data)=>{
                this.setState({
                    restrodata : data
                })
        })
    }

    renderRestro = (data) =>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.restaurant_id} key={item.restaurant_id} >{item.restaurant_name}</option>
                )
            })
        }
          
    }
    
    handleRest = (event) =>{
        // when we check this console we not getting any props here because we access this property in Parents only not in child so to do this we need withRoute 
        // console.log("Inside Search =>", this.props)
        let restId = event.target.value;
        console.log(restId)
        this.props.history.push(`/details?restId=${restId}`)
    }

    render(){
        console.log("Render", this.state.location);
        return(
            <section id="section2">
            <div class="overlay">
                <h1><i>Zomato</i></h1>
                <p>Discover the best food & drinks in Mumbai</p>
                <form>
                    <select id="options" onChange={this.handleCity}>
                        <option>Select City</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="options" onChange={this.handleRest}>
                        <option>Select Restro</option>
                        {this.renderRestro(this.state.restrodata)}
                    </select>
                    
                </form>
            </div> 
        </section>             
        )
    }


componentDidMount()
{
    console.log("ComponentDidMount");
    fetch(lurl, {method: "GET"})
    .then((res)=> res.json())
    .then((data)=>{
        this.setState(
            {
                location : data
            }
        )
    })
}
}



export default withRouter(Search);