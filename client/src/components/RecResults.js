import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RecResults(props) {

    let [movies, setMovies] = useState('');
    let [historical, setHistorical] = useState('');
    let [colonial, setColonial] = useState('');
    let [psychological, setPsychological] = useState('');
    let [creature, setCreature] = useState('');
    let [Canadian, setCanadian] = useState('');
    let [darkMagic, setDarkMagic] = useState('');

    //sort movies here based on props passed vs genres
    //filter until one or two movies are left
    async function getData() {
        let history = await location.state.historical;
        let colony = await location.state.colonial;
        let psych = await location.state.psychological;
        let creat = await location.state.creature;
        let Canada = await location.state.Canadian;
        let DMagic = await location.state.darkMagic;
        setHistorical(history);
        setColonial(colony);
        setPsychological(psych);
        setCreature(creat);
        setCanadian(Canada);
        setDarkMagic(DMagic);
        let films = await props.context.data.movies.movies;
        setMovies(films);
    }

    useEffect(() => { getData() }, [setMovies]);

    let location = useLocation();

    function returner() {
        if (creature === false && darkMagic === false) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/the_sitter'>
                        <img className='p-3' src='../photos/titles/the_sitter_mini.jpg' alt='movie poster for The Sitter' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>The Sitter</label>
                    </a>
                </div>
            );
        }
        if (creature === true && Canadian === true) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/shivers'>
                        <img className='p-3' src='../photos/titles/shivers_mini.jpg' alt='movie poster for Shivers' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>Shivers</label>
                    </a>
                </div>
            );
        }
        if (creature === false && darkMagic === true) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/prince_of_darkness'>
                        <img className='p-3' src='../photos/titles/prince_of_darkness_mini.jpg' alt='movie poster for Prince of Darkness' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>Prince of Darkness</label>
                    </a>
                </div>
            );
        }
        if (historical === false && psychological === false) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/the_mist'>
                        <img className='p-3' src='../photos/titles/the_mist_mini.jpg' alt='movie poster for The Mist' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>The Mist</label>
                    </a>
                </div>
            );
        }
        if (creature === true && Canadian === false) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/curse_of_frankenstein'>
                        <img className='p-3' src='../photos/titles/curse_of_frankenstein_mini.jpg' alt='movie poster for The Curse of Frankenstein' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>The Curse of Frankenstein</label>
                    </a>
                </div>
            );
        }
        if (historical === true && colonial === true) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/the_vvitch'>
                        <img className='p-3' src='../photos/titles/the_vvitch_mini.jpg' alt='movie poster for The Witch' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>The VVitch</label>
                    </a>
                </div>
            );
        }
        if (historical === true && colonial === false) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/black_phone'>
                        <img className='p-3' src='../photos/titles/black_phone_mini.jpg' alt='movie poster for Black Phone' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>Black Phone</label>
                    </a>
                </div>
            );
        }
        if (historical === false && psychological === true) {
            return (
                <div className='background_box p-5 my-5'>
                    <h1 className='p-2'>Recommendation</h1>
                    <a href='/titles/creep'>
                        <img className='p-3' src='../photos/titles/creep_mini.jpg' alt='movie poster for Creep' />
                        <label className='w-100 m-auto fs-2' htmlFor='thumbnail'>Creep</label>
                    </a>
                </div>
            );
        }
    }

    return (
        <div>
            {returner()}
        </div>
    );
}