import { React } from 'react';

export default function Login() {
    return(
        <div id='Login_Div'>
           <form>
                <div className='p-5 w-25 text-center m-auto'>
                    <h1 className='pt-5 pb-2'>Login</h1>
                    <div>
                        <label for='email' className='pt-5 pb-4 px-1'>Email: </label>
                        <input type='text' name='email' className='mx-1'></input>
                    </div>
                    <div>
                        <label for='password' className='py-1 px-1'>Password: </label>
                        <input type='text' name='password' className='mx-1'></input>
                    </div>
                    <button type='submit' className='m-2'>Login</button>
                </div>
           </form>
           <div>
                <p>Don't have an account?</p>
                <a href='/register'>Register</a>
           </div>
        </div>
    );
}