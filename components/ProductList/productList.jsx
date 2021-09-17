import React from 'react';
import Carousel from 'react-multi-carousel';
import ProductItem from "./ProductItem";
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 2,
        slidesToSlide: 1
    }
};

const products = [
    {freeShipping: true, image: "/imgs/product1.jpg", productName: "Product Name 1", rating: 5, price: 24},
    {freeShipping: true, image: "/imgs/product2.jpg", productName: "Product Name 2", rating: 4, price: 450},
    {freeShipping: true, image: "/imgs/product3.jpg", productName: "Product Name 3", rating: 5, price: 12.356},
    {freeShipping: true, image: "/imgs/product4.jpg", productName: "Product Name 4", rating: 3, price: 2025}
]

const CustomRightArrow = ({onClick, ...rest}) => {
    return (
        <button className={"absolute right-0"} onClick={() => onClick()}>
            <Image src={"/svgs/right-arrow.svg"} width={12} height={12} alt={"right"}/>
        </button>
    )
};

const CustomLeftArrow = ({onClick, ...rest}) => {
    return (
        <button className={"absolute left-0"} onClick={() => onClick()}>
            <Image src={"/svgs/left-arrow.svg"} width={12} height={12} alt={"left"}/>
        </button>
    )
};

const ProductList = () => {
    return (
        <section className={"py-10 px-4 lg:py-20 lg:px-10"}>
            <h2 className={"text-2sm lg:text-2xl mb-4 lg:mb-10 uppercase font-openSans"}>You might also like</h2>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                arrows={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass="flex justify-between "
                itemClass="px-2"
                centerMode={false}
                removeArrowOnDeviceType={["tablet", "desktop"]}
                customRightArrow={<CustomRightArrow/>}
                customLeftArrow={<CustomLeftArrow/>}
            >
                {products.map(({freeShipping, image, productName, rating, price}) =>
                    <ProductItem freeShipping={freeShipping}
                                 image={image}
                                 productName={productName}
                                 rating={rating}
                                 price={price}
                                 key={productName}
                    />)}
            </Carousel>
        </section>
    )
};

export default ProductList;
