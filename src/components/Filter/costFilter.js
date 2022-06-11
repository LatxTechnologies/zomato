import React, { Component } from "react";
import axios from "axios";

const url = "https://nav-intern-zomoto-api.herokuapp.com/filter";

class CostFilter extends Component {
    
    filterCost = (event) =>{
        let cost = (event.target.value).split("-");
        let lcost = cost[0];
        let hcost = cost[1];
        let mealId = this.props.mealId;
        let CostUrl = "";
        if(event.target.value === "")
        {
            CostUrl = `${url}/${mealId}`;
        }
        else 
        {
            CostUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
        }
        console.log(CostUrl)
        axios.get(CostUrl)
        .then((res)=>{
            console.log("res => ", res)
            this.props.restPerCost(res.data)
        })
    }
    render()
    {
        return(
            <>
                <p className ="FilterTitle">Cost Filter</p>
                <div className="Filters" onChange={this.filterCost}>
                    <label><input type="radio" value="" name="cost" /> All</label> <br />
                    <label><input type="radio" value="100-300" name="cost" /> 100 To 300</label> <br />
                    <label><input type="radio" value="301-500" name="cost" /> 301 To 500</label> <br />
                    <label><input type="radio" value="501-700" name="cost" /> 501 To 700</label> <br />
                    <label><input type="radio" value="701-900" name="cost" /> 701 To 900</label> <br />
                    <label><input type="radio" value="901-1500" name="cost" /> 901 To 1500</label> <br />
                </div>
            </>
        )
    }
}

export default CostFilter;