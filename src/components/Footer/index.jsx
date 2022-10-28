import React from 'react';
import './style/main.css';

function Footer() {

    return (
        <footer>
            <div className='container'>
                <div className='contentFooter'>
                    <ul>
                        <li><a href='#' >Shipping And Returns</a></li>
                        <li><a href='#' >Store Policy</a></li>
                        <li><a href='#' >Payment Methods</a></li>
                    </ul>
                    <ul>
                        Contact
                        <li>Tel: 123-456-789</li>
                    </ul>
                    <ul>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Pinterst</a></li>
                    </ul>

                </div>
                <div className='subscribe'>
                    <p>Join our mailing list and never miss and update</p>
                    <label htmlFor='email' >Email</label>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input id='email' name='email' type='email'></input>
                        <button>Subscribe Now</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;