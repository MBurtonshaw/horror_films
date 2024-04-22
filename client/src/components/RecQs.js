import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecQs(props) {

    let [period, setPeriod] = useState('');
    let [historical, setHistorical] = useState('');
    let [colonial, setColonial] = useState('');
    let [psychological, setPsychological] = useState('');
    let [creature, setCreature] = useState('');
    let [Canadian, setCanadian] = useState('');
    let [darkMagic, setDarkMagic] = useState('');
    let navigate = useNavigate();

    function setter() {
        if (period === '') {
            return (
                <div className='m-auto py-5 row justify-content-center'>
                    <div className='col py-5 curtain_div'></div>
                    <div className='col py-5 curtain_div'>
                        <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='classic'>Classic?</label>
                        <button className='row m-auto p-1 px-5' name='classic' onClick={() => { setPeriod('classic') }}>Choose</button>
                    </div>
                    <div className='col py-5 curtain_div'>
                        <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='modern'>Modern?</label>
                        <button className='row m-auto p-1 px-5' name='modern' onClick={() => { setPeriod('modern') }}>Choose</button>
                    </div>
                    <div className='col py-5 curtain_div'></div>
                </div>
            );
        }
        if (period === 'classic') {
            if (creature === '') {
                return (
                    <div className='m-auto py-5 row justify-content-center'>
                        <div className='col py-5 curtain_div'></div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='creature'>Creature?</label>
                            <button className='row m-auto p-1 px-5' name='creature' onClick={() => {
                                setCreature(true);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='real'>Human?</label>
                            <button className='row m-auto p-1 px-5' name='real' onClick={() => {
                                setCreature(false);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'></div>
                    </div>
                );
            } else if (creature === true) {
                return (
                    <div className='m-auto py-5 row justify-content-center'>
                        <div className='col py-5 curtain_div'></div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='Canadian'>Canadian?</label>
                            <button className='row m-auto p-1 px-5' name='Canadian' onClick={() => {
                                setCanadian(true);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='English'>English?</label>
                            <button className='row m-auto p-1 px-5' name='English' onClick={() => {
                                setCanadian(false);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'></div>
                    </div>
                );
            } else {
                return (
                    <div className='m-auto py-5 row justify-content-center'>
                        <div className='col py-5 curtain_div'></div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='darkMagic'>Dark Magic?</label>
                            <button className='row m-auto p-1 px-5' name='darkMagic' onClick={() => {
                                setDarkMagic(true);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='slasher'>Slasher?</label>
                            <button className='row m-auto p-1 px-5' name='slasher' onClick={() => {
                                setDarkMagic(false);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'></div>
                    </div>
                );
            }
        }
        if (period === 'modern') {
            if (historical === '') {
                return (
                    <div className='m-auto py-5 row justify-content-center'>
                        <div className='col py-5 curtain_div'></div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='periodPiece'>Historical?</label>
                            <button className='row m-auto p-1 px-5' name='periodPiece' onClick={() => {
                                setHistorical(true);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='currentTimes'>Current?</label>
                            <button className='row m-auto p-1 px-5' name='currentTimes' onClick={() => {
                                setHistorical(false);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'></div>
                    </div>
                );
            } else if (historical === true) {
                return (
                    <div className='m-auto py-5 row justify-content-center'>
                        <div className='col py-5 curtain_div'></div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='seventies'>Seventies America?</label>
                            <button className='row m-auto p-1 px-5' name='seventies' onClick={() => {
                                setColonial(false);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='colonial'>Colonial America?</label>
                            <button className='row m-auto p-1 px-5' name='colonial' onClick={() => {
                                setColonial(true);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'></div>
                    </div>
                );
            } else {
                return (
                    <div className='m-auto py-5 row justify-content-center'>
                        <div className='col py-5 curtain_div'></div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='psychological'>Psychological?</label>
                            <button className='row m-auto p-1 px-5' name='psychological' onClick={() => {
                                setPsychological(true);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'>
                            <label className='m-auto my-4 px-5 fs-2 curtain' htmlFor='metaphysical'>Metaphysical?</label>
                            <button className='row m-auto p-1 px-5' name='metaphysical' onClick={() => {
                                setPsychological(false);
                            }}>Choose</button>
                        </div>
                        <div className='col py-5 curtain_div'></div>
                    </div>
                );
            }
        }
    }

    function returner() {
        if (darkMagic !== '' || Canadian !== '' || colonial !== '' || psychological !== '')
            return (
                <button className='w-25 m-auto p-1' onClick={() => { navigate('/RecResults', { state: { period, historical, colonial, psychological, creature, Canadian, darkMagic } }) }}>Submit</button>
            );
    }

    return (
        <div id='RecQs' className='container mx-auto my-5 text-center background_box'>
            <h1>Recommendation</h1>
            {setter()}
            {returner()}
        </div>
    );
}