import { React } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Search from './Search';

export default function Home( props ) {

    props.context.actions.getMessage().then(res => { console.log( res.message ) });

    function searchbar() {
        if (window.innerWidth > 767) {
            return(
                <div>
                    <Search movies={props.context.movies} genres={ props.genres }/>
                    <h1 className='my-5'> Horror Films </h1>
                </div>
            );
        } else if (window.innerWidth < 768) {
            return(
                <div>
                    <h1 className='my-5 pt-md-5'> Horror Films </h1>
                    <Search movies={props.context.movies} genres={ props.genres }/>
                </div>
            );
        }
    }
    return(
        <div id='home_div'>
            <Sidebar genres={ props.genres }/> 
            <div id='Home' className='container'>
                {searchbar()}
                <Main month={ props.month }/>
                <Footer />
            </div>
        </div>
    );
}