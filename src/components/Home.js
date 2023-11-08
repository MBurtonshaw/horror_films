import { React } from 'react';
import Carousel from './Carousel';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Search from './Search';

export default function Home( props ) {
    
    return(
        <div id='home_div'>
            <Sidebar genres={ props.genres }/> 
            <div id='Home' className='container'>
                <Search movies={props.movies} genres={ props.genres }/>
                <h1 className='my-5 pt-5'> Horror Films </h1>
                <Carousel month={ props.month }/>
            </div>
            <Footer />
        </div>
    );
}