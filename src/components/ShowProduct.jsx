import React, { useEffect, useState } from "react"
import '../CSS/showProduct.css'
import { useLocation } from "react-router";
import axios from "axios";
     
function ShowProduct () {
    const [data , setData] = useState({data : [] , isReady : false})
    const idOfProduct = useLocation()
    

    const searchData =  data.isReady ? data.data.find((item) => item.id === idOfProduct.state.id) : false
    useEffect(() => {
        // Get Data from api 
        // /api/data/product 
        axios.get('/api/data/product')
        .then((res) => setData({data : res.data , isReady : true}))

    } , [])

    
    return (
        <div className="container">
            <div className="moredetails">
                <div className="showoff">
                    <div className="images">
                        <img src={searchData.img} alt=""></img>
                    </div>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis cumque cum quo voluptatibus temporibus, magni eos dolore odio perspiciatis ipsa 
                            incidunt tempore maiores aliquam accusantium nihil. Sit unde minus totam!
                        </p>
                    </div>
                </div>
                <div className="details">
                    <div className="options">
                        <h1>{searchData.name}</h1>
                        <strong>$ {searchData.price}</strong>
                        <div className="qoantity" >
                            <label htmlFor="" > Qantity :</label>
                            <input defaultValue='0' type="number"></input>
                        </div>
                        <button className="addcart">Add to Cart</button>
                        <button className="buy">Buy Now</button>
                    </div>
                    <div className="textdetails">
                        <span>PRODUCT INFO</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iusto cum dolore similique ab placeat quas error? In repellat repudiandae blanditiis dolorum 
                            quidem explicabo, asperiores, soluta veniam numquam cumque consectetur? Culpa!
                        </p>
                    </div>
                </div>
            </div> 
       </div> 
    )
    
}

export default ShowProduct