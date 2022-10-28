import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../data.js';
import {
    checkIfItemInBasket,
    calcPriceProduct,
} from './utils/FunctionsHealper';

import {
    searchProduct,
    getSourceImgs
} from '../../utils/PublicFunctionsHealper';


function BasketPR() {
    const [dataAddCart, setdataAddCart] = useState({ data: [] })

    let routeData = useLocation()


    // function checkTrack() {
    //     /*
    //         This function it's track where from Product Come 
    //         for exmple it's come from main Component or SideBasket Component 
    //     */
    //     if (idItems.state && idItems.state.track !== 'main') {
    //         return true
    //     }
    //     return false
    // }

    function searchForItemToRemove(id, array) {
        /*
            This function its job it just find item by id 
            and romve it from basket sale
            */

        if (!checkIfItemInBasket(id, array)) {

            const deletResult = array.filter((item) => {
                return id !== item.id
            })
            setdataAddCart((prv) => {
                return {
                    ...prv,
                    data: [...deletResult]
                }
            })
        }
    }

    function setProctusOnCard() {
        /*
            This function does add Prodcuts to Basket Shop

            1 : it is check if Product in Basket already by using function  ""checkIfItemInBasket ""
            2 : if not in Basket Than it will add it in Basket Shop else it will Not add it ...

        */
        if (checkIfItemInBasket(routeData.state?.id, dataAddCart.data)) {

            setdataAddCart((prv) => {
                return {
                    ...prv,
                    data: [...prv.data
                        , searchProduct(routeData.state?.id, Product)]
                }
            })

        }
    }

    useEffect(() => {

        setProctusOnCard()

    }, [routeData.state?.id])

    return (
        <div className='content'>

            <div className='allProduct'>
                {
                    dataAddCart.data.length !== 0 ? dataAddCart.data.map((data) => {
                        return (
                            <div className='cartProduct' key={data.id}>
                                <div className='removeProduct' onClick={() => searchForItemToRemove(data.id, dataAddCart.data)} >
                                    <FontAwesomeIcon className='iconXmark' icon={faXmark} />
                                </div>
                                <div className='img'>
                                    <Link to='/showProduct' state={{ id: data.id }}><img src={getSourceImgs(data.img)} alt='' ></img></Link>
                                </div>
                                <div className='text'>
                                    <h2>{data.name}</h2>
                                    <span>{data.price}</span>
                                    <input type='number' defaultValue='0'></input>
                                </div>
                            </div>
                        )
                    }) : <div className='emptyBasket'>
                        <h1>Cart is Empty</h1>

                    </div>
                }
            </div>
            <div className='calcTotol'>
                <span>Totole is : $ {calcPriceProduct(dataAddCart.data)}  </span>
                <Link to='/payment' state={{ data: dataAddCart }} ><button>Check All</button></Link>
            </div>

        </div>
    )
}


export default BasketPR;