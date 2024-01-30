import { React } from 'react';

export default function NotFound(props) {
    if (window.innerWidth < 768) {
        return(
            <div id='not_found_div' className='container m-auto text-center'>
                <div className='m-auto'>
                    <h1 className='py-2'>{props.message}</h1>
                    <h1 className='py-2'>Not Found</h1>
                </div>
            </div>
        );
    }
    return(
        <div id='not_found_div' className='container m-auto p-5 text-center background_box'>
            <div className='p-5 m-auto'>
                <h1 className='p-4'>{props.message}</h1>
                <h1 className='p-2'>Not Found</h1>
            </div>
        </div>
    );
}