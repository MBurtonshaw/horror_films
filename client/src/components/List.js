import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function List(props) {

    let [ filmList, setFilmList ] = useState('');

    async function getData() {
        let filmArray = [];
        if (!document.cookie) {
            setFilmList('');
        } else {
            for (let i = 0; i < props.context.data.movies.movies.length; i++) {
                setFilmList(Cookies.get('myList'));
            }
            
        }
    }

    useEffect(()=>{ getData() }, []);

    return(
        <div id='List' className='container w-50 p-5 mt-5 background_box'>
            <h1> My List </h1>
            
            <ul className='p-0 pt-3'>
                { props.context.data.movies.movies.map(
                    (item, i) => 
                        <li key={i} className='p-2' >
                            <a href={`/titles/${item.url}`}> { item.title } </a>
                        </li>
                )}
            </ul>
        </div>
    );
}