import axios from "axios";
import React, { Component } from "react";
import ListingDisplay from "./ListingDisplay";
// import "./lising.css";
const restrourl = "https://nav-intern-zomoto-api.herokuapp.com/restro?mealtype_id=";

class Listing extends  Component{
    constructor(props){
        super(props);

        this.state={
            restaurantList : ""
        };

    }

    render()
        {
            console.log("data");
            console.log(this.state.restaurantList)
            return(
                <>  
                <div className="container">
                 <div class="row">
                    <div class="col-lg-3">
                        <h1>Filter</h1>
                    </div>
                    <div class="col-lg-9">
                    <ListingDisplay listData ={this.state.restaurantList}/>
                    </div>
                 </div>
                 </div>
                   
                </>
            );
        }      

    
        componentDidMount(){

            let mealid = this.props.match.params.mealId;
            console.log(mealid);
            axios.get(`${restrourl}${mealid}`)
            .then((res)=>{this.setState({restaurantList : res.data})})
        }
}

export default Listing;