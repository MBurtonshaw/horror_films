import { React, useEffect } from 'react';

export default function Search(props) {

/************************************************************************************************************************
    STATE AND ASYNC FUNCTIONS
************************************************************************************************************************/

     //sorting movies by title
    async function loader() {
        let waiter = await props.movies;
        if (waiter === undefined) {
            return null;
        } else {
            try {
                for ( let i = 0; i < waiter.length; i++ ) {
                    titleArray.push( waiter[i] );
                }
            } catch(err) {
                console.log(err.message);
            }
        }
    }

    //function to change url based on search term from state
    async function clicker( ) {
        const searcher = document.getElementById('searchBar');
        try {
            window.location.href = `/results/${searcher.value}`;
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(() => { loader() }, []);

/************************************************************************************************************************
    FUNCTIONS
************************************************************************************************************************/
    //function to append a message when the searchbar is focused upon/////////////////////////////////////
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const appendAlert = (message, type) => {

    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div class='thinner'>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    if (alertPlaceholder.childElementCount === 0) {
        alertPlaceholder.append(wrapper);
    }
}
    const alertTrigger = document.getElementById('searchBar');
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert(
                `Please replace any spaces in your search term with an underscore ( _ )`, 'dark')
        })
    }  //////////////////////////////////////////////////////////////////////////////////////////////////////

    let titleArray = [];

    //logging search value and setting to uppercase


/************************************************************************************************************************
    RENDER
************************************************************************************************************************/
    return(
        <div id='Search' className='container pt-3'>
            <input id='searchBar' name='searchInput' type='text' ></input>
            <button id='searchButton' htmlFor='searchInput' onClick={() => clicker()}> Find </button>
            <div id="liveAlertPlaceholder"></div>
        </div>
    );
}