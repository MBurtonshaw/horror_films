import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Title( props ) {
    let { url }= useParams();

    let [ sizeClass, setSizeClass ] = useState('');

    //Sets the screen width to state which is used later in the social media icons' classLists
    function getScreenSize() {
        if (window.innerWidth < 500) {
            setSizeClass('lg_socials');
        } else if (window.innerWidth < 768) {
            setSizeClass('md_socials');
        } else if (window.innerWidth < 992) {
            setSizeClass('xs_socials');
        } else if (window.innerWidth < 1200) {
            setSizeClass('lg_socials');
        } else if (window.innerWidth < 1400) {
            setSizeClass('md_socials');
        } else {
            setSizeClass('sm_socials');
        }
    }

    useEffect( () => { getScreenSize() }, [ setSizeClass ] );

    let movie;
    let authors;
    let genres;
    let filmMakers;

    function accordion_fill() {
        return(
            <div className="accordion col w-25">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Writer(s)
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { authors }
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Director(s)
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { filmMakers }                  
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Release Year
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { movie.year }                   
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Genres
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { genres }                 
                        </div>
                    </div>                     
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Links
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className='w-100'>
                                <div className='m-auto'>
                                    {link_fill_in()}
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function link_fill_in() {
            if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
                return(
                    <div id ='movie_link_div' className='px-5'>
                        <a href={ movie.prime_link }>
                            <img className={`px-5 ${sizeClass}`} src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                        <a href={ movie.youtube_link }>
                            <img className={`px-5 ${sizeClass}`} src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length > 2 && movie.youtube_link.length < 2) {
                return(
                    <div id ='movie_link_div' className='px-5'>
                        <a href={ movie.prime_link }>
                            <img className={`px-5 ${sizeClass}`} src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
                return(
                    <div id ='movie_link_div' className='px-5'>
                        <a href={ movie.youtube_link }>
                            <img className={`px-5 ${sizeClass}`} src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            }

    } 
    
    if (!url) {
        return(
            <NotFound />
        );
    } else {
        try {
            for ( let i = 0; i < props.movies.length; i++ ) {
                if ( props.movies[i].url === url ) {
                    movie = props.movies[i];
                    authors = movie.writers.map( (artist, i) => <li key={ i }>{ artist }</li>);
                    genres = movie.genres.map( (type, i) => <li key={ i }><a href={ `/genres/${type}` }>{ type }</a></li>);
                    filmMakers = movie.directors.map(( person, i ) => <li key={ i }>{ person }</li>);

                    if (window.innerWidth < 992) {
                        if (window.innerWidth < 576) {
                            return(
                                <div id='title_div' className='container'>
                                    <h1 className='mt-5 mb-2 p-3 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                                    <div id='title_photo' className='container w-100'>
                                        <a href='/titles'><img src={ movie.photo } alt={`Film art for ${movie.title}`} className='w-75'></img></a>
                                    </div>
                                    <div className='row align-items-start pt-3 pb-5'>
                                        {accordion_fill()}
                                    </div>
                                </div>
                            );
                        } else {
                            return(
                                <div id='title_div' className='container'>
                                    <h1 className='mt-5 mb-2 p-3 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                                    <div id='title_photo' className='container w-100'>
                                        <a href='/titles'><img src={ movie.photo }  alt={`Film art for ${movie.title}`} className='w-50'></img></a>
                                    </div>
                                    <div className='row align-items-start pt-3 pb-5'>
                                        {accordion_fill()}
                                    </div>
                                </div>
                            );
                        }
                    } else {
                        return(
                            <div id='title_div' className='container'>
                                <h1 className='m-5 pt-4 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                                <div className='row align-items-start container'>
                                    {accordion_fill()}
                                    <div id='title_photo' className='container w-50'>
                                        <a href='/titles'><img src={ movie.photo } alt={`Film art for ${movie.title}`} className='w-75 transparent'></img></a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                } else {
                    return(
                        <NotFound />
                    );
                }
            }
        } catch(err) {
            console.log(err.message);
        }
    }
}
