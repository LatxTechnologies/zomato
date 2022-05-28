import React, { Component } from "react";




class MenuDisplay extends Component{

    orderId = [];
    addItem = (id) =>{
        console.log("order id", id);
        this.orderId.push(id);
        console.log("Added")
        this.props.finalOrder(this.orderId);
    }

    removeItem = (id) => {
        if(this.orderId.indexOf(id) > -1)
        {
            this.orderId.splice(this.orderId.indexOf(id), 1);
        }
        console.log("removed");
        this.props.finalOrder(this.orderId);
    }

    renderCart = (orders) =>{
        console.log(orders)
        return orders.map((item, index) =>{
            return(
                <b>{item},</b>
            )
        })
    }

    renderMenu = ({menudata}) => {
        console.log(menudata)
        if(menudata)
        {
            return menudata.map((item)=>{
                return(
                    <>
                      
                      <hr />
                        <div className="col-lg-4">
                                <img src={item.menu_image} alt="" width="400px" height="200px" />
                            </div>
                            <div className="col-lg-4">
                                <p><b>Name : </b>{item.menu_name}</p>
                                <p><b>Desc : </b>{item.description}</p>
                                <p><b>Menu Type : </b>{item.menu_type}</p>
                                <p><b>Price : </b>{item.menu_price}</p>
                            </div>
                            <div className="col-lg-4">
                                <button onClick={()=>{this.addItem(item.menu_id)}} style={{padding: "7px 20px", backgroundColor : "green", color:"white", border: "none", marginRight : "30px"}}>Add To Cart</button>
                                <button onClick={()=>{this.removeItem(item.menu_id)}} style={{padding: "7px 20px", backgroundColor : "red", color:"white", border: "none"}}>Remove Item</button>
                            </div>
                            <br /><br />
                           
                   
                    </>
                )
            })
        }
    }


    render()
    {
        return(
            <>
            <div className="container">

                <div className="row">
                    <h3>Item Id {this.renderCart(this.orderId)} Added</h3>
                    {this.renderMenu(this.props)}
                </div>
            </div>
          
            </>
        )
    }
}

export default MenuDisplay;