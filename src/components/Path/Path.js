import React, {useEffect} from 'react';
const Path = () => {

    const page = window.location.pathname
    
    console.log(page)
    

    return (
        <div>
            <div className='max-w-main w-full mx-auto '>Главная</div>
        </div>
    );
};

export default Path;