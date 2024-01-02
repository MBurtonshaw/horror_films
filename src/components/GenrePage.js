import { React } from 'react';

export default function GenrePage( props ) {
    if (props.genres.length < 1) {
        return null;
    } else {
        try {
            //mapping genre list from props
            for ( let i = 0; i < props.genres.length; i++ ) {
                //
                return(
                    <div id='GenrePage' className='container'>
                        <h1 className='m-5 pt-5'> Genres </h1>
                        <div className="card-group">
                            { 
                                props.genres.map(( genre, i ) => {
                                    let newGenre = genre.toLowerCase();
                                    if (window.innerWidth < 1001) {
                                        if (window.innerWidth < 768) {
                                            return(
                                                <div key={ i }  className='w-100 p-3 m-auto'>
                                                    <div className="card">
                                                        <a href={`/genres/${ genre }`}>
                                                            <img src={ `../../photos/genres/${ newGenre }.jpg` } className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{ genre }</h5>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return(
                                                <div key={ i }  className='w-75 p-3 m-auto'>
                                                    <div className="card">
                                                        <a href={`/genres/${ genre }`}>
                                                            <img src={ `../../photos/genres/${ newGenre }.jpg` } className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{ genre }</h5>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div key={ i } className='w-25'>
                                                <div className="card">
                                                    <a href={`/genres/${ genre }`}>
                                                        <img src={ `../../photos/genres/${ newGenre }.jpg` } className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{ genre }</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                );
            }
        } catch(err) {
            console.log(err.message);
        }
    }
}