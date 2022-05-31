import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router';
import '../CSS/payment.css' ;

function CartPay () {
    const getdata =  useLocation()
    const [collectProduct , setcollectProduct ] = useState([]);
    const [calcPrice , setcalcPrice] = useState(0)
    const {data} = getdata.state
    console.log(data)
    useEffect(() => {
        setcollectProduct(data || false)
    } , [])
   
    
    function calcProduct (amount , price ) {
        if (price) {

            const sum =  Number(amount) * Number(price)
            if (amount == 0) {
                
                setcalcPrice((pervent) => pervent +  Number(price))
            }
            setcalcPrice((pervent) => pervent + sum)
        }
    }
    
    return (
        <div className='paymentPage'>
            <div className='container'> 

                <div className='allContent'>
                    <div className='content'>
                        <div className='subtitle'>
                            <h2>My cart</h2>
                        </div>
                         {collectProduct[0] ? collectProduct.map((data) => {
                    return (
                            <div className='cart' key={data.id}>
                                <img src={data.img} alt='img' ></img>
                                <div className='info'>
                                    <p>{data.name}</p>
                                    <strong>$ {data.price}</strong>
                                </div>
                                <input type='number' defaultValue='0' onClick={(e) => calcProduct(e.target.value , data.price ) } name='number' ></input>
                            </div>

                            )
                        }) : <div></div>}
            {
                collectProduct.length === 0 ? ( <div>
                <h3>cart is Empty</h3>
            </div>) : <div></div>
            }
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
                            <p>Total  : $  <strong >{calcPrice}</strong></p>
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


export default CartPay ;