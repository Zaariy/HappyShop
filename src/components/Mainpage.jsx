import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/MainPage.css';
import axios from "axios";




function MainPage (props){
  const [count , setCount ] = useState(0);
  const [countItems , setItems] = useState([]);
  const [Product , setProduct] = useState({data : [] , isReady : false});
  function countProduct (id) {
    if (!countItems.includes(id)) {
        setCount(count + 1)
        setItems(countItems.concat(id))
        
    }
  }
  

  
  useEffect(() => {
    if (props.pr) {
       axios.get(`/search?search=${props.pr}`)
      .then((res) => setProduct({data : res.data , isReady : true}))
    } else {
       axios.get('/api/data/product')
    .then((res) => setProduct({data : res.data , isReady : true}))
    }
    
  } , [props.pr])
  
  return (
    <div>
       
        <div className="container">
          <main>
            {
              Product.isReady ?  Product.data.map((data) => {
                return (
                  <div className="cardproduct" data-state={data.state} key={data.id}>
                    <Link to='/showProduct' state={ {id : data.id , track : 'main'}  } ><img src={data.img}  alt="img"></img></Link>
                    <p>{data.name}</p>
                    <strong>{data.price}</strong>
                    <Link to='/' state={{id : data.id , number : count  }}><button onClick={() => countProduct(data.id)}>Add to Cart</button></Link>
                  </div>
                )
              }) : false
             
            } 

          </main> 
        </div>
        <div id="about" className="about">
          <div className="container">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in deleniti explicabo molestias voluptas accusantium debitis, praesentium, quidem minus sint culpa quos, 
              optio necessitatibus ullam. Esse, dolor ratione? Ratione, dicta.
            </p>
          </div>
        </div>
    </div>
  )
}

export default MainPage;

