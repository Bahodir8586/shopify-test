import React from 'react';
import VerticalLines from "./VerticalLines";

const SectionInformation = () => {
    return (
        <section className={"bg-black lg:px-10 px-4 text-white h-full"}>
            <VerticalLines/>
            <div className={"lg:min-h-screen flex py-10 font-openSans text-2xs lg:text-2sm lg:flex-row flex-col"}>
                <div className={"w-full lg:px-10"}>
                    <h1 className={"text-3base lg:text-2xl uppercase font-semibold lg:font-normal mb-5 lg:mb-32 lg:mt-4"}>Rubber Hex Dumbbells</h1>
                    <p className={"mb-10 lg:mb-20"}>
                        Again Faster® Rubber Hex Dumbbells offer one of the most effective ways to add variance to any
                        training program. Functional dumbbell movements cultivate stability, coordination and strength in
                        ways that cannot be achieved using a barbell. Lighter dumbbells are great tools for accommodating
                        athletes with an injury or those not yet comfortable with a bar. Whether you are making your first
                        equipment purchase or looking to expand your gym&apos;s capabilities, making dumbbells a priority will
                        take your training to the next level.
                    </p>
                    <p>Need a way to organize your weights? Check out some of our Storage Options.</p>
                </div>
                <div className={"w-full"}>
                    <img src={"/imgs/info-1.png"} className={"object-cover w-full h-full"}/>
                </div>
            </div>

            <div className={"lg:min-h-screen flex py-10 lg:py-20 lg:flex-row flex-col"}>
                <div className={"w-full mb-6 lg:mb-0"}>
                    <img src={"/imgs/info-2.png"} className={"object-cover w-full h-full"}/>
                </div>
                <div className={"text-2xs lg:text-2base w-full"}>
                    <div className={"lg:px-32"}>
                        <h2 className={"font-openSans lg:mt-24 mb-4 lg:mb-6"}>Here’s what you need to know about our dumbbells</h2>
                        <ul className={"lg:font-bold font-openSans"}>
                            <li className={"mb-4 flex"}>
                                <span className={"text-gold mr-2"}>/</span>
                                Texture design for better grip during strength and endurance work
                            </li>
                            <li className={"mb-4 flex"}>
                                <span className={"text-gold mr-2"}>/</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>
                            <li className={"mb-4 flex"}>
                                <span className={"text-gold mr-2"}>/</span>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"lg:min-h-screen flex py-10 lg:py-20 lg:flex-row flex-col"}>
                <div className={"w-full"}>
                    <h2 className={"text-2xl lg:text-3xl font-bold lg:px-10 mb-6 lg:mt-24 lg:mr-32 uppercase"}>Perfect for indoor and outdoor workouts</h2>
                </div>
                <div className={"w-full"}>
                    <img src={"/imgs/info-3.png"} className={"object-cover w-full h-full"}/>
                </div>
            </div>
        </section>
    );
};

export default SectionInformation;
