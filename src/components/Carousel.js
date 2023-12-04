import { React } from 'react';
import Search from './Search';

export default function Carousel( props ) {

    let first;
    let second;
    let third;
    let fourth;
    let season;

    let month = props.month;
    
    if ( month === 9 || month === 10 || month === 11 ) { 
    
        first = 'halloween';
        second = 'ginger_snaps';
        third = 'curse_of_frankenstein';
        fourth = 'it_follows';
        season = 'Autumn';
    }

    if ( month === 12 || month === 1 || month === 2 ) {   
    
        first = 'black_christmas';
        second = 'ravenous';
        third = 'gremlins';
        fourth = 'the_thing';
        season = 'Winter';
    }
    
    if ( month === 3 || month === 4 || month === 5 ) {  
    
        first = 'the_mist';
        second = 'evil_dead';
        third = 'the_lighthouse';
        fourth = 'hereditary';
        season = 'Spring';
    }

    if ( month === 6 || month === 7 || month === 8 ) {  
    
        first = 'texas_chainsaw_massacre';
        second = 'dusk_till_dawn';
        third = 'pumpkinhead';
        fourth = 'jeepers_creepers';
        season = 'Summer';
    }

    function hover_over() {
        let picture_parent = document.getElementsByClassName( 'active' )[0];
        let picture = picture_parent.children[0].children[0];
        picture.src = '../../photos/' + picture.id + '.jpg';
    }
    
    function hover_off() {
        let picture_parent = document.getElementsByClassName( 'active' )[0];
        let picture = picture_parent.children[0].children[0];
        picture.src = '../../photos/tinted/' + picture.id + '.jpg';
    }
    
    return(
        <div>
            <div id='Carousel'>
                <div id='regular_carousel' className='container d-none d-lg-block w-50 p-2 pb-5'>
                    <h2 className='m-2 p-1'> { season } Recommendations </h2>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active p-3">
                                <a href={`/titles/${ first }`}>
                                    <img id={ first } className='smaller_img' src={ `../../photos/tinted/${ first }.jpg` } onMouseOver={ hover_over } onMouseOut={ hover_off } />
                                </a>
                            </div>
                            <div className="carousel-item p-3">
                                <a href={`/titles/${ second }`}>
                                    <img id={ second } className='smaller_img' src={ `../../photos/tinted/${ second }.jpg` } onMouseOver={ hover_over } onMouseOut={ hover_off } />
                                </a>
                            </div>
                            <div className="carousel-item p-3">
                                <a href={`/titles/${ third }`}>
                                    <img id={ third } className='smaller_img' src={ `../../photos/tinted/${ third }.jpg` } onMouseOver={ hover_over } onMouseOut={ hover_off } />
                                </a>
                            </div>
                            <div className="carousel-item p-3">
                                <a href={`/titles/${ fourth }`}>
                                    <img id={ fourth } className='smaller_img' src={ `../../photos/tinted/${ fourth }.jpg` } onMouseOver={ hover_over } onMouseOut={ hover_off } />
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
                <div id='mobile_carousel' className='container d-block d-lg-none'>
                    <div className='d-md-none'>
                        <Search />
                    </div>
                    <h1 className='py-2 pt-5 pt-md-2'>{ season } Recommendations</h1>
                    <div>
                        <div className='container'>
                            <a href={`/titles/${ first }`}>
                                <img id={ first } className='smaller_img py-3' src={ `../../photos/${ first }.jpg` }/>
                            </a>
                        </div>
                        <div>
                            <a href={`/titles/${ second }`}>
                                <img id={ second } className='smaller_img py-3' src={ `../../photos/${ second }.jpg` }/>
                            </a>
                        </div>
                        <div>
                            <a href={`/titles/${ third }`}>
                                <img id={ third } className='smaller_img py-3' src={ `../../photos/${ third }.jpg` }/>
                            </a>
                        </div>
                        <div>
                            <a href={`/titles/${ fourth }`}>
                                <img id={ fourth } className='smaller_img py-3' src={ `../../photos/${ fourth }.jpg` }/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

   

  


