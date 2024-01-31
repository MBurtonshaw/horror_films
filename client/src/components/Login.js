import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

/**************************************************************************************
    STATE AND ASYNC FUNCTIONS
***************************************************************************************/
    let [ data, setData ] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function loginUser( e ) {
        e.preventDefault();
        props.context.actions.signIn( data.email, data.password );
        navigate( -1 );
    }

    function content_filler() {
        return(
            <div>
                <h1 className='pb-5'>Login</h1>
                <form action='/login' method='POST' onSubmit={ loginUser }>
                    <div className='m-auto'>
                        <div className='p-2'>
                            <label htmlFor='email' className='w-100'>Email</label>
                            <input type='email' id='email' name='email' value={ data.email } onChange={( e ) => setData( {...data, email: e.target.value} )}></input>
                        </div>
                        <div className='p-2'>
                            <label htmlFor='password' className='w-100'>Password</label>
                            <input type='password' id='password' name='password' value={ data.password } onChange={( e ) => setData( {...data, password: e.target.value} )}></input>
                        </div>
                        <button type='submit' onSubmit={ loginUser }>Login</button>
                    </div>
                </form>
                
            </div>
        );
    }

/**************************************************************************************
    RENDER
***************************************************************************************/
    if ( window.innerWidth < 768 ) {
        return(
            <div id='Login' className='container my-5 py-5 w-100 m-auto background_box_mini'>
                <div className='animate'>
                { content_filler() }
                <div className='py-3 my-5'>
                    <p>Don't have an account yet?</p><a href={ '/register' }>Register</a>
                </div>
                </div>
            </div>
        );
    } 
        return(
            <div id='Login' className='container my-5 py-5 background_box w-50 m-auto'>
                <div className='animate'>
                { content_filler() }
                </div>
                <div className='py-3 my-5'>
                    <p>Don't have an account yet?</p><a href={ '/register' }>Register</a>
                </div>
            </div>
        );
    
}