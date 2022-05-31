import axios from 'axios';
import React from 'react'
import '../CSS/contact.css'

function SubmitEmail (e) {

    let data  = {} 
    data['fname'] = e.target.childNodes[1].value
    data['lname'] = e.target.childNodes[3].value
    data['email'] = e.target.childNodes[5].value
    data['Phone'] = e.target.childNodes[7].value
    data['msg'] = e.target.childNodes[9].value

    const json = JSON.stringify(data)
    console.log(e)
    return axios.get(`/contact?fname=${data.fname}&lname=${data.lname}&email=${data.email}&phon=${data.Phone}&msg=${data.msg}`)
    .then((res) => console.log(res))
  

    
}

function Contact() {

    
    return (
        <div className='contact' >
            <div className='container'>
                <header>
                    <h1>Contact</h1>
                    <p>You're welcome to contact us with any inquiry</p>
                    <p>Tel : 123-456-789 | information@mysite.com</p>
                </header>
                <form   onSubmit={(e) => {
                    
                    e.preventDefault()
                    SubmitEmail(e)
                }}   >
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
    )
}

export default Contact ;