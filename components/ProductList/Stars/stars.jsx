import React from 'react';
import Image from "next/image"
const Stars = ({rating}) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div>
            {stars.map((number) => {
                if (number < rating + 0.5) {
                    return (
                        <Image
                            src={`/svgs/star.svg`}
                            width={16}
                            height={16}
                            alt="Star"
                            key={number}
                        />
                    );
                }
                return (
                    <></>
                );
            })}
        </div>
    );
};

export default Stars;
