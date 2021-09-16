import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const ProductList = () => {
    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass="flex justify-between"
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="px-40"
            >
                <div className={"w-32 h-40 bg-red-600 text-white flex items-center justify-center"}>Item 1</div>
                <div className={"w-32 h-40 bg-red-600 text-white flex items-center justify-center"}>Item 2</div>
                <div className={"w-32 h-40 bg-red-600 text-white flex items-center justify-center"}>Item 3</div>
                <div className={"w-32 h-40 bg-red-600 text-white flex items-center justify-center"}>Item 4</div>
            </Carousel>;
        </div>
    )
};

export default ProductList;
