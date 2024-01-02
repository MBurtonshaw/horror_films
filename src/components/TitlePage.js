import { React } from 'react';

export default function TitlePage(props) {
    if (props.movies.length < 1) {
        return null;
    } else {
        for ( let i = 0; i < props.movies.length; i++ ) {
          if (window.innerWidth < 768) {
            return(
                <div id='TitlePage' className='container m-auto pb-2 my-5'>
                    <h1 className='mt-5 mb-5 pt-1'>
                        Titles
                    </h1>
                    <div className='container w-75'>
                        <ul className="list-group list-group-flush">
                            { 
                                props.movies.map(( movie, i ) => {
                                    if (movie.id < 7) {
                                        return(
                                            <li key={ i } className='list-group-item pt-3 mb-3'>
                                                <a href={ `/titles/${movie.url}` }>
                                                    { movie.title }
                                                </a>
                                            </li>
                                        );
                                    } else {
                                        return(
                                            <li key={ i } className='list-group-item pt-3 mb-3 flashcard'>
                                                <a href={ `/titles/${movie.url}` }>
                                                    { movie.title }
                                                </a>
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            );
          } else {
            return(
                <div id='TitlePage' className='container m-auto pb-2 my-5 w-50'>
                    <h1 className='my-4 mx-1'>
                        Titles
                    </h1>
                    <div className='container w-75'>
                        <ul className="list-group list-group-flush">
                            { 
                                props.movies.map(( movie, i ) => {
                                    if (movie.id < 12) {
                                        return(
                                            <li key={ i } className='list-group-item pt-3 mb-3'>
                                                <a href={ `/titles/${movie.url}` }>
                                                    { movie.title }
                                                </a>
                                            </li>
                                        );
                                    } else {
                                        return(
                                            <li key={ i } className='list-group-item pt-3 mb-3 flashcard'>
                                                <a href={ `/titles/${movie.url}` }>
                                                    { movie.title }
                                                </a>
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            );
          }

          
        }
    }
}