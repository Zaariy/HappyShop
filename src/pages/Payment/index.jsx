import React  from 'react'
import { useLocation } from 'react-router';
import {
    getSourceImgs,
    calcPriceProduct
} from '../../utils/PublicFunctionsHealper';
import './style/main.css';

function CartPay() {
    const routeData = useLocation().state

    return (
        <div className='paymentPage'>
            <div className='container'>

                <div className='allContent'>
                    <div className='content'>
                        <div className='subtitle'>
                            <h2>My cart</h2>
                        </div>
                        { routeData.data.data.length ? routeData.data.data.map((data) => {
                            return (
                                <div className='cart' key={data.id}>
                                    <img src={getSourceImgs(data.img)} alt='img' ></img>
                                    <div className='info'>
                                        <p>{data.name}</p>
                                        <strong>$ {data.price}</strong>
                                    </div>
                                    <input type='number' defaultValue='0'  name='number' ></input>
                                </div>

                            )
                        }) : <div><h3>cart is Empty</h3></div>}

                    </div>

                    <div className='paymentInfo'>
                        <div className='subtitle'>
                            <h2>Order summary</h2>
                        </div>
                        <div className='infoShoping'>
                            <p>Shipping  FREE</p>
                            <p>MAROOC</p>
                        </div>
                        <div className='total' >
                            <p>Total  : $  <strong >{calcPriceProduct(routeData.data.data) }</strong></p>
                        </div>
                        <div className='pay'>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CartPay;