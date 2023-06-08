import { React } from 'react';
import movies from '../movies.json';

export default function Home() {
    console.log(movies.movies[0]);
    const date = new Date();
    const month = date.getMonth();



        if (month === 9 || month === 10 || month === 11) { 
        {/* Sept-Nov */}
        {/* Halloween Season */}
        return(
            <div id='Home' className='container'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href='/'>
                        <img className='smaller_img' src={'../../photos/john_carpenter.jpg'} alt='a black and white photo of John Carpenter'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>John Carpenter</h5>
                            <p>Check out some of John Carpenter's classic works</p>
                        </div>
                    </a>
                    </div>
                    <div className="carousel-item">
                    <a href='/'>
                        <img className='smaller_img' src={'../../photos/jack-o-lantern.jpg'} alt='a lit jack-o-lantern with a smile'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Halloween</h5>
                            <p>Explore the spooky season</p>
                        </div>
                    </a>
                    </div>
                    <div className="carousel-item">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/occult.png'} alt='candles, books, and written symbols'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>The Occult</h5>
                                <p>Discover hidden knowledge</p>
                            </div>
                        </a>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
    );}

    if (month === 12 || month === 1 || month === 2) {   
        {/* Dec-Feb */}
        {/* Fall/Winter Season */}
        return(
            <div id='Home' className='container'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/hitchcock.jpeg'} alt='a black and white photo of Alfred Hitchcock'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Alfred Hitchcock</h5>
                                <p>Check out some of Alfred Hitchcock's classic works</p>
                            </div>
                        </a>
                        </div>
                        <div className="carousel-item">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/winter.jpg'} alt='a large building and truck covered in snow'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Winter</h5>
                                <p>What lurks in the cold?</p>
                            </div>
                        </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/'>
                                <img className='smaller_img' src={'../../photos/foreign.png'} alt='a girl hidden by her hair is crawling out of a tv'/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Foreign Films</h5>
                                    <p>Horror from other cultures</p>
                                </div>
                            </a>
                        </div>
                        
                    </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
   
    );}

    if (month === 3 || month === 4 || month === 5 ) {  
        {/* Mar-May */}
        {/* Spring/Nature Season */}
        return(
            <div id='Home' className='container'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/wes_craven.jpg'} alt='a closeup photo of Wes Craven'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Wes Craven</h5>
                                <p>Check out some of Wes Craven's classic works</p>
                            </div>
                        </a>
                        </div>
                        <div className="carousel-item">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/forest.jpeg'} alt='a gloomy looking forest'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Scary Nature</h5>
                                <p>Let's go camping</p>
                            </div>
                        </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/'>
                                <img className='smaller_img' src={'../../photos/alien_horror.jpg'} alt='a large eyed grey alien'/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Alien Films</h5>
                                    <p>Horror from other worlds</p>
                                </div>
                            </a>
                        </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
    );}

    if (month === 6 || month === 7 || month === 8 ) {    
        {/* June-Aug */}
        {/* Bright/Summer Season */}
        return(
            <div id='Home' className='container'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/desert.jpg'} alt='some bare trees in a hot looking desert'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Desert Horror</h5>
                                <p>Sun and sand</p>
                            </div>
                        </a>
                        </div>
                        <div className="carousel-item">
                        <a href='/'>
                            <img className='smaller_img' src={'../../photos/ocean.jpg'} alt='a deep blue wave and open water under a grey sky'/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Aquatic Horror</h5>
                                <p>Don't go swimming</p>
                            </div>
                        </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/'>
                                <img className='smaller_img' src={'../../photos/monster.jpeg'} alt='a black and white image of a disturbing smiling man'/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Monster Films</h5>
                                    <p>What is it?</p>
                                </div>
                            </a>
                        </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
   
    );}
}