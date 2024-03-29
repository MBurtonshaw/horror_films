import { React, useState, useEffect } from 'react';
import Error from './Error';

export default function GenrePage(props) {

    /**************************************************************************************
        STATE AND ASYNC FUNCTIONS
    ***************************************************************************************/
    let [types, setTypes] = useState('');
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

    }

    useEffect(() => { getData() }, [setTypes]);

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
        if (types.length < 1) {
            return (
                <div id='DecadesPage' className='container'>
                    <h1 className='my-5 pt-5'> Loading... </h1>
                    <div className="background_box decades_loader">
                    </div>
                </div>
            );
        } else {
            return (
                <div id='GenrePage' className='container'>
                    <h1 className='my-5 pt-5'> Genres </h1>
                    <div className="card-group">
                        {
                            types.map((genre, i) => {

                                //function to return contents of the cards and leave the innderWidth conditons below more concise
                                function fill_in() {
                                    return (
                                        <div className="card animate">
                                            <a href={`/genres/${genre}`}>
                                                <img src={`../../photos/genres/${genre.toLowerCase()}.jpg`} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{genre}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    );
                                }
                                //optimizing widths for different screen sizes
                                if (window.innerWidth < 768) {
                                    return (
                                        <div key={i} className='w-100 p-3 m-auto'>
                                            {fill_in()}
                                        </div>
                                    );
                                }
                                if (window.innerWidth < 992) {
                                    return (
                                        <div key={i} className='w-75 p-3 m-auto'>
                                            {fill_in()}
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div key={i} className='w-25'>
                                            {fill_in()}
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}
