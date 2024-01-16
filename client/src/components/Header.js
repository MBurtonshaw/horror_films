import { React } from 'react';

export default function Header() {
    function home() {
        return(
            <li className="nav-item header-nav">
                <a className="nav-link" href="/"> Home </a>
            </li>
        );
    }
    function titles() {
        return(
            <li className="nav-item header-nav">
                <a className="nav-link" href="/titles"> Titles </a>
            </li>
        );
    }
    function genres() {
        return(
            <li className="nav-item header-nav">
                <a className="nav-link" href="/genres"> Genres </a>
            </li>
        );
    }
    function decades() {
        return(
            <li className="nav-item header-nav">
                <a className="nav-link" href="/decades"> Decades </a>
            </li>
        );
    }
    function my_list() {
        return(
            <li className="nav-item header-nav">
                <a className="nav-link" href="/list"> My List </a>
            </li>
        );
    }
    function login() {
        return(
            <li className="nav-item header-nav">
                <a className="nav-link" href="/login"> Login </a>
            </li>
        );
    }
    //conditional statements will return data based on path
    if (window.innerWidth > 767) {
        if (window.location.pathname === '/') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {titles()}
                        {genres()}
                        {decades()}
                        {login()}
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/titles') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {genres()}
                        {decades()}
                        {login()}
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/genres') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {titles()}
                        {decades()}
                        {login()}
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/decades') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {titles()}
                        {genres()}
                        {login()}
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/list') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {titles()}
                        {genres()}
                        {decades()}
                        {login()}
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/login') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {titles()}
                        {genres()}
                        {decades()}
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/register') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {titles()}
                        {genres()}
                        {decades()}
                    </ul>
                </div>
            );
        } else {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        {home()}
                        {titles()}
                        {genres()}
                        {decades()}
                        {login()}
                    </ul>
                </div>
            );
        }
    } else {
        //////////////////////////////////////////MOBILE//////////////////////////////////////////////////////
        return(
            <div id='Header' className='container'>
                <div className="dropdown w-50 m-auto pt-3">
                    <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img id='menu_icon' className='w-25' alt='a menu icon, three horizontal bars' src='../../photos/menu_icon.png'></img>
                    </button>
                    <ul className="dropdown-menu text-center w-100 m-auto">
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/'>Home</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/titles'>Titles</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/genres'>Genres</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/decades'>Decades</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/login'>Login</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}