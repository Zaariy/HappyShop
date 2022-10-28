import React, { useEffect, useState } from "react"
import './style/infoProduct.css';
import { Product } from '../../data.js';
import { useLocation } from "react-router";
import {
    searchProduct,
    getSourceImgs
} from '../../utils/PublicFunctionsHealper';


/*
    InfoPR ==> Information About Product Page
*/

function InfoPR() {
    const [product, setProduct] = useState({ data: {}, ready: false });
    const routeInfoProduct = useLocation()

    useEffect(() => {
        setProduct((prv) => {
            return { data: searchProduct(routeInfoProduct.state?.id, Product), ready: true }
        })

        return () => {
            setProduct({ data: {}, ready: false })
        }
    }, [product.ready, routeInfoProduct.state?.id])

    return (
        <div className="container">
            <div className="moredetails">
                <div className="showoff">
                    <div className="images">
                        <img src={getSourceImgs(product.data?.img)} alt=""></img>
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
                        <h1>{product.data?.name}</h1>
                        <strong>$ {product.data?.price} </strong>
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

export default InfoPR;