import React from 'react'
import { useEffect, useState } from 'react';
import { Product } from '../../data.js';
import {
    searchByNameOfProducts,
    getSourceImgs
} from '../../utils/PublicFunctionsHealper.js';
import { Link } from 'react-router-dom';



function Search(props) {

    const [searchData, setSearchData] = useState({ data: [], isReady: false });

    useEffect(() => {
        setSearchData((prv) => {
            return { data: [...searchByNameOfProducts(props.ProductName, Product)], isReady: true }
        })

    }, [props.ProductName, searchData.isReady])

    return (
        <div className='searchProduct'>
            {searchData.data.length === 0 ? <div className='result'><h2>No Result ...</h2></div> : false}
            <div className="container">
                {searchData.data.length !== 0 ? <h1>Search Resulte : </h1> : false}
                <main>
                    {
                        searchData.isReady ? searchData.data.map((data) => {
                            return (
                                <div className="cardproduct" data-state={data?.state} key={data?.id}>
                                    <Link to='/showProduct' state={{ id: data?.id }} ><img src={getSourceImgs(data?.img)} alt="img"></img></Link>
                                    <p>{data?.name}</p>
                                    <strong>{data?.price}</strong>

                                </div>
                            )
                        }) : false

                    }

                </main>
            </div>

        </div>
    )
}


export default Search;