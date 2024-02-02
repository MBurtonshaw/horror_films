import { React, useState, useEffect } from 'react';
import Main from './Main';
import Search from './Search';
import Error from './Error';


export default function Home(props) {

    /**************************************************************************************
        STATE AND ASYNC FUNCTIONS
    ***************************************************************************************/
    let [types, setTypes] = useState('');
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState('');

    async function getData() {
        try {
            let genres = await props.context.data.movies.genres;
            let genreArray = [];
            for (let i = 0; i < genres.length; i++) {
                if (!genreArray.includes(genres[i].name)) {
                    genreArray.push(genres[i].name);
                    setTypes(genreArray);
                }
            }
        } catch (err) {
            setError(err.message);
        }

        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setTypes]);

    /**************************************************************************************
        FUNCTIONS
    ***************************************************************************************/
    function searchbar() {
        if (window.innerWidth > 767) {
            return (
                <div className='animate'>
                    <Search movies={props.context.movies} genres={types} />
                    <h1 className='my-5'> Horror Films </h1>
                </div>
            );
        } else if (window.innerWidth < 768) {
            return (
                <div className='animate'>
                    <Search movies={props.context.movies} genres={types} />
                </div>
            );
        }
    }

    /**************************************************************************************
        RENDER
    ***************************************************************************************/
    if (error) {
        return (
            <div className='py-5 my-5 mx-auto'>
                <Error message={error} />
            </div>
        );
    } else {
        if (isLoading === true) {
            return (
                <div>
                    <div className='w-25 m-auto p-3'>
                        <div className='background_box w-50 m-auto'></div>
                    </div>
                    <h1 className='py-4'>...Loading...</h1>
                    <h2 className='py-5'>Please wait while data is loading</h2>
                    <div className='background_box w-50 m-auto home_filler mb-5'></div>
                    <div className='background_box w-50 m-auto home_filler mb-5'></div>
                </div>
            );
        } else {
            return (
                <div id='home_div'>
                    <div id='Home' className='container'>
                        {searchbar()}
                        <Main />
                    </div>
                </div>
            );
        }
    }
}