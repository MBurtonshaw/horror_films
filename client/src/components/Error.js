import { React } from 'react';

export default function Error(props) {
    if (window.innerWidth < 768) {
        return (
            <div id='error_div' className='container m-auto text-center background_box_mini'>
                <div className='m-auto'>
                    <h1 className='py-2'>Error: </h1>
                    <h1 className='py-2'>{props.message}</h1>
                </div>
            </div>
        );
    }
    return (
        <div id='error_div' className='container m-auto p-5 text-center background_box'>
            <div className='p-5 m-auto'>
                <h1 className='py-2'>Error: </h1>
                <h1 className='py-2'>{props.message}</h1>
            </div>
        </div>
    );
}