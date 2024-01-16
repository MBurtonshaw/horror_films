import { React, useState } from 'react';

export default function Register() {
    let [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function registerUser(e) {
        e.preventDefault();
    }

    return(
        <div id='Register' className='container my-5 py-5'>
            <form action='/register' method='POST' onSubmit={registerUser}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input type='email' id='email' name='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor='name'>Password</label>
                    <input type='password' id='password' name='password'  value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
                </div>
                <button type='submit'>Register</button>
            </form>
            <a href='/login'>Login</a>
        </div>
    );
}