import { React } from 'react';

export default function Main( props ) {

    let first;
    let second;
    let third;
    let fourth;
    let fifth;
    let sixth;
    let season;

    let month = props.month;
    
    if ( month === 9 || month === 10 || month === 11 ) { 
    
        first = 'halloween';
        second = 'ginger_snaps';
        third = 'curse_of_frankenstein';
        fourth = 'it_follows';
        fifth = 'the_vvitch';
        sixth = 're_animator';
        season = 'Autumn';
    }

    if ( month === 12 || month === 1 || month === 2 ) {   
    
        first = 'black_christmas';
        second = 'ravenous';
        third = 'gremlins';
        fourth = 'the_thing';
        fifth = 'pontypool';
        sixth = 'hell_house_llc';
        season = 'Winter';
    }
    
    if ( month === 3 || month === 4 || month === 5 ) {  
    
        first = 'the_mist';
        second = 'evil_dead';
        third = 'the_lighthouse';
        fourth = 'hereditary';
        fifth = 'Pearl';
        sixth = '';
        season = 'Spring';
    }

    if ( month === 6 || month === 7 || month === 8 ) {  
    
        first = 'the_sitter';
        second = 'dusk_till_dawn';
        third = 'pumpkinhead';
        fourth = 'scream';
        fifth = 'black_phone';
        sixth = 'texas_chainsaw_massacre';
        season = 'Summer';
    }

        if (window.innerWidth < 768) {
                return(
                    <div id='Main'>
                        <div id='regular_carousel' className='container d-block'>
                            <h2 className='m-2 pt-5'> { season } Recommendations </h2>
                            <div className='py-3'>
                                <div className='container background_box p-5 mb-5'>
                                    <a href={`/titles/${ first }`}>
                                        <img id={ first } className='smaller_img py-3' src={ `../../photos/${ first }.jpg` } alt={`a movie poster for ${first}`} />
                                    </a>
                                    <p className='main_text py-3 m-0'>It's Christmas, and people are celebrating; but a sorority house is receiving disturbing phone calls.</p>
                                </div>
                            </div>
                            <div className='py-3 flashcard'>
                                <div className='container background_box p-5 mb-5'>
                                    <a href={`/titles/${ second }`}>
                                        <img id={ second } className='smaller_img py-3' src={ `../../photos/${ second }.jpg` } alt={`a movie poster for ${second}`} />
                                    </a>
                                    <p className='main_text py-3 m-0'>Following the Mexican-American War, a military regiment takes in a stranger on a snowy night.</p>
                                </div>
                            </div>
                            <div className='py-3 flashcard'>
                                <div className='container background_box p-5 mb-5 flashcard'>
                                    <a href={`/titles/${ third }`}>
                                        <img id={ third } className='smaller_img py-3' src={ `../../photos/${ third }.jpg` } alt={`a movie poster for ${third}`} />
                                    </a>
                                    <p className='main_text py-3 m-0'>A father buys his son a rare pet as a Christmas present from a mysterious shop in Chinatown.</p>
                                </div>
                            </div>
                            <div className='py-3 flashcard'>
                                <div className='container background_box p-5 mb-5 flashcard'>
                                    <a href={`/titles/${ fourth }`}>
                                        <img id={ fourth } className='smaller_img py-3' src={ `../../photos/${ fourth }.jpg` } alt={`a movie poster for ${fourth}`} />
                                    </a>
                                    <p className='main_text py-3 m-0'>Somewhere in Antarctica, American researchers rescue a dog and take it back to camp.</p>
                                </div>
                            </div>
                            <div className='py-3 flashcard'>
                                <div className='container background_box p-5 mb-5 flashcard'>
                                    <a href={`/titles/${ fifth }`}>
                                        <img id={ fifth } className='smaller_img py-3' src={ `../../photos/${ fifth }.jpg` } alt={`a movie poster for ${fifth}`} />
                                    </a>
                                    <p className='main_text py-3 m-0'>A local Canadian radio host finds himself reporting on strange stories during a snowstorm.</p>
                                </div>
                            </div>
                            <div className='py-3 flashcard'>
                                <div className='container background_box p-5 mb-5 flashcard'>
                                    <a href={`/titles/${ sixth }`}>
                                        <img id={ sixth } className='smaller_img py-3' src={ `../../photos/${ sixth }.jpg` } alt={`a movie poster for ${sixth}`} />
                                    </a>
                                    <p className='main_text py-3 m-0'>A group of people record their life in an abandoned hotel while converting it into a haunted house attraction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        } else {
            return(
                <div id='Main'>
                <div id='regular_carousel' className='container d-block w-75 py-2'>
                    <h2 className='m-2'> { season } Recommendations </h2>
                        <div className='pt-4 pb-3'>
                            <div className='container row align-items-start background_box p-5 mb-5'>
                                <a href={`/titles/${ first }`} className='col'>
                                    <img id={ first } className='smaller_img py-1' src={ `../../photos/${ first }.jpg` } alt={`a movie poster for ${first}`} />
                                </a>
                                <p className='col m-auto main_text'>It's Christmas, and people are celebrating; but a sorority house is receiving disturbing phone calls.</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5'>
                                <p className='col m-auto main_text'>Following the Mexican-American War, a military regiment takes in a stranger on a snowy night.</p>
                                <a href={`/titles/${ second }`} className='col'>
                                    <img id={ second } className='smaller_img py-1' src={ `../../photos/${ second }.jpg` } alt={`a movie poster for ${second}`} />
                                </a>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                                <a href={`/titles/${ third }`} className='col'>
                                    <img id={ third } className='smaller_img py-1' src={ `../../photos/${ third }.jpg` } alt={`a movie poster for ${third}`} />
                                </a>
                                <p className='col m-auto main_text'>A father buys his son a rare pet as a Christmas present from a mysterious shop in Chinatown.</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                                <p className='col m-auto main_text'>Somewhere in Antarctica, American researchers rescue a dog and take it back to camp.</p>
                                <a href={`/titles/${ fourth }`} className='col'>
                                    <img id={ fourth } className='smaller_img py-1' src={ `../../photos/${ fourth }.jpg` } alt={`a movie poster for ${fourth}`} />
                                </a>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                                <a href={`/titles/${ fifth }`} className='col'>
                                    <img id={ fifth } className='smaller_img py-1' src={ `../../photos/${ fifth }.jpg` } alt={`a movie poster for ${fifth}`} />
                                </a>
                                <p className='col m-auto main_text'>A local Canadian radio host finds himself reporting on strange stories during a snowstorm.</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                                <p className='col m-auto main_text'>A group of people record their life in an abandoned hotel while converting it into a haunted house attraction.</p>
                                <a href={`/titles/${ sixth }`} className='col'>
                                    <img id={ sixth } className='smaller_img py-1' src={ `../../photos/${ sixth }.jpg` } alt={`a movie poster for ${sixth}`} />
                                </a>
                            </div>
                        </div>
                   
                </div>
            </div>
            );
        }

}

   

  


