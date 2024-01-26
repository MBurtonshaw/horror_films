import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import Cookies from 'js-cookie';

export default function Title( props ) {

/**************************************************************************************
    STATE AND ASYNC FUNCTIONS
***************************************************************************************/
    let { url }= useParams();
    let [ sizeClass, setSizeClass ] = useState('');
    let [ currentFilm, setCurrentFilm ] = useState('');
    let [ isChecked, setIsChecked ] = useState();
    let [ isLoading, setIsLoading ] = useState(true);

    //async function to match the corresponding film with the url
    async function getData() {
        for (let i = 0; i < props.context.data.movies.movies.length; i++) {
            let newTypes = await props.context.data.movies.movies;
            if (newTypes[i].url === url) {
                let newType = newTypes[i];
                setCurrentFilm(newType);
                if (document.cookie) {
                    let cookie = Cookies.get(`myList-${newType.id}`);
                    
                    if (cookie === undefined) {
                        setIsChecked(false);
                    } else {
                        if (cookie === currentFilm.title) {
                            setIsChecked(true);
                        }
                    }
                }
            }
        }
        setIsLoading(false);
    }

    useEffect( () => { getScreenSize() }, [ setSizeClass ] );
    useEffect( () => { getData() } );

/**************************************************************************************
    FUNCTIONS
***************************************************************************************/

    //function to match the film's release year with the /decades path it corresponds to
    function decade_filler() {
        let variant;
        if (movie.year < 1970) {
            variant = '../decades/classics'
        }
        if (movie.year < 1980 && movie.year > 1969) {
            variant = '../decades/70s'
        }
        if (movie.year < 1990 && movie.year > 1979) {
            variant = '../decades/80s'
        }
        if (movie.year < 2000 && movie.year > 1989) {
            variant = '../decades/90s'
        }
        if (movie.year < 2010 && movie.year > 1999) {
            variant = '../decades/00s'
        }
        if (movie.year < 2020 && movie.year > 2009) {
            variant = '../decades/10s'
        }
        if (movie.year < 2030 && movie.year > 2019) {
            variant = '../decades/20s'
        }
        return(
            <a href={variant}>{movie.year}</a>
        );
    }

    //Sets the screen width to state which is used later in the Amazon Prime & YouTube icons' classLists
    function getScreenSize() {
        if (window.innerWidth < 380) {
            setSizeClass('xxxs_socials');
        } else if (window.innerWidth < 500) {
            setSizeClass('xxs_socials');
        } else if (window.innerWidth < 576) {
            setSizeClass('xs_socials');
        } else if (window.innerWidth < 768) {
            setSizeClass('sm_socials');
        } else if (window.innerWidth < 992) {
            setSizeClass('md_socials');
        } else if (window.innerWidth < 1200) {
            setSizeClass('lg_socials');
        } else if (window.innerWidth < 1400) {
            setSizeClass('xl_socials');
        } else {
            setSizeClass('socials');
        }
    }
    
    let movie;
    let authors;
    let genres;
    let filmMakers;

    //function to create the accordion component
    function accordion_fill() {
        return(
            <div className="accordion col w-25 fly_up">
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
                            { decade_filler() }                   
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
                            <div className='w-100 m-auto'>
                                    {link_fill_in()}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //function to handle the Amazon Prime & YouTube icons
    function link_fill_in() {
        if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
            return(
                <div id ='movie_link_div' className=''>
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
                <div id ='movie_link_div' className=''>
                    <a href={ movie.prime_link }>
                        <img className={`px-5 ${sizeClass}`} src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                    </a>
                </div>
            );
        } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
            return(
                <div id ='movie_link_div' className=''>
                    <a href={ movie.youtube_link }>
                        <img className={`px-5 ${sizeClass}`} src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                    </a>
                </div>
            );
        }
    } 

    function loader_fill_in() {
        if (window.innerWidth < 992) {
            return null;
        }
        return(
            <div id='title_loader' className='px-5'>
                <div>
                    <h1 className='my-5 pt-4'>Loading...</h1>
                </div>
                <div className='row'>
                    <div className='col background_box title_filler_lg px-5'></div>
                    <div className='col background_box title_filler_lg px-5'></div>
                </div>
            </div>
        );
    }
    
/**************************************************************************************
    RENDER
***************************************************************************************/
    if (isLoading === true) {

        return(loader_fill_in());

    } else if ( isLoading === false && currentFilm.url !== url) {

        return(
            <div className='background_box py-5 my-5 w-50 mx-auto'>
                <NotFound message={url}/>
            </div>)

    } else if ( currentFilm.url === url && isLoading === false ) {

        movie = currentFilm;
        authors = movie.writers.map( (artist, i) => <li key={ i }>{ artist }</li>);
        genres = movie.genres.map( (type, i) => <li key={ i }><a href={ `/genres/${type}` }>{ type }</a></li>);
        filmMakers = movie.directors.map(( person, i ) => <li key={ i }>{ person }</li>);

        function cookie_handler() {
            if (props.user === '' || props.user === undefined) {
                return(
                    <div>
                        <h1 className='mt-5 mb-5 pt-4 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                    </div>
                );
            } else {
                if (isChecked === true) {
                    return(
                        <div>
                            <h1 className='mt-5 mb-2 pt-4 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                            <p className='mb-5 p-2 animate'>added to list</p>
                        </div>
                    );
                } else {
                    return(
                        <div>
                            <h1 className='mt-5 mb-2 pt-4 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                            <button className='mb-5 px-4 button-81' onClick={()=>{
                                //needs logic to determine what to do when cookie doesn't exist yet
                                Cookies.set(`myList-${movie.id}`, `${movie.title}`, { expires: 7 });
                                setIsChecked(true);
                            }}>Add to My List</button>
                        </div>
                    );
                }
            }
        }

        //logic to handle different screen widths
        if (window.innerWidth < 992) {
            if (window.innerWidth < 576) {
                return(
                    <div id='title_div' className='container'>
                        {cookie_handler()}
                        <div id='title_photo' className='container w-100'>
                            <a href='/titles'><img src={ `${movie.photo}_mini.jpg` } alt={`Film art for ${movie.title}`} className='w-75'></img></a>
                        </div>
                        <div className='row align-items-start pt-3 pb-5'>
                            {accordion_fill()}
                        </div>
                    </div>
                );
            } else {
                return(
                    <div id='title_div' className='container'>
                        {cookie_handler()}
                        <div id='title_photo' className='container w-100'>
                            <a href='/titles'><img src={`${ movie.photo }.jpg`} alt={`Film art for ${movie.title}`} className='w-50'></img></a>
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
                    {
                        cookie_handler()
                    }
                    <div className='row align-items-start container'>
                        {accordion_fill()}
                        <div id='title_photo' className='container w-50 fly_left'>
                            <a href='/titles'><img src={`${movie.photo}.jpg` } alt={`Film art for ${movie.title}`} className='w-75 transparent'></img></a>
                        </div>
                    </div>
                </div>
            );
        }
    } 
}
