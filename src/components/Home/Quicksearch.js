import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";

const url = "https://nav-intern-zomoto-api.herokuapp.com/mealtype";
class QuickSearch extends Component{

    constructor()
    {
        super()
        this.state={
            mealType : ""
        }
    }
    render()
    {
        return(
            <>
                  <div id="section3">
            
            <div class="container">
                <h2>Quick Search</h2>
                <p>Discover Restaurant By Meal</p>
                <div class="row">
                    {/* <div class="col-lg-3">
                        <div class="box">
                        <a href="listing.html"><img src="img/foodImages/pexels-edward-eyer-1049626.jpg" alt="" /></a> 
                        <p><a href="listing.html">Food Category 1</a></p> 
                        </div>
                    </div>        */}
                    <QuickDisplay mealData = {this.state.mealType} />

                </div>
            </div>
        </div>
            </>
        )
    }

    componentDidMount(){
        fetch(url, {method :  "GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                mealType : data
            })
        })
    }

}
export default QuickSearch;