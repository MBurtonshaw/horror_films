import { React } from 'react';
import { useParams } from 'react-router-dom';

export default function Title( props ) {

    let { url }= useParams();

    let movie;
    let authors;
    let genres;
    let filmMakers;

    function fill_in() {
        if (window.innerWidth > 1400) {
            if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-5' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-5' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length > 2 && movie.youtube_link.length < 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-5' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
                return(
                    <div className=''>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-5' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            }
        }
        if (window.innerWidth > 1000) {
            if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-4' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-4' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length > 2 && movie.youtube_link.length < 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-4' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
                return(
                    <div>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-4' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            }
        }
        if (window.innerWidth < 1001) {
            if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-5' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-5' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length > 2 && movie.youtube_link.length < 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-4' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
                return(
                    <div>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-4' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            }
        }
        if (window.innerWidth < 600) {
            if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-5' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-5' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length > 2 && movie.youtube_link.length < 2) {
                return(
                    <div>
                        <a href={ movie.prime_link }>
                            <img className='w-50 px-5' src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                        </a>
                    </div>
                );
            } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
                return(
                    <div className=''>
                        <a href={ movie.youtube_link }>
                            <img className='w-50 px-5' src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                        </a>
                    </div>
                );
            }
        } 
    }
    
    if (!url) {
        return(
            <div id='not_found_div' className='container m-auto p-5 text-center'>
                <div className='p-5 m-auto'>
                    <h1 classname='p-5 m-auto'>Not Found</h1>
                </div>
            </div>
        );
    } else {
        try {
            for ( let i = 0; i < props.movies.length; i++ ) {
                if ( props.movies[i].url === url ) {
                    movie = props.movies[i];
                    authors = movie.writers.map( (artist, i) => <li key={ i }>{ artist }</li>);
                    genres = movie.genres.map( (type, i) => <li key={ i }><a href={ `/genres/${type}` }>{ type }</a></li>);
                    filmMakers = movie.directors.map(( person, i ) => <li key={ i }>{ person }</li>);

                    if (window.innerWidth < 1201) {
                        if (window.innerWidth < 1001) {
                            return(
                                <div id='title_div' className='container'>
                                    <h1 className='mt-5 mb-2 p-3 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                                    <div id='title_photo' className='container w-100'>
                                        <a href='/titles'><img src={ movie.photo } alt={`Film art for ${movie.title}`} className='w-75'></img></a>
                                    </div>
                                    <div className='row align-items-start pt-3 pb-5'>
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
                                                            <div className='w-75 px-2 m-auto'>
                                                                {fill_in()}
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return(
                                <div id='title_div' className='container'>
                                    <h1 className='mt-5 mb-2 p-3 center'>
                                        <a href='/titles' className='nonChalant'>
                                            { movie.title }
                                        </a>
                                    </h1>
                                    <div id='title_photo' className='container w-100'>
                                        <a href='/titles'><img src={ movie.photo }  alt={`Film art for ${movie.title}`} className='w-50'></img></a>
                                    </div>
                                    <div className='row align-items-start pt-3 pb-5'>
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
                                                            <div className='w-50 px-5 m-auto'>
                                                                {
                                                                fill_in()
                                                            }
                                                                
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    } else {
                        return(
                            <div id='title_div' className='container'>
                                <h1 className='m-5 pt-4 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                                <div className='row align-items-start container'>

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
                                                    <div className='w-50 m-auto'>
                                                        <div className='w-100 m-auto'>
                                                            {fill_in()}
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='title_photo' className='container w-50'>
                                        <a href='/titles'><img src={ movie.photo } alt={`Film art for ${movie.title}`} className='w-75 transparent'></img></a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            }
        } catch(err) {
            console.log(err.message);
        }
    }
}