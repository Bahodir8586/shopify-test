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
                <h1 className={"w-5/6"}>
                    {/*LOGO*/}
                    <Image src={'/imgs/logo.png'} width={220} height={20} alt={"Again / Faster"}/>
                </h1>
                <div className={"w-full"}>
                    {/*    MENU  */}
                    <nav className={"flex justify-between"}>
                        {menu.map(({url, name}) =>
                            <Link href={url} key={name}>
                                <a className={"uppercase cursor-pointer font-openSans font-normal text-3xs text-black"}>{name}</a>
                            </Link>
                        )}
                    </nav>
                </div>
                <div className={"flex justify-end w-5/6"}>
                    {/*    ICONS */}
                    <div className={"mr-4 cursor-pointer"}>
                        <Image src={"/svgs/search.svg"} width={16} height={16} alt={'Search'}/>
                    </div>
                    <div className={"mr-4 cursor-pointer"}>
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
