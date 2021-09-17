import React from 'react';
import Link from "next/link"
import Image from "next/image"

const menu = [
    {
        url: "/",
        name: "Lorem",
    },
    {
        url: "/",
        name: "Consectetur",
    },
    {
        url: "/",
        name: "tempor",
    },
    {
        url: "/",
        name: "magna",
    },
    {
        url: "/",
        name: "reprehenderit",
    }
]

const Header = () => {
    return (
        <header className={"px-10"}>
            <div className={"bg-lightWhite py-2 font-oswald font-light text-2xs uppercase text-center"}>
                {/*    TOP TEXT */}
                20% OFF Sitewide until 9/12
            </div>
            <div className={"flex justify-between py-4 items-center"}>
                <div className={"w-1/3 flex lg:hidden"}><Image src={"/svgs/hamburger.svg"} width={16} height={16}
                                                         alt={"Menu"}/></div>
                <h1 className={"w-full lg:w-5/6"}>
                    {/*LOGO*/}
                    <Image src={'/imgs/logo.png'} width={220} height={20} alt={"Again / Faster"}/>
                </h1>
                <div className={"hidden lg:w-full lg:flex"}>
                    {/*    MENU  */}
                    <nav className={"hidden lg:flex justify-between w-full"}>
                        {menu.map(({url, name}) =>
                            <Link href={url} key={name}>
                                <a className={"hover:text-secondaryGray transition duration-200 uppercase cursor-pointer font-openSans font-normal text-3xs text-black"}>{name}</a>
                            </Link>
                        )}
                    </nav>

                </div>
                <div className={"w-1/3 flex justify-end lg:w-5/6"}>
                    {/*    ICONS */}
                    <div className={"hidden lg:flex mr-4 cursor-pointer"}>
                        <Image src={"/svgs/search.svg"} width={16} height={16} alt={'Search'}/>
                    </div>
                    <div className={"hidden lg:flex     mr-4 cursor-pointer"}>
                        <Image src={"/svgs/account.svg"} width={16} height={16} alt={'Account'}/>
                    </div>
                    <div className={"mr-4 cursor-pointer"}>
                        <Image src={"/svgs/bag.svg"} width={16} height={16} alt={'Bag'}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
