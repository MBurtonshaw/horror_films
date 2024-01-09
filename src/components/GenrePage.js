import { React } from 'react';

export default function GenrePage( props ) {
    if (props.genres.length < 1) {
        return null;
    } else {
        return(
            <div id='GenrePage' className='container'>
                <h1 className='my-5 pt-5'> Genres </h1>
                <div className="card-group">
                    { 
                        props.genres.map(( genre, i ) => {
                            let newGenre = genre.toLowerCase();
                                    
                            //function to return contents of the cards and leave the innderWidth conditons below more concise
                            function fill_in() {
                                return(
                                    <div className="card">
                                        <a href={`/genres/${ genre }`}>
                                            <img src={ `../../photos/genres/${ newGenre }.jpg` } className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{ genre }</h5>
                                            </div>
                                        </a>
                                    </div>
                                );
                            }

                            //optimizing widths for different screen sizes
                            if (window.innerWidth < 768) {
                                return(
                                    <div key={ i }  className='w-100 p-3 m-auto'>
                                        {fill_in()}
                                    </div>
                                );
                            } 
                            if (window.innerWidth < 992) {
                                return(
                                    <div key={ i }  className='w-75 p-3 m-auto'>
                                        {fill_in()}
                                    </div>
                                );
                            }
                            else {
                                return(
                                    <div key={ i } className='w-25'>
                                        {fill_in()}
                                    </div>
                                );
                            }
                        })
                    }
            </div>
        </div>
        )
    }
}
