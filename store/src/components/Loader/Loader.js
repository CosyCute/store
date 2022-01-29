import React from 'react';

const Loader = ({loader}) => {

    return (
        <div>
            {loader ?
                <div className='absolute left-0 top-0 h-screen w-screen flex flex-col justify-center bg-white z-50'>
                    <img alt="loader" className='h-700px w-500px mx-auto'
                        src='https://assets.materialup.com/uploads/5a6ee455-7b0e-4a98-9ea7-afcc9e8188ce/preview.gif' />
                </div> : <></>}
        </div>
    );
};

export default Loader;