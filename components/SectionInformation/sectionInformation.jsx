import React from 'react';

const SectionInformation = () => {
    return (
        <section className={"bg-black px-10 text-white"}>
            <div className={"flex font-openSans text-2sm"}>
                <div className={"w-full px-10"}>
                    <h1 className={"text-2xl uppercase font-normal mb-32 mt-14"}>Rubber Hex Dumbbells</h1>
                    <p className={"mb-20"}>
                        Again Faster® Rubber Hex Dumbbells offer one of the most effective ways to add variance to any
                        training program. Functional dumbbell movements cultivate stability, coordination and strength in
                        ways that cannot be achieved using a barbell. Lighter dumbbells are great tools for accommodating
                        athletes with an injury or those not yet comfortable with a bar. Whether you are making your first
                        equipment purchase or looking to expand your gym`&apos;`s capabilities, making dumbbells a priority will
                        take your training to the next level.
                    </p>
                    <p className={""}>Need a way to organize your weights? Check out some of our Storage Options.</p>
                </div>
                <div className={"w-full"}>
                    <img src={"/imgs/info-1.png"} className={"object-cover w-full h-full"}/>
                </div>
            </div>
            <div className={"flex py-20"}>
                <div className={"w-full"}>
                    <img src={"/imgs/info-2.png"} className={"object-cover w-full h-full"}/>
                </div>
                <div className={"text-2base w-full"}>
                    <div className={"px-32"}>
                        <h2 className={"font-openSans mt-24 mb-6"}>Here’s what you need to know about our dumbbells</h2>
                        <ul className={"font-bold"}>
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
            <div className={"flex py-20"}>
                <div className={"w-full"}>
                    <h2 className={"text-3xl font-bold px-10 mt-24 mr-32 uppercase"}>Perfect for indoor and outdoor workouts</h2>
                </div>
                <div className={"w-full"}>
                    <img src={"/imgs/info-3.png"} className={"object-cover w-full h-full"}/>
                </div>

            </div>
        </section>
    );
};

export default SectionInformation;
