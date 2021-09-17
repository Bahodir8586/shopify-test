import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from "./ProductItem";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const products = [
    {freeShipping: true, image: "/imgs/product1.jpg", productName: "Product Name 1", rating: 5, price: 24},
    {freeShipping: true, image: "/imgs/product2.jpg", productName: "Product Name 2", rating: 4, price: 45},
    {freeShipping: true, image: "/imgs/product3.jpg", productName: "Product Name 3", rating: 5, price: 12},
    {freeShipping: true, image: "/imgs/product4.jpg", productName: "Product Name 4", rating: 3, price: 35}
]

const ProductList = () => {
    return (
        <div className={"py-20 px-10"}>
            <h2 className={"text-2xl mb-10 uppercase font-openSans"}>You might also like</h2>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                arrows={false}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass="flex justify-between "
                itemClass="px-2"
                centerMode={false}
            >
                {products.map(({freeShipping, image, productName, rating, price}) =>
                    <ProductItem freeShipping={freeShipping}
                                 image={image}
                                 productName={productName}
                                 rating={rating}
                                 price={price}
                                 key={productName}
                    />)}
            </Carousel>;
        </div>
    )
};

export default ProductList;
