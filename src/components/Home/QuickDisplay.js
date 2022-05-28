import React from "react";
import { Link } from "react-router-dom";

function QuickDisplay(props)
{

    const listMeal = ({mealData}) => {
        if(mealData)
        {
            return mealData.map((item)=>{
                return (
                  
                         <div class="col-lg-3">
                           <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype}>
                        <div class="box">
                        <a href="listing.html"><img src={item.meal_image} alt="" /></a> 
                        <p><a href="listing.html">{item.mealtype}</a></p> 
                        </div>
                        </Link>
                    </div>
                   
                     
                )
            })
        }
    }

    return(
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay;