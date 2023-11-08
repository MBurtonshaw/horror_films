import { React } from 'react';

export default function DecadesPage(props) {
    //mapping movie list based on props
    if (props.movies.length < 1) {
        return null;
    } else {
        try {
            //
            return( 
                <div id='GenrePage' className='container'>
                    <h1 className='p-5 m-5'> Decades </h1>
                    <div className="card-group">
                        { 
                            props.decades.map(( item, i ) => {
                                return(
                                    <div key={ i } className='w-25'>
                                        <div className="card">
                                            <a href={`/decades/${ item.url }`}>
                                                <img src={ `../../photos/${ item.name }.jpg` } className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{ item.name }</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        } catch(err) {
            console.log(err.message);
        }
    }
}