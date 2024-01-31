import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Genres(props) {

/**************************************************************************************
    STATE AND ASYNC FUNCTIONS
***************************************************************************************/
    let { url } = useParams();
    let [ movies, setMovies ] = useState('');
    let [ genre, setGenre ] = useState('');
    let [ isLoading, setIsLoading ] = useState(true);

    //function to gather data from movies.json
    async function getData() {
        try {
            let pictures = [];
            let films = await props.context.data.movies.movies;

            for (let i = 0; i < films.length; i++) {
              for (let j = 0; j < films[i].genres.length; j++) {
                if (films[i].genres.includes(url)) {
                    console.log(films[i].genres)
                    pictures.push(films[i]);
                    setMovies(props.context.actions.removeDuplicates(pictures));
                    setGenre(url);
                }
              }
            }
            setIsLoading(false);
        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect( () => { getData() }, [ setGenre ] );

/**************************************************************************************
    FUNCTIONS
***************************************************************************************/
    //function to map the movies corresponding to the correct decade, to list items
    let fill_array = [];

    //function to loop thru state & map films corresponding to the decade
    function fill_in() {
        for ( let f = 0; f < movies.length; f++ ) {
            fill_array.push( movies[f] );
        }
            //
        return(
            fill_array.map( ( film, i ) => {
                if (i > 12) {
                    return(
                        <li className='list-group-item pt-3 mb-3 flashcard' key={ i }><a href={`/titles/${ film.url }`}>{ film.title }</a></li>
                    );
                } 
                return(
                    <li className='list-group-item pt-3 mb-3 animate' key={ i }><a href={`/titles/${ film.url }`}>{ film.title }</a></li>
                );
            })
        );
    }

    

/**************************************************************************************
    RENDER
***************************************************************************************/
    if (isLoading === true) {
        if (window.innerWidth < 768) {
            return(
                <div className='background_box_mini genre_loader w-100 mx-auto my-5'>
                    <h1 className='p-4'>Loading...</h1>
                </div>
            );
        }
        return(
            <div className='background_box genre_loader w-50 mx-auto my-5'>
                <h1 className='p-4'>Loading...</h1>
            </div>
        );
    } else if (isLoading === false && genre === '') {
        if (window.innerWidth < 768) {
            return(
                <div className='py-5 my-5 mx-auto w-50'>
                    <NotFound message={ url }/>
                </div>
            );
        }
        return(
            <div className='py-5 my-5 mx-auto w-50'>
                    <NotFound message={ url }/>
                </div>
        );
    } else {
        //combines previous two functions and returns formatting based on screen size
        if (window.innerWidth < 768) { 
            return(      
                <div id='Genre' className='container p-1 m-auto my-5 pb-2 background_box_mini'>
                    <h1 className='my-4 mx-1'>
                        Genre: { genre }
                    </h1>
                    <div className='container p-1 pb-4 mb-4 w-75'>
                        <ul className="list-group list-group-flush">
                            { fill_in() }
                        </ul>
                    </div>
                </div>
            );
        } 

        return(      
            <div id='Genre' className='container p-1 m-auto mt-5 w-50 background_box'>
                <h1 className='m-5'>
                    Genre: { genre }
                </h1>
                <div className='container pb-4 mb-4 w-75'>
                    <ul className="list-group list-group-flush">
                        { fill_in() }
                    </ul>
                </div>
            </div>
        );
    }
   
    //
}