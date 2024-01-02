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
                    <h1 className='m-5 pt-5'> Decades </h1>
                    <div className="card-group">
                        { 
                            props.decades.map(( item, i ) => {
                                if (window.innerWidth < 1001) {
                                    if (window.innerWidth < 768) {
                                        return(
                                            <div key={ i } className='w-100 p-3 m-auto'>
                                                <div className="card">
                                                    <a href={`/decades/${ item.url }`}>
                                                        <img src={ `../../photos/decades/${ item.name }.jpg` } className="card-img-top" alt={`a description of ${item.name} horror`} />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{ item.name }</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return(
                                            <div key={ i } className='w-75 p-3 m-auto'>
                                                <div className="card">
                                                    <a href={`/decades/${ item.url }`}>
                                                        <img src={ `../../photos/decades/${ item.name }.jpg` } className="card-img-top" alt={`a description of ${item.name} horror`} />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{ item.name }</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    }
                                }
                                 else {
                                    return(
                                        <div key={ i } className='w-25'>
                                            <div className="card">
                                                <a href={`/decades/${ item.url }`}>
                                                    <img src={ `../../photos/decades/${ item.name }.jpg` } className="card-img-top" alt={`a description of ${item.name} horror`} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{ item.name }</h5>
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
        } catch(err) {
            console.log(err.message);
        }
    }
}