import Home from './components/Home';
import Title from './components/Title';
import TitlePage from './components/TitlePage';
import Genre from './components/Genre';
import GenrePage from './components/GenrePage';
import Header from './components/Header';
import Results from './components/Results';
import Decades from './components/Decades';
import DecadesPage from './components/DecadesPage';
import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import movies from './movies.json';

function App() {

const date = new Date();
const setter = date.getMonth();

let [ month, setMonth ] = useState('');
let [ types, setTypes ] = useState('');
let [ films, setFilms ] = useState('');
let [ urls, setUrls ] = useState('');

function removeDuplicates( arr ) { 
    let unique = []; 
    arr.forEach(element => { 
      if ( !unique.includes(element) ) { 
        unique.push( element ); 
      } 
  })
  return unique; 
} 

async function getData() {
  try {
    setMonth( setter + 1 );
    setFilms( movies.movies );
    let vidArray = [];

//////////////////////////////////
    for ( let i = 0; i < movies.movies.length; i++ ) {
    let subdata = movies.movies[i];
///////////////////////////////////
      for ( let k = 0; k < subdata.genres.length; k++ ) {
        vidArray.push( subdata.genres[k] );
        let genreArray = removeDuplicates( vidArray );
        setTypes( genreArray );
      }
    }
  } catch(err) {
    console.log(err.message);
  }
}

useEffect( () => { getData() }, [ setTypes, setFilms, setMonth, setUrls ] );

  return (
    <div id='app_div' className="App">
      <Header genres={ types } />
      <BrowserRouter>
        <Routes>
          <Route 
            strict path = '/' 
            element = {
              <Home month = { month } movies={ films } genres={ types } />
            } 
          />
          <Route
            path = '/titles/:url'
            element = {
              <Title movies = { films } urls={ urls } />
            }
          />
          <Route
            path = '/titles'
            element = {
              <TitlePage movies = { films } />
            }
          />
          <Route
            path = '/genres/:genre'
            element = {
              <Genre movies = { films } genres={ types }/>
            }
          />
          <Route
            path='/genres'
            element = {
              <GenrePage genres = { types }/>
            }
          />
          <Route
            path='/results/*'
            element = {
              <Results movies = { films }/>
            }
          />
          <Route
            path='/decades'
            element = {
              <DecadesPage
                movies = { films }
                decades = {
                  [
                    {'name': 'Classics', 'url' : 'classics'},
                    {'name': '1970s', 'url' : '70s'},
                    {'name': '1980s', 'url' : '80s'},
                    {'name': '1990s', 'url' : '90s'},
                    {'name': '2000s', 'url' : '00s'},
                    {'name': '2010s', 'url' : '10s'},
                    {'name': '2020s', 'url' : '20s'}
                  ]
                }
              />
            }
          />
          <Route
            path='/decades/:url'
            element = {
              <Decades
                movies = { films }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
