import Home from './components/Home';
import Title from './components/Title';
import TitlePage from './components/TitlePage';
import Genre from './components/Genre';
import GenrePage from './components/GenrePage';
import Header from './components/Header';
import Results from './components/Results';
import Decades from './components/Decades';
import DecadesPage from './components/DecadesPage';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import movies from './movies.json';

function App() {

/*
Greens:
rgb(50, 123, 66)
rgb(189, 252, 203)
rgb(137, 207, 152)
rgb(80, 156, 96)
rgb(32, 102, 47)
rgb(12, 77, 26)
rgb(2, 56, 14)

Reds:
rgb(163, 75, 66)
rgb(250, 197, 197)
rgb(217, 135, 126)
rgb(194, 105, 95)
rgb(120, 39, 30)
rgb(59, 13, 7)
rgb(31, 3, 3)

Blues:
rgb(55, 60, 112)
rgb(214, 217, 252)
rgb(140, 145, 191)
rgb(87, 92, 145)
rgb(33, 38, 92)
rgb(19, 24, 74)
rgb(1, 6, 56)

Yellows:
rgb(163, 136, 66)
rgb(252, 226, 157)
rgb(212, 185, 117)
rgb(186, 160, 94)
rgb(143, 114, 42)
rgb(105, 79, 16)
rgb(71, 51, 1)

Greys:
rgb(144, 150, 155)
rgb(223, 232, 240)
rgb(201, 210, 217)
rgb(180, 188, 194)
rgb(107, 111, 115)
rgb(69, 72, 74)
rgb(38, 39, 41)
*/

// Initializing state
let [ month, setMonth ] = useState('');
let [ types, setTypes ] = useState('');
let [ films, setFilms ] = useState('');

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
    let vidArray = [];

    // Setting month to state
    const date = new Date();
    const setter = date.getMonth();
    setMonth( setter + 1 );

    //Setting movies to state as 'films'
    setFilms( movies.movies );

    // First loop is to parse through individual movies
    for ( let i = 0; i < movies.movies.length; i++ ) {
    let subdata = movies.movies[i];
    
    // Second loop is to parse through each movies' genres
      for ( let k = 0; k < subdata.genres.length; k++ ) {
        vidArray.push( subdata.genres[k] );

        // Genres are set to state as 'types' after duplicates are removed
        let genreArray = removeDuplicates( vidArray );
        setTypes( genreArray );
      }
    }
  } catch(err) {
    console.log(err.message);
  }
}

useEffect( () => { getData() }, [ setTypes, setFilms, setMonth ] );

  return (

    // Routing and passing props
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
              <Title movies = { films } />
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
          <Route
            path='/register'
            element = {
              <Register />
            }
          />
          <Route
            path='login'
            element = {
              <Login />
            }
          />
          <Route
            path='*'
            element = {
              <NotFound />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
