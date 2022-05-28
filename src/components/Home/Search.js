import React, { Component } from "react";
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
                    <option value={item.restaurant_name} key={item.restaurant_id} >{item.restaurant_name}</option>
                )
            })
        }
          
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
                    <select id="options">
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



export default Search;