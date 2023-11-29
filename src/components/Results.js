import { React, useState, useEffect } from 'react';

export default function Results(props) {

   let [ term, setTerm ] = useState('');
   let [ movies, setMovies ] = useState('');
   let movieArray = [];

   //function to set a term from url to state then sort movies based on that term
   async function getData() {
    if (window.location.hostname === 'localhost') {
        setTerm(window.location.href.slice(30));
    } else {
        setTerm(window.location.href);
        console.log(window.location);
    }
    movieArray = await props.movies;
    if (movieArray.length <= 1) {
        return(null)
    } else {
        for (let i = 0; i < movieArray.length; i++) {
            let newType = term.toLowerCase();
            let newArray = [];
            movieArray.forEach((film) => {
                if (film.url.includes(newType)) {
                    newArray.push(film);
                }
                setMovies(newArray);
            });
        }
    }
   }

   useEffect( () => { getData() } );

    function capitalizeFirstLetter( string ) {
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
    }
        for (let m = 0; m < movies.length; m++) {
            //mapping movies from state
            return(
                <div>
                    <div>
                        <div id='ResultsPage' className='container w-25'>
                            <h1 className='m-5 pt-5'>
                                {capitalizeFirstLetter(term.toLowerCase())}
                            </h1>
                            <div className='container pb-4 mb-4'>
                                <ul className="list-group list-group-flush">
                                    {movies.map((film, i)=><li key={i} className='list-group-item pt-3 mb-3'><a href={`/titles/${film.url}`}>{film.title}</a></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
}