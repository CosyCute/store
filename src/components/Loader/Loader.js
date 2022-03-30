import React from 'react';

const Loader = ({ loader }) => {

    return (
        <div>
            {loader ? 
            <div className=' absolute left-0 top-0 h-screen w-screen flex flex-col justify-center bg-white z-50'>
                <div className='loader'></div>
            </div> : <></>}
        </div>
    );
};

export default Loader;