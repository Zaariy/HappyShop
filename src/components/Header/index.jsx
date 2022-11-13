import React, { useState } from 'react';
import './style/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faCartShopping,
    faMagnifyingGlass,
    faBars,
    faXmark,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import BasketPR from '../ProductsBasket/index';
import Search from '../Search/index';





function Header() {

    const [data, setdata] = useState({ statepaket: false, statemenu: false, track: 0 })
    const [searchValue, setSearchValue] = useState({ searchvalue: '' })

    function getDataFromSearchInput(value) {

        setSearchValue({ searchvalue: value })
    }

    return (
        <div className='container'>


            <header>
                <div className='logo'>
                    <span  >SHOP</span>
                    <p>Sell Buy</p>
                </div>
                <div className='menu'>
                    <ul>
                        <Link to={'/'}><li>Shop</li></Link>
                        <Link to={'/'}><li>About</li></Link>
                        <Link to={'/faq'}><li>FAQ</li></Link>
                        <Link to={'/contact'}><li>Contact</li></Link>

                    </ul>
                </div>
                <div className='tool'>
                    <div className='search'>
                        <form onSubmit={(e) => e.preventDefault()} >
                            <div className='searchcontent'>
                                <input type='text' name='search' onChange={(e) => getDataFromSearchInput(e.target.value)} placeholder='Search...' ></input>
                                <FontAwesomeIcon className='iconsearch' icon={faMagnifyingGlass} />
                            </div>
                        </form>
                    </div>
                    <div className='account' >
                        <div className='loginlink'><FontAwesomeIcon className='usericon' icon={faUser} />log In</div>
                    </div>
                    <div className='sale' data-count='0'>
                        <div><FontAwesomeIcon className="sale" onClick={() => setdata({ statepaket: !data.statepaket })} icon={faCartShopping} /></div>
                    </div>

                    <div className='menumobile'>
                        {/* This menu For Mobile Devices */}
                        <div className='iconmenu'>
                            <FontAwesomeIcon className='iconmenutow' onClick={() => setdata({ statemenu: !data.statemenu })} icon={faBars} />
                        </div>
                        <div className={data.statemenu ? "open  menucontent" : 'menucontent'}>
                            <div className={data.statemenu ? "account " : "account"}>
                                <div className='loginlink'><FontAwesomeIcon className='usericon' icon={faUser} />log In</div>
                            </div>
                            <div className='close'>
                                <FontAwesomeIcon className='closeicon' onClick={() => setdata({ statemenu: !data.statemenu })} icon={faXmark} />
                            </div>
                            <ul className='ulmobilemenu'>
                                <Link to={'/'}><li>Shop</li></Link>
                                <Link to={'/'}><li>About</li></Link>
                                <Link to={'/faq'}><li>FAQ</li></Link>
                                <Link to={'/contact'}><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='searchmobile'>
                    {/* This for Searching on Items  */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='searchmobilecontent'>
                            <input type='text' placeholder='Search...' onChange={(e) => getDataFromSearchInput(e.target.value)} ></input>
                            {/* <FontAwesomeIcon className='iconsearch' icon={faMagnifyingGlass} /> */}
                        </div>
                    </form>
                </div>
            </header >
            <div className={data.statepaket ? "packet openPacket" : "packet"}>
                <header>
                    <div className='content'>
                        <FontAwesomeIcon className='iconAngel' onClick={() => setdata({ statepaket: !data.statepaket })} icon={faAngleRight} />
                        <h1>Cart</h1>
                    </div>
                </header>
                <BasketPR />
            </div>
            {/* This for Reasult of Search */}
            {searchValue.searchvalue !== '' ? <Search ProductName={searchValue.searchvalue} /> : <div></div>}
        </div >


    )


}



export default Header;