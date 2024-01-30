import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

/**************************************************************************************
    STATE AND ASYNC FUNCTIONS
***************************************************************************************/
    let [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function logoutUser(e) {
        e.preventDefault();
        props.context.actions.signOut();
        setData({
            email: '',
            password: ''
        });
        navigate(-1);
    }

    function content_filler() {
        return(
            <div className='animate'>
                <h1 className='pb-5'>Logout</h1>
                <form action='/login' method='POST' onSubmit={logoutUser}>
                    <div className='m-auto'>
                        <h1>Are you sure?</h1>
                        <button type='' className='button-81 mt-4' onClick={logoutUser}>Logout</button>
                    </div>
                </form>
                
            </div>
        );
    }

/**************************************************************************************
    RENDER
***************************************************************************************/
    if (window.innerWidth < 992) {
        return(
            <div id='Logout' className='container my-5 py-5 w-100 m-auto'>
                {content_filler()}
                <div className='py-3 my-5 background_box'>
                    <a href={'/'}>Home</a>
                </div>
            </div>
        );
    } else {
        return(
            <div id='Logout' className='container my-5 py-5 background_box w-50 m-auto'>
                {content_filler()}
                <div className='py-3 my-5'>
                    <a href={'/'}>Home</a>
                </div>
            </div>
        );
    }
}