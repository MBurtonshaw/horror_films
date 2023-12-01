import { React } from 'react';

export default function Header() {
    //conditional statements will return data based on path
    if (window.location.pathname === '/') {
        try {
            //
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/titles"> Titles </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/decades"> Decades </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/genres"> Genres </a>
                        </li>
                    </ul>
                </div>
            );
        } catch(err) {
            console.log(err.message);
        }
    } else {
        try {
            //
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
                    </ul>
                </div>
            );
        } catch(err) {
            console.log(err.message);
        }
    }
}