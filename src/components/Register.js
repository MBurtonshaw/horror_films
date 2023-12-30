import { React } from 'react';

export default function Register() {
    return(
        <div id='Register_Div'>
           <form>
                <div className='p-5 w-25 text-center m-auto'>
                    <h1 className='pt-5 pb-2'>Register</h1>
                    <div>
                        <label for='name' className='py-2 pt-5 px-1'>Name: </label>
                        <input type='text' name='name' className='mx-1'></input>
                    </div>
                    <div>
                        <label for='email' className='py-2 px-1'>Email: </label>
                        <input type='text' name='email' className='mx-1'></input>
                    </div>
                    <div>
                        <label for='password' className='py-2 px-1'>Password: </label>
                        <input type='text' name='password' className='mx-1'></input>
                    </div>
                    <button type='submit' className='m-2'>Register</button>
                </div>
           </form>
        </div>
    );
}