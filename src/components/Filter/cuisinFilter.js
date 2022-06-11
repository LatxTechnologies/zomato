import React, { Component } from "react";
import axios from "axios";

const url = "https://nav-intern-zomoto-api.herokuapp.com/filter";

class CuisineFilter extends Component {
    
    filterCuisine = (event) =>{
        let cuisineId = event.target.value;
        let mealId = this.props.mealId;
        let cuisineUrl = "";
        if(cuisineId === "")
        {
            cuisineUrl = `${url}/${mealId}`;
        }
        else
        {
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`;
        }
        console.log(cuisineUrl)
        axios.get(cuisineUrl)
        .then((res)=>{
            console.log("res => ", res)
            this.props.restPerCuisine(res.data)
        })
    }
    render()
    {
        return(
            <>
                <p className ="FilterTitle">Cuisine Filter</p>
                <div className="Filters" onChange={this.filterCuisine}>
                    <label><input type="radio" value="" name="cuisine" /> All</label> <br />
                    <label><input type="radio" value="1" name="cuisine" /> North Indian</label> <br />
                    <label><input type="radio" value="2" name="cuisine" /> South Indian</label> <br />
                    <label><input type="radio" value="3" name="cuisine" /> Chinese</label> <br />
                    <label><input type="radio" value="4" name="cuisine" /> Fast Food</label> <br />
                    <label><input type="radio" value="5" name="cuisine" /> Street Food</label> <br />
                </div>
            </>
        )
    }
}

export default CuisineFilter;