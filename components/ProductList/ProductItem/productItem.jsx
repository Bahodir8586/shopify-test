import React from 'react';
import Image from "next/image";
import Stars from "../Stars";
import NumberFormat from "react-number-format";

const ProductItem = ({freeShipping, image, productName, rating, price}) => {
    return (
        <div className={"relative"}>
            {freeShipping && <span
                className={"font-openSans z-10 absolute top-2 left-2 bg-white text-4xs lg:text-2xs text-center px-2 py-1"}>Free shipping</span>}
            <div className={""}>
                <img src={image} className={"w-full object-cover"} alt={productName}/>
            </div>
            <h3 className={"font-oswald uppercase font-light text-2xs my-2"}>{productName}</h3>
            <Stars rating={rating}/>
            <div className={"font-oswald font-light text-darkGray text-2xs my-2"}>
                <NumberFormat
                    value={price} prefix={"$ "}
                    thousandsGroupStyle="thousand"
                    decimalSeparator="."
                    type="text"
                    decimalScale={2}
                    fixedDecimalScale={true}/>
            </div>
        </div>
    );
};

export default ProductItem;
