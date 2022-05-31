import React, {  useEffect, useState } from 'react';
import '../CSS/Header.css' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser , faCartShopping , faMagnifyingGlass , faBars ,faXmark ,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router';
import SideBasket from './SideBasket';
import Search from './Search';
import MainPage from './Mainpage';


// const testImg = require('../sources/images/product/imgFive.jpg')



function HeaderPage () {
       
    const [data , setdata] = useState({statepaket : false , statemenu : false , track : 0  })
    const [searchValue , setSearchValue] = useState( {searchvalue : ''})
    const [counterProduct , setCounterProduct] = useState([])
    const counterItems = useLocation();

    function getDataFromSearchInput (value) {

     setSearchValue({searchvalue : value})
    }

    useEffect(() => {
        setCounterProduct(counterItems.state ? counterItems.state : {id : 0})

        return () => {
            setCounterProduct([])
        }
    } , [counterItems.state ? counterItems.state.id : ''])

    return (
    <div className='container'>
        
        
        <header>
            <div className='logo'>
            <span  >SHOP</span>
            <p>Happy Shop</p>
            </div>
            <div className='menu'>
            <ul>
                <a href='/'><li>Shop</li></a>
                <a href='/#about'><li>About</li></a>
                <a href='/faq'><li>FAQ</li></a>
                <a href='/contact'><li>Contact</li></a>
                
            </ul>
            </div>
            <div className='tool'>
                <div className='search'>
                    <form  onSubmit={(e) => e.preventDefault()} >
                        <div className='searchcontent'>
                            <input type='text' name='search' onChange={(e) => getDataFromSearchInput(e.target.value)} placeholder='Search...' ></input>
                            <FontAwesomeIcon className='iconsearch' icon={faMagnifyingGlass} />
                        </div>
                    </form>
                </div>
                <div className='account' >
                    <div className='loginlink'><FontAwesomeIcon className='usericon' icon={faUser} />log In</div>
                </div>
                <div className='sale' data-count={counterProduct.number}>
                <div><FontAwesomeIcon className="sale"  onClick={() => setdata({statepaket : !data.statepaket})}  icon={faCartShopping}/></div>
                </div>
                <div className='menumobile'>
                    <div className='iconmenu'>
                        <FontAwesomeIcon className='iconmenutow' onClick={() => setdata({statemenu : !data.statemenu})}  icon={faBars} />
                    </div>
                    <div className={data.statemenu ? "open  menucontent" : 'menucontent'}>
                        <div className={data.statemenu ? "account " : "account"}>
                            <div className='loginlink'><FontAwesomeIcon className='usericon' icon={faUser} />log In</div>
                        </div>
                        <div className='close'>
                            <FontAwesomeIcon className='closeicon' onClick={() => setdata({statemenu : !data.statemenu})} icon={faXmark} />
                        </div>
                        <ul className='ulmobilemenu'>
                            <a href='/'><li>Shop</li></a>
                            <a href='/#about'><li>About</li></a>
                            <a href='/faq'><li>FAQ</li></a>
                            <a href='/contact'><li>Contact</li></a>
                        </ul> 
                    </div>        
                </div>
               
            </div>
            <div className='searchmobile'>
                <form  onSubmit={(e) => e.preventDefault()}>
                    <div className='searchmobilecontent'>
                        <input type='text' placeholder='Search...' onChange={(e) => getDataFromSearchInput(e.target.value)} ></input>
                        {/* <FontAwesomeIcon className='iconsearch' icon={faMagnifyingGlass} /> */}
                    </div>
                </form>
                </div>
        </header>
        <div className={data.statepaket ? "packet openPacket" : "packet"}>
            <header>
                <div className='content'>
                    <FontAwesomeIcon className='iconAngel' onClick={() => setdata({statepaket : !data.statepaket})}  icon={faAngleRight} />
                    <h1>Cart</h1>
                </div>
            </header>
            <SideBasket  />
        </div>

       { searchValue.searchvalue !== '' ? <Search  ProductSearchName={searchValue.searchvalue}/> : <div></div> }
    </div>
  
    
    )
    
    
}



export default HeaderPage ;