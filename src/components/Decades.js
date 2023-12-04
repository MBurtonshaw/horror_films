import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Decades(props) {
    let { url } = useParams();
    let [ category, setCategory ] = useState('');
    let [ movies, setMovies ] = useState('');

    //removes duplicates from an array
    function removeDuplicates( arr ) { 
        let unique = []; 
        arr.forEach(element => { 
          if ( !unique.includes(element) ) { 
            unique.push( element ); 
          } 
        })
        return unique;
    } 

    //function to gather data from movies.json
    //sets category and sorts films based on url and film year
    async function getData() {
        try {
            let pictures = [];
            let films = await props.movies;

            if (url === 'classics') {
                setCategory('Classics');
            }
            if (url === '70s') {
                setCategory('1970s');
            }
            if (url === '80s') {
                setCategory('1980s');
            }
            if (url === '90s') {
                setCategory('1990s');
            }
            if (url === '00s') {
                setCategory('2000s');
            }
            if (url === '10s') {
                setCategory('2010s');
            }
            if (url === '20s') {
                setCategory('2020s');
            }

                for (let i = 0; i < films.length; i++) {
              
                    if (url === 'classics' && films[i].year < 1970) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                       if (url === '70s' && films[i].year > 1969 && films[i].year < 1980) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                       if (url === '80s' && films[i].year > 1979 && films[i].year < 1990) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                       if ( url === '90s' && films[i].year > 1989 && films[i].year < 2000) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                       if ( url === '00s' && films[i].year > 1999 && films[i].year < 2010) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                       if ( url === '10s' && films[i].year > 2009 && films[i].year < 2020) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                       if ( url === '20s' && films[i].year > 2019 && films[i].year < 2030) {
                        pictures.push(films[i]);
                        pictures = removeDuplicates(pictures);
                       }
                    setMovies(pictures);
                }
        } catch(err) {
            console.log(err.message)
        }
    }
///////////////////////////////////////////////////////////////////////
    useEffect( () => { getData() }, [ category, setMovies ] );
///////////////////////////////////////////////////////////////////////

    //function to map the movies corresponding to the correct decade, to list items
    let fill_array = [];

    function attention() {
        if (url === 'classics') {
            return('Classics');
        } else {
            return('Decade: ' + url);
        }
    }

    function fill_in() {
        try {
            for (let f = 0; f < movies.length; f++) {
                fill_array.push(movies[f]);
            }
            //
            return(
                fill_array.map( (film, i) =>
                    <li className='list-group-item pt-3 mb-3' key={i}><a href={`/titles/${film.url}`}>{film.title}</a></li>
                )
            );
        } catch(err) {
            console.log(err.message)
        }
    }
    //
    return(      
        <div id='DecadePage' className='container w-50'>
            <h1 className='m-5 pt-5'>
                {attention()}
            </h1>
            <div className='container pb-4 mb-4 w-75'>
                <ul className="list-group list-group-flush">
                    {fill_in()}
                </ul>
            </div>
        </div>
    );
}