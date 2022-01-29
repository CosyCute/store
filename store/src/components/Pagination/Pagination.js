import React, {useState, useEffect} from 'react';

const Pagination = ({page, setPage, filterArr}) => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        let newArr = new Array (Math.ceil(filterArr.length / 20))
        for (let i = 0; i < newArr.length; i++)
        newArr[i] = i + 1
        setArr(newArr)
    }, [filterArr]);

    return (
        <div>
            <div className='flex'>
                {arr.map(x => 
                <div onClick={() => setPage(x)} key={x} className={`${x === page ? 'bg-purple' : 'border-2 border-purple'}
                cursor-pointer mx-2 mt-10 h-33px w-33px rounded-5px text-center flex flex-col justify-center`}>
                    {x}
                </div>)}
            </div>
        </div>
    );
};

export default Pagination;