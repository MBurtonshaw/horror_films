import { React } from 'react';

export default function Header() {
    //conditional statements will return data based on path
    if (window.innerWidth > 767) {
        if (window.location.pathname === '/') {
                return(
                    <div id='Header' className='container d-none d-md-block'>
                        <ul className="nav nav-fill justify-content-center">
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/titles"> Titles </a>
                            </li>
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/genres"> Genres </a>
                            </li>
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/decades"> Decades </a>
                            </li>
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/login"> Login </a>
                            </li>
                        </ul>
                    </div>
                );
        } else if (window.location.pathname === '/titles') {
                return(
                    <div id='Header' className='container d-none d-md-block'>
                        <ul className="nav nav-fill justify-content-center">
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/"> Home </a>
                            </li>
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/genres"> Genres </a>
                            </li>
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/decades"> Decades </a>
                            </li>
                            <li className="nav-item header-nav">
                                <a className="nav-link" href="/login"> Login </a>
                            </li>
                        </ul>
                    </div>
                );
        } else if (window.location.pathname === '/genres') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/"> Home </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/titles"> Titles </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/decades"> Decades </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/login"> Login </a>
                        </li>
                    </ul>
                </div>
            );
        } else if (window.location.pathname === '/decades') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/"> Home </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/titles"> Titles </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/genres"> Genres </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/login"> Login </a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/"> Home </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/titles"> Titles </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/genres"> Genres </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/decades"> Decades </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/login"> Login </a>
                        </li>
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
                <img id='menu_icon' className='w-25' src='../../photos/menu_icon.png'></img>
            </button>
            <ul className="dropdown-menu text-center w-100 m-auto">
                <li>
                    <button className="dropdown-item" type="button">
                        <a href='/'>
                            Home
                        </a>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
                        <a href='/titles'>
                            Titles
                        </a>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
                        <a href='/genres'>
                            Genres
                        </a>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
                        <a href='/decades'>
                            Decades
                        </a>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
                        <a href='/login'>
                            Login
                        </a>
                    </button>
                </li>
            </ul>
          </div>
       
            </div>
        );
    }
}