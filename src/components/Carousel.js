import { React } from 'react';

export default function Carousel( props ) {

    let month = props.month;

    if ( month === 9 || month === 10 || month === 11 ) { 
    {/* Sept-Nov */}
    {/* Halloween Season */}
        //
        return(
            <div id='Carousel' className='container d-none d-lg-block p-2 pb-5'>
                <h2 className='m-2 p-1'> Autumn Recommendations </h2>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active p-3">
                            <a href='/titles/halloween'>
                                <img className='smaller_img' src={ '../../photos/halloween.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/ginger_snaps'>
                                <img className='smaller_img' src={ '../../photos/ginger_snaps.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                        <a href='/titles/curse_of_frankenstein'>
                                <img className='smaller_img' src={ '../../photos/curse_of_frankenstein.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                        <a href='/titles/it_follows'>
                                <img className='smaller_img' src={ '../../photos/it_follows.jpg' }/>
                            </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Previous  </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Next </span>
                    </button>
                </div>
            </div>
        );
    }

    if ( month === 12 || month === 1 || month === 2 ) {   
        {/* Dec-Feb */}
        {/* Fall/Winter Season */}
        //
        return(
            <div id='Carousel' className='container d-none d-lg-block p-2 pb-5'>
                <h2 className='m-2 p-1'> Winter Recommendations </h2>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active p-3">
                            <a href='/titles/black_christmas'>
                                <img className='smaller_img' src={ '../../photos/black_christmas.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/ravenous'>
                                <img className='smaller_img' src={ '../../photos/ravenous.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/evil_dead'>
                                <img className='smaller_img' src={ '../../photos/evil_dead.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/evil_dead_2'>
                                <img className='smaller_img' src={ '../../photos/evil_dead_2.jpg' }/>
                            </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Previous </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Next </span>
                    </button>
                </div>
            </div>
        );
    }

    if ( month === 3 || month === 4 || month === 5 ) {  
        {/* Mar-May */}
        {/* Spring/Nature Season */}
        //
        return(
            <div id='Carousel' className='container d-none d-lg-block p-2 pb-5'>
                <h2 className='m-2 p-1'>Spring Recommendations</h2>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active p-3">
                            <a href='/titles/the_mist'>
                                <img className='smaller_img' src={ '../../photos/the_mist.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                        <a href='/titles/phantasm'>
                                <img className='smaller_img' src={ '../../photos/phantasm.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/the_lighthouse'>
                                <img className='smaller_img' src={ '../../photos/the_lighthouse.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/hereditary'>
                                <img className='smaller_img' src={ '../../photos/hereditary.jpg' }/>
                            </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Previous </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Next </span>
                    </button>
                </div>
            </div>
        );
    }

    if ( month === 6 || month === 7 || month === 8 ) {    
        {/* June-Aug */}
        {/* Bright/Summer Season */}
        //
        return(
            <div id='Carousel' className='container d-none d-lg-block p-2 pb-5'>
                <h2 className='m-2 p-1'> Summer Recommendations </h2>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active p-3">
                            <a href='/titles/texas_chainsaw_massacre'>
                                <img className='smaller_img' src={ '../../photos/texas_chainsaw_massacre.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/dusk_till_dawn'>
                                <img className='smaller_img' src={ '../../photos/dusk_till_dawn.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/pumpkinhead'>
                                <img className='smaller_img' src={ '../../photos/pumpkinhead.jpg' }/>
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/jeepers_creepers'>
                                <img className='smaller_img' src={ '../../photos/jeepers_creepers.jpg' }/>
                            </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Previous </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Next </span>
                    </button>
                </div>
            </div>
        );
    }
}