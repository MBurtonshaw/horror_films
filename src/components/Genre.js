import { React } from 'react';
import { useParams } from 'react-router-dom';

export default function Genre( props ) {

    let { genre } = useParams();
    let chosen = [];

    //function to sort movies based on matching url
    function sort() {
        for ( let i = 0; i < props.movies.length; i++ ) {
            if ( props.movies[i].genres.includes( genre ) ) {
                chosen.push( props.movies[i] );
            }
        }
    }

    if (props.movies.length < 1) {
        return null;
    } else {
        try {
            sort();
            //
            return(
                <div id='Genre' className='container w-25'>
                    <div className='m-5'>
                        <h1 className='m-5 pt-5'>
                            { genre }
                        </h1>
                    </div>
                    <div className='container'>
                        <img src='' />
                    </div>
                    <h5 className='p-3'>
                        List of Titles
                    </h5>
                    <div className='container pb-4 mb-4'>
                        <ul className='list-group list-group-flush'>
                            {
                                chosen.map(
                                    ( item, i ) => {
                                        return(
                                            <li key={ i } className='list-group-item pt-3 mb-3'>
                                                <a href={ `/titles/${item.url}` }>
                                                    { item.title }
                                                </a>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
            );
        } catch(err) {
            console.log(err.message);
        }
    }
}