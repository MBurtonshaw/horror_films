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
            if (window.innerWidth < 768) {
                return (
                    <div className='m-auto'>
                        <div className=' curtain_div py-5'>
                            <div className='row justify-content-center d-flex mx-5'>
                                <div className='col m-4 curtain blur flex-item'>
                                    <label className='m-auto m-3 px-5 fs-2' htmlFor='classic'>Classic?</label>
                                    <button className='row m-auto m-3 p-1 px-5' name='classic' onClick={() => { setPeriod('classic') }}>Choose</button>
                                </div>
                                <div className='col m-4 curtain blur flex-item'>
                                    <label className='m-auto m-3 px-5 fs-2' htmlFor='modern'>Modern?</label>
                                    <button className='row m-auto m-3 p-1 px-5' name='modern' onClick={() => { setPeriod('modern') }}>Choose</button>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            }
            return (
                <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='classic'>Classic?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='classic' onClick={() => { setPeriod('classic') }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='modern'>Modern?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='modern' onClick={() => { setPeriod('modern') }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (period === 'classic') {
            if (creature === '') {
                if (window.innerWidth < 768) {
                    return (
                        <div className='m-auto'>
                            <div className=' curtain_div py-5'>
                                <div className='row justify-content-center d-flex mx-5'>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='creature'>Creature?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='creature' onClick={() => { setCreature(true) }}>Choose</button>
                                    </div>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='human'>Human?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='human' onClick={() => { setCreature(false) }}>Choose</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='creature'>Creature?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='creature' onClick={() => { setCreature(true) }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='human'>Human?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='human' onClick={() => { setCreature(false) }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            } else if (creature === true) {
                if (window.innerWidth < 768) {
                    return (
                        <div className='m-auto'>
                            <div className=' curtain_div py-5'>
                                <div className='row justify-content-center d-flex mx-5'>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='canadian'>Canadian?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='canadian' onClick={() => { setCanadian(true) }}>Choose</button>
                                    </div>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='english'>English?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='english' onClick={() => { setCanadian(false) }}>Choose</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='canadian'>Canadian?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='canadian' onClick={() => { setCanadian(true) }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='english'>English?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='english' onClick={() => { setCanadian(false) }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            } else {
                if (window.innerWidth < 768) {
                    return (
                        <div className='m-auto'>
                            <div className=' curtain_div py-5'>
                                <div className='row justify-content-center d-flex mx-5'>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='darkMagic'>Dark Magic?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='darkMagic' onClick={() => { setDarkMagic(true) }}>Choose</button>
                                    </div>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='slasher'>Slasher?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='slasher' onClick={() => { setDarkMagic(false) }}>Choose</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='darkMagic'>Dark Magic?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='darkMagic' onClick={() => { setDarkMagic(true) }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='slasher'>Slasher?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='slasher' onClick={() => { setDarkMagic(false) }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        if (period === 'modern') {
            if (historical === '') {
                if (window.innerWidth < 768) {
                    return (
                        <div className='m-auto'>
                            <div className=' curtain_div py-5'>
                                <div className='row justify-content-center d-flex mx-5'>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='historical'>Historical?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='historical' onClick={() => { setHistorical(true) }}>Choose</button>
                                    </div>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='current'>Current?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='current' onClick={() => { setHistorical(false) }}>Choose</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='historical'>Historical?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='historical' onClick={() => { setHistorical(true) }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='current'>Current?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='current' onClick={() => { setHistorical(false) }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            } else if (historical === true) {
                if (window.innerWidth < 768) {
                    return (
                        <div className='m-auto'>
                            <div className=' curtain_div py-5'>
                                <div className='row justify-content-center d-flex mx-5'>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='seventies'>Seventies America?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='seventies' onClick={() => { setColonial(false) }}>Choose</button>
                                    </div>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='colonial'>Colonial America?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='colonial' onClick={() => { setColonial(true) }}>Choose</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='seventies'>Seventies America?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='seventies' onClick={() => { setColonial(false) }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='colonial'>Colonial America?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='colonial' onClick={() => { setColonial(true) }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            } else {
                if (window.innerWidth < 768) {
                    return (
                        <div className='m-auto'>
                            <div className=' curtain_div py-5'>
                                <div className='row justify-content-center d-flex mx-5'>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='psychological'>Psychological?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='psychological' onClick={() => { setPsychological(true) }}>Choose</button>
                                    </div>
                                    <div className='col m-4 curtain blur flex-item'>
                                        <label className='m-auto m-3 px-5 fs-2' htmlFor='metaphysical'>Metaphysical?</label>
                                        <button className='row m-auto m-3 p-1 px-5' name='metaphysical' onClick={() => { setPsychological(false) }}>Choose</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                }
                return (
                    <div className='m-auto py-5'>
                    <div className=' curtain_div py-5'>
                        <div className='row justify-content-center d-flex mx-5'>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='psychological'>Psychological?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='psychological' onClick={() => { setPsychological(true) }}>Choose</button>
                            </div>
                            <div className='col m-5 p-3 curtain blur flex-item'>
                                <label className='m-auto m-3 px-5 fs-2' htmlFor='metaphysical'>Metaphysical?</label>
                                <button className='row m-auto m-3 p-1 px-5' name='metaphysical' onClick={() => { setPsychological(false) }}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
    }

    function returner() {
        if (darkMagic !== '' || Canadian !== '' || colonial !== '' || psychological !== '')
            return (
                <button className='w-25 m-auto p-1' onClick={() => { navigate('/RecResults', { state: { historical, colonial, psychological, creature, Canadian, darkMagic } }) }}>Submit</button>
            );
    }

    if (window.innerWidth < 768) {
        return (
            <div id='RecQs' className='container mx-auto py-5 my-5 text-center background_box_mini'>
                <h1>Recommendation</h1>
                {setter()}
                {returner()}
            </div>
        );
    } else {
        return (
            <div id='RecQs' className='container mx-auto py-5 my-5 text-center background_box'>
                <h1>Recommendation</h1>
                {setter()}
                {returner()}
            </div>
        );
    }
}