import React from 'react' 
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Search (props) {
    // this job's component it is just 
    // search in api for Prouduct with using its ID   
    
    
    const [Product , setProduct] = useState({data : [] , isReady : false});
    useEffect(() => {
        if (props.ProductSearchName) {
           axios.get(`/search?search=${props.ProductSearchName}`)
          .then((res) => setProduct({data : res.data , isReady : true}))
        } else {
            setProduct({data : []})
        }
        
      } , [props.ProductSearchName])
    return (
        <div className='searchProduct'>
           { Product.data.length === 0 ? <div className='result'><h2>No Result ...</h2></div> : false}
            <div className="container">
                {  Product.data.length !== 0 ? <h1>Search Resulte : </h1> : false }
              <main>
                {
                    Product.isReady ?  Product.data.map((data) => {
                        return (
                            <div className="cardproduct" data-state={data.state} key={data.id}>
                        <Link to='/showProduct' state={ {id : data.id , track : 'main'}  } ><img src={data.img} onClick={() => setProduct({data : []})} alt="img"></img></Link>
                        <p>{data.name}</p>
                        <strong>{data.price}</strong>
                        
                      </div>
                    )
                  }) : false
                 
                } 
    
              </main> 
            </div>
          
        </div>
      )
}


export default  Search ;