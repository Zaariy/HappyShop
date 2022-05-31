import React, { useEffect , useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons'

function checkIfItemInBasket(id , array) {
    if (!id) {
        return
    }
    if (id === -1) {
        return
    }
    if (array.length === 0) {
        return true
    }
    let state = null;
    for (let i = 0 ; i < array.length ; i++) {
        if (id === array[i].id) {
            return false
        }else {
            state = true
        }
    }
    return state
}



function SideBasket () {
    const [dataAddCart , setdataAddCart] = useState([])
    const [data , setData] = useState({data : [] , isReady : false})

    let idItems = useLocation()
    
    // This line search for product with its id  
    const findItem =  data.isReady && idItems.state && idItems.state.id ? data.data.find((item) => item.id === idItems.state.id) : false
 
    function generateUniqeKey () {
        /*
            This function it's just generate unique key 
            for our Porduct
        */
        const unique_id = uuid()
        return unique_id.slice(0 , 10) 
    }

    function checkTrack () {
        /*
            This function it's track where from Product Come 
            for exmple it's come from main Component or SideBasket Component 
        */
        if (idItems.state && idItems.state.track !== 'main') {
            return true
        }
        return false
    }
    function searchForItemToRemove(id , array) {
        /*
            This function its job it just find item by id 
            and romve it from basket sale
        */
        
        if (id === -1) {
            return
        }
        if (array.length === 0) {
            return true
        }
    
        const a =  array.filter((item) => {
            return id !== item.id
        } )
    
        
        setdataAddCart(a)
        
    }
    
    function calcPriceProduct (array) {
        /*
            This Function it's just Calc price 
            of Product
        */
        if (array.length === 0) {
            return 0
    
        }   
    
        let totol = 0 ;
        array.map((data) => {
            return totol +=   Number.parseFloat(data.price)
        })

        return totol
    }
    useEffect (() => {
          axios.get('/api/data/product')
        .then((res) => setData({data : res.data , isReady : true}))
    } , [])

    useEffect(() => {
      

        if (checkIfItemInBasket(findItem.id , dataAddCart) && checkTrack() && findItem !== false){
            setdataAddCart(dataAddCart => [...dataAddCart , findItem])
            return
        }

    },[findItem])
    
    
    return (
        <div className='content'>
                
            <div className='allProduct'>
                {
                    findItem ? dataAddCart.map((data) => {
                        return (
                            <div className='cartProduct' key={generateUniqeKey()}>
                                <div className='removeProduct' onClick={() => searchForItemToRemove(data.id , dataAddCart)} >
                                    <FontAwesomeIcon className='iconXmark' icon={faXmark} />
                                </div>
                                <div className='img'>
                                    <Link to='/showProduct' state={{id : data.id}}><img src={data.img} alt='' ></img></Link>
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
                <span>Totole is : $ {calcPriceProduct(dataAddCart)}  </span>
                <Link to='/payment' state={{data : dataAddCart}} ><button>Check All</button></Link>
            </div>  

        </div>
    )
}


export default SideBasket;