import React, {useState} from 'react';

const DropList = ({ title, filters}) => {

    const [dropList, setDropList] = useState(false) 

    return (
        <div className='my-2'>
            <div className='font-semibold text-18px' onClick={() => setDropList(!dropList)}>
                {dropList ? "-" : "+"}{title}
                </div>
            <div className={`${dropList ? 'block' :'hidden' } flex flex-col max-h-300px overflow-hidden overflow-y-scroll`}>
                {filters.map(x =>
                    <label key={x.name} htmlFor={x.name} className='flex my-2 block'>
                        <input name={title} className='my-auto' type="checkbox" id={x.name}/>
                        <div className='ml-8px'>{x.name}</div>
                    </label>)}
            </div>
        </div>
    );
};

export default DropList;