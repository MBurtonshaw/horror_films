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
    

        if (1===2) {
            return('');
        } else if (1===3) {
            return('');
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
                                <p className='col m-auto main_text'>It's Christmas-time; people are celebrating, but a sorority house is receiving some disturbing phone calls. A widely influential Canadian classic.</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5'>
                                <p className='col m-auto main_text'>Following the Mexican-American War, a military regiment survives at a snowy outpost somewhere in the Sierra Nevada mountains... until a stranger arrives at night.</p>
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
                                <p className='col m-auto main_text'>A father buys his son a rare pet as a Christmas present from a mysterious shop in Chinatown. The Mogwai is cute and friendly, but it's got a set of rules to be followed.</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                                <p className='col m-auto main_text'>Somewhere in Antarctica, American researchers come across a Norwegian scientist firing a gun at a dog. The Americans defend the dog and decide to take it back to their research base. </p>
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
                                <p className='col m-auto main_text'>It's a snowstorm, and the radio host in a small Canadian town has an odd encounter with a babbling woman while on his way to work. He soon finds himself reporting on some strange stories.</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                                <p className='col m-auto main_text'>A group of people record video of their life in an abandoned hotel while they attempt to turn it into a haunted house attraction. But local legend says it's already haunted.</p>
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

   

  


