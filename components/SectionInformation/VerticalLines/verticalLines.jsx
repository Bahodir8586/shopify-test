import React from 'react';

const VerticalLines = () => {
    const numbers = [1, 2, 3]
    return (
        <>
            {numbers.map((number) => <div
                className={`w-0 h-full absolute left-${number}/${numbers.length + 1} lg:border-r border-gold opacity-20 scale-300 translate-y-full transform`}
                key={number}/>)}
        </>
    );
};

export default VerticalLines;
