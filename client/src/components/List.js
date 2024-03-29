import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Error from './Error';

export default function List(props) {

    /**************************************************************************************
        STATE AND ASYNC FUNCTIONS
    ***************************************************************************************/

    let [filmList, setFilmList] = useState('');
    let finalArray = [];
    let [error, setError] = useState('');
    let [user, setUser] = useState('');
    let [isLoading, setIsLoading] = useState(true);

    async function getData() {
        if (isLoading) {
            if (filmList.length < 1) {
                if (!user) {
                    return null;
                } else {
                    let cookie_array = [];
                    for (let i = 0; i < props.context.data.movies.movies.length; i++) {
                        let cookies = Cookies.get(`myList-${user.email}-${i}`);
                        if (cookies !== undefined) {
                            cookie_array.push(cookies);
                        }
                    }
                    props.context.data.movies.movies.forEach(
                        item => {
                            if (cookie_array.includes(item.title)) {
                                finalArray.push(item);
                                setFilmList(finalArray);
                            }
                        }
                    );
                    setIsLoading(false);
                }
            }
        }
    }
    useEffect(() => { setUser(props.user) });
    useEffect(() => { getData() });

    /**************************************************************************************
        FUNCTIONS
    ***************************************************************************************/
    //function to avoid an error and check if there are no films in state on pageload
    //if there are films present, it will return them as list items
    function mapper() {
        if (filmList.length < 1) {
            return null;
        } else {
            if (window.innerWidth < 768) {
                return (
                    filmList.map((item, i) =>
                        <li key={i} className='p-2' >
                            <div className='w-100 p-2'>
                                <a href={`/titles/${item.url}`}> {item.title} </a>
                            </div>
                            <div className='w-100'>
                                <button onClick={() => {
                                    Cookies.remove(`myList-${user.email}-${item.id}`, { path: `/` });
                                    window.location.reload();
                                }}>remove</button>
                            </div>
                        </li>
                    )
                );
            } else {
                return (
                    filmList.map((item, i) =>
                        <li key={i} className='p-2' >
                            <div className='w-100 row align-items-start'>
                                <div className='col mx-2'></div>
                                <div className='col'>
                                    <a href={`/titles/${item.url}`}> {item.title} </a>
                                </div>
                                <div className='col'>
                                    <button onClick={() => {
                                        Cookies.remove(`myList-${user.email}-${item.id}`, { path: `/` });
                                        window.location.reload();
                                    }}>remove</button>
                                </div>
                            </div>
                        </li>
                    )
                );
            }
        }
    }

    /**************************************************************************************
        RENDER
    ***************************************************************************************/

    //checking if there are any cookies present. It not, this is returned
    if (error) {
        return (
            <div className='py-5 my-5 mx-auto'>
                <Error message={error} />
            </div>
        );
    } else {
        if (!document.cookie) {
            if (window.innerWidth < 768) {
                return (
                    <div id='List' className='container w-100 p-5 mt-5 background_box_mini'>
                        <div className='animate'>
                            <h1> My List </h1>
                            <div className='py-5'>
                                <h2>Please login first</h2>
                                <div className='py-5'>
                                    <a href='/login'>Login</a>
                                </div>
                                <div >
                                    <a href='/'>Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id='List' className='container w-50 p-5 mt-5 background_box'>
                        <div>
                            <h1> My List </h1>
                            <div className='py-5'>
                                <h2>Please login first</h2>
                                <div className='py-5'>
                                    <a href='/login'>Login</a>
                                </div>
                                <div >
                                    <a href='/'>Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            //checks if there is a 'signedIn?' cookie present, and checking if it is empty
            //if it's empty, that means the user is currently signed out, and returns the following
        } else if (JSON.parse(Cookies.get('signedIn?')) === '' || JSON.parse(Cookies.get('signedIn?')) === undefined) {
            if (window.innerWidth < 768) {
                return (
                    <div id='List' className='container w-100 p-5 mt-5 background_box_mini'>
                        <div className='animate'>
                            <h1> My List </h1>
                            <div className='py-5'>
                                <h2>Please login first</h2>
                                <div className='py-5'>
                                    <a href='/login'>Login</a>
                                </div>
                                <div >
                                    <a href='/'>Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id='List' className='container w-50 p-5 mt-5 background_box'>
                        <div className='animate'>
                            <h1> My List </h1>
                            <div className='py-5'>
                                <h2>Please login first</h2>
                                <div className='py-5'>
                                    <a href='/login'>Login</a>
                                </div>
                                <div >
                                    <a href='/'>Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        } else {
            //loading screen based on isLoading from getData function
            if (isLoading) {
                if (window.innerWidth < 768) {
                    return (
                        <div id='List' className='container w-100 p-5 mt-5 background_box_mini'>
                            <div>
                                <h1> Loading... </h1>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div id='List' className='container w-50 p-5 mt-5 background_box'>
                            <div>
                                <h1> Loading... </h1>
                            </div>
                        </div>
                    );
                }
            } else {
                //if the signedIn? cookie has user data, this is returned
                if (window.innerWidth < 768) {
                    return (
                        <div id='List' className='container w-100 p-5 mt-5 background_box_mini'>
                            <div className='animate'>
                                <h1> My List </h1>
                                <ul className='p-0 pt-3'>
                                    {mapper()}
                                </ul>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div id='List' className='container w-50 p-5 mt-5 background_box'>
                            <div className='animate'>
                                <h1> My List </h1>
                                <ul className='p-0 pt-3'>
                                    {mapper()}
                                </ul>
                            </div>
                        </div>
                    );
                }
            }
        }
    }
}

