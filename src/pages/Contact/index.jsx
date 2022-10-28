import React from 'react';
import './style/main.css';


function Contact() {

    return (
        <React.Fragment>
            <div className='contact' >
                <div className='container'>
                    <header>
                        <h1>Contact</h1>
                        <p>You're welcome to contact us with any inquiry</p>
                        <p>Tel : 123-456-789 | information@mysite.com</p>
                    </header>
                    <form onSubmit={(event) => event.preventDefault()}>
                        <label htmlFor='fname'>Full Name :</label>
                        <input id='fname' type='text' name='fname' ></input>
                        <label htmlFor='lname'>Last Name : </label>
                        <input id='lname' type='text' name='lname' ></input>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' name='email' ></input>
                        <label htmlFor='number'>Phone Number :</label>
                        <input id='number' type='number' name='number' ></input>
                        <label htmlFor='message'>Message :</label>
                        <input id='message' type='text' name='message' ></input>
                        <div className='subData'>
                            <button >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;