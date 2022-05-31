import React from 'react';
import '../CSS/footer.css';

function Footer () {

    return (
        <footer >
            <div className='container'>
                <div className='contentFooter'>
                    <ul>
                        <li><a herf='/' >Shipping And Returns</a></li>
                        <li><a herf='/' >Store Policy</a></li>
                        <li><a herf='/' >Payment Methods</a></li>
                    </ul>
                    <ul>
                        Contact
                        <li>Tel: 123-456-789</li>
                    </ul>
                    <ul>
                        <li><a  herf='#'>Facebook</a></li>
                        <li><a herf='/'>Instagram</a></li>
                        <li><a herf='/'>Pinterst</a></li>
                    </ul>
                    
                </div>
                <div className='subscribe'>
                    <p>Join our mailing list and never miss and update</p>
                    <label htmlFor='email' >Email</label>
                    <form >
                        <input id='email' name='email' type='email'></input>
                        <button>Subscribe Now</button>
                    </form>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer ;