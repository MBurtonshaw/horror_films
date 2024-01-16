import { React, useState } from 'react';

export default function Login() {

    let [data, setData] = useState({
        email: '',
        password: ''
    })

    function loginUser(e) {
        e.preventDefault();
    }

    return(
        <div id='Login' className='container my-5 py-5'>
            <form action='/login' method='POST' onSubmit={loginUser}>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input type='email' id='email' name='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor='name'>Password</label>
                    <input type='password' id='password' name='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
                </div>
                <button type='submit'>Login</button>
            </form>
            <a href='/register'>Register</a>
        </div>
    );
}