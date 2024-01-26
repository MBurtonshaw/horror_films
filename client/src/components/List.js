import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function List(props) {

    /**************************************************************************************
        STATE AND ASYNC FUNCTIONS
    ***************************************************************************************/

    let [ filmList, setFilmList ] = useState('');
    let finalArray = [];

    async function getData() {
        let filmArray = [];

        //setting film list to empty if there are no cookies yet
        if (!document.cookie) {
            setFilmList('');

        } else {

            //looping through all movies in context and checking for cookies corresponding to the movies' [i] position
            //this will return something for every movie on the list, so there will be 'undefined' being returned a lot
            for (let i = 0; i < props.context.data.movies.movies.length; i++) {
                filmArray.push(Cookies.get(`myList-${i}`));

                function remove_undefined(val) {
                    return val !== undefined;
                }

                //removing the undefined values from the array
                let filteredArray = filmArray.filter(remove_undefined);

                //mapping through movies in context. If a movie title matches a cookie value, it's added to filmList in state
                props.context.data.movies.movies.map((item, i) => {
                    for (let k = 0; k < filteredArray.length; k++) {
                        if (item.title === filteredArray[k]) {
                            finalArray.push(item);
                            setFilmList(props.context.actions.removeDuplicates(finalArray));
                        }
                    }
                });
            } 
        }
    }

    useEffect(()=>{ getData() }, [ setFilmList ]);

    /**************************************************************************************
        FUNCTIONS
    ***************************************************************************************/
    //function to avoid an error and check if there are no films in state on pageload
    //if there are films present, it will return them as list items
    function mapper() {
        if (filmList.length < 1) {
            return null;
        } else {
            if (window.innerWidth < 992) {
                return(
                    filmList.map((item, i) => 
                        <li key={i} className='p-2' >

                                <div className='w-100 p-2'>
                                    <a href={`/titles/${item.url}`}> { item.title } </a>
                                </div>
                                <div className='w-100'>
                                    <button className='button-81' onClick={()=>{
                                        Cookies.remove(`myList-${item.id}`, {path: `/`});
                                        window.location.reload();
                                    }}>remove</button>
                                </div>
                            
                        </li>
                    )
                );
            } else {
                return(
                    filmList.map((item, i) => 
                        <li key={i} className='p-2' >
                            <div className='w-100 row align-items-start'>
                                <div className='col mx-2'></div>
                                <div className='col'>
                                    <a href={`/titles/${item.url}`}> { item.title } </a>
                                </div>
                                <div className='col'>
                                    <button className='button-81' onClick={()=>{
                                        Cookies.remove(`myList-${item.id}`, {path: `/`});
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
    if (!document.cookie) {
        if (window.innerWidth < 992) {
            return(
                <div id='List' className='container w-100 p-5 mt-5 background_box'>
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
            return(
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
        if (window.innerWidth < 992) {
            return(
                <div id='List' className='container w-100 p-5 mt-5 background_box'>
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
            return(
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
        //else, the cookie has user data present, and the following is returned
        if (window.innerWidth < 992) {
            return(
                <div id='List' className='container w-100 p-5 mt-5 background_box'>
                    <div className='animate'>
                        <h1> My List </h1>
                        <ul className='p-0 pt-3'>
                            { mapper() }
                        </ul>
                    </div>
                </div>
            );
        } else {
            return(
                <div id='List' className='container w-50 p-5 mt-5 background_box'>
                    <div className='animate'>
                        <h1> My List </h1>
                        <ul className='p-0 pt-3'>
                            { mapper() }
                        </ul>
                    </div>
                </div>
            );
        }
        
    }
}
    
