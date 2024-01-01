import { React } from 'react';
import { useParams } from 'react-router-dom';

export default function Genre( props ) {

    let { genre } = useParams();
    let chosen = [];

    //function to sort movies based on matching url
    function sort() {
        try {
            for ( let i = 0; i < props.movies.length; i++ ) {
                if ( props.movies[i].genres.includes( genre ) ) {
                    chosen.push( props.movies[i] );
                }
            }
        } catch(err) {
            console.log(err.message)
        }
    }

    if (props.movies.length < 1) {
        return null;
    } else {
        sort();
        return(
            <div id='Genre' className='container m-auto mt-5'>
                    <div className='m-5'>
                        <h1 className=''>
                            Genre: { genre }  
                        </h1>
                    </div>
               
                    <div className='container pb-4 mb-4 w-75 p-2'>
                        <ul className='list-group list-group-flush'>
                            {
                                chosen.map(
                                    ( item, i ) => {
                                        if (i > 12) {
                                            return(
                                                <li key={ i } className='list-group-item pt-3 mb-3 flashcard'>
                                                    <a href={ `/titles/${item.url}` }>
                                                        { item.title }
                                                    </a>
                                                </li>
                                            )
                                        } else {
                                            return(
                                                <li key={ i } className='list-group-item pt-3 mb-3'>
                                                    <a href={ `/titles/${item.url}` }>
                                                        { item.title }
                                                    </a>
                                                </li>
                                            )
                                        }
                                        
                                    }
                                )
                            }
                        </ul>
                    </div>
                    
            </div>
        );
    }
}