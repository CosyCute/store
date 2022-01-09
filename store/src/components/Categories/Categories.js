import React from 'react';
import CategoriesItem from './CategoriesItem';
const Categories = () => {

    const categories = ["Ортопедия", "Ортопедия", "Ортопедия", "Ортопедия"];

    return (
        <div className='mx-auto mt-8'>
            <div className="w-main flex justify-between">
                {categories.map(x =>
                    <CategoriesItem el={x} />
                )}
            </div>
        </div>
    );
};

export default Categories;