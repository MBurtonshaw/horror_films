import { React } from 'react';

export default function TitlePage(props) {
    if (props.movies.length < 1) {
        return null;
    } else {
        for ( let i = 0; i < props.movies.length; i++ ) {
            try {
                return(
                    <div id='TitlePage' className='container w-25'>
                        <h1 className='m-5 pt-5'>
                            Titles
                        </h1>
                        <div className='container pb-4 mb-4'>
                            <ul className="list-group list-group-flush">
                                { 
                                    props.movies.map(( movie, i ) => {
                                        return(
                                            <li key={ i } className='list-group-item pt-3 mb-3'>
                                                <a href={ `/titles/${movie.url}` }>
                                                    { movie.title }
                                                </a>
                                            </li>
                                        );
                                    })
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
}