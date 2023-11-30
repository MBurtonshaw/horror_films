import { React } from 'react';

export default function Carousel( props ) {


    function hover_over() {
        let picture = document.getElementsByClassName('active')[0].children[0].children[0];
        picture.src = '../../photos/' + picture.id + '.jpg';

    }
    function hover_off(title) {
        let picture = document.getElementsByClassName('active')[0].children[0].children[0];
        picture.src = '../../photos/tinted/' + picture.id + '.jpg';
    }

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
                                <img id='halloween' className='smaller_img' src={ '../../photos/tinted/halloween.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/ginger_snaps'>
                                <img id='ginger_snaps' className='smaller_img' src={ '../../photos/tinted/ginger_snaps.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                        <a href='/titles/curse_of_frankenstein'>
                                <img id='curse_of_frankenstein' className='smaller_img' src={ '../../photos/tinted/curse_of_frankenstein.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                        <a href='/titles/it_follows'>
                                <img id='it_follows' className='smaller_img' src={ '../../photos/tinted/it_follows.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
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
                                <img className='smaller_img' src={ '../../photos/tinted/black_christmas.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/ravenous'>
                                <img className='smaller_img' src={ '../../photos/tinted/ravenous.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/evil_dead'>
                                <img className='smaller_img' src={ '../../photos/tinted/evil_dead.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/the_thing'>
                                <img className='smaller_img' src={ '../../photos/tinted/the_thing.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
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
                                <img className='smaller_img' src={ '../../photos/tinted/the_mist.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                        <a href='/titles/phantasm'>
                                <img className='smaller_img' src={ '../../photos/tinted/phantasm.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/the_lighthouse'>
                                <img className='smaller_img' src={ '../../photos/tinted/the_lighthouse.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/hereditary'>
                                <img className='smaller_img' src={ '../../photos/tinted/hereditary.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
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
                                <img className='smaller_img' src={ '../../photos/tinted/texas_chainsaw_massacre.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/dusk_till_dawn'>
                                <img className='smaller_img' src={ '../../photos/tinted/dusk_till_dawn.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/pumpkinhead'>
                                <img className='smaller_img' src={ '../../photos/tinted/pumpkinhead.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
                            </a>
                        </div>
                        <div className="carousel-item p-3">
                            <a href='/titles/jeepers_creepers'>
                                <img className='smaller_img' src={ '../../photos/tinted/jeepers_creepers.jpg' } onMouseOver={hover_over} onMouseOut={hover_off} />
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