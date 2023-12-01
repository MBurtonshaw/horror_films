import { React } from 'react';
import Carousel from './Carousel';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Search from './Search';

export default function Home( props ) {
    
    function searchbar_lg() {
        if (window.innerWidth > 767) {
            return(
                <Search movies={props.movies} genres={ props.genres }/>
            );
        }
        
    }

    function searchbar_sm() {
        if (window.innerWidth < 768) {
            return(
                <Search movies={props.movies} genres={ props.genres }/>
            );
        }
        
    }

    return(
        
        <div id='home_div'>
            <Sidebar genres={ props.genres }/> 
            <div id='Home' className='container'>
                {searchbar_lg()}
                <h1 className='my-5 pt-5'> Horror Films </h1>
                <Carousel month={ props.month }/>
                {searchbar_sm()}
                <Footer />
            </div>
        </div>
    );
    
}