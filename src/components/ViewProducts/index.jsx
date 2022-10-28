import React from "react";
import { Link } from "react-router-dom";
import './style/main.css';
import { getSourceImgs } from '../../utils/PublicFunctionsHealper';
import { Product } from '../../data.js';


/*
    VeiwPT  ==> Veiw Products 

*/

function ViewPT() {

    return (
        <div>

            <div className="container">
                <main>
                    {
                        true ? Product.map((data) => {
                            return (
                                <div className="cardproduct" data-state={data.state} key={data.id}>
                                    <Link to='/showProduct' state={{ id: data.id, track: 'main' }} ><img src={getSourceImgs(data.img)} alt="img"></img></Link>
                                    <p>{data.name}</p>
                                    <strong>{data.price}</strong>
                                    <Link to='/' state={{ id: data.id }}><button >Add to Cart</button></Link>
                                </div>
                            )

                        }) : null

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

export default ViewPT;

