import { React } from 'react';
import { useParams } from 'react-router-dom';

export default function Title( props ) {

    let { url }= useParams();

    let movie;
    let authors;
    let genres;
    let filmMakers;

    for ( let i = 0; i < props.movies.length; i++ ) {
        if ( props.movies[i].url === url ) {
            movie = props.movies[i];
            authors = movie.writers.map( (artist, i) => <li key={ i }>{ artist }</li>);
            genres = movie.genres.map( (type, i) => <li key={ i }><a href={ `/genres/${type}` }>{ type }</a></li>);
            filmMakers = movie.directors.map(( person, i ) => <li key={ i }>{ person }</li>);
    
            return(
                <div className='container'>
                    <h1 className='my-5 pt-5 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                    <div className='row align-items-start'>
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
                        </div>
                        <div id='title_photo' className='container w-50'>
                            <a href='/titles'><img src={ movie.photo } className='w-75 transparent'></img></a>
                        </div>
                    </div>
                </div>
            );
        }
    }
}