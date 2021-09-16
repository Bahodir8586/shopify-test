import React from 'react';
import Link from "next/link"
import Image from 'next/image'

const footerData = [{
    title: "Again Faster",
    links: [
        {name: "About us", url: "/about-us"},
        {name: "Blog", url: "/blog"},
        {name: "Gift Cards", url: "/gift-cards"},
        {name: "Military/LEO Discount", url: "/military-discount"},
        {name: "Financing", url: "/financing"},
        {name: "Retail Store", url: "/retail-store"}
    ]
}, {
    title: "Get Help",
    links: [
        {name: "Introductions", url: "/introductions"},
        {name: "Shipping", url: "/shipping"},
        {name: "Returns and Warranty", url: "/returns-and-warranty"},
        {name: "Contact us", url: "/contact-us"},
        {name: "Shop in store", url: "/shop-in-store"},
    ]
}]
const contacts = [{method: "facebook", url: "/"}, {method: "instagram", url: "/"}, {method: "mail", url: "/"},]

const Footer = () => {
    return (
        <footer className={"bg-primaryGray pt-20 pb-6 relative"}>
            <div className={"flex"}>
                <div className={"w-full px-40"}>
                    <label className={"font-workSans text-xs tracking-widest uppercase block mb-3"}>Newsletter</label>
                    <input type={"text"} placeholder={"Enter your email"}
                           className={"font-workSans border-b border-secondaryGray bg-primaryGray focus:outline-none focus:border-black py-4 placeholder-black text-sm opacity-50 w-full"}/>
                    <div className={"mt-7"}>
                        {contacts.map(({method, url}) =>
                            <Link href={url} key={method} className={"mr-5"}>
                                <a className={"inline-block mr-5 opacity-100"}>
                                    <Image src={`/svgs/${method}.svg`} width={16} height={16} alt={method}/>
                                </a>
                            </Link>
                        )}
                    </div>
                    <img src={"/imgs/footer.png"} width={475} height={160} alt={"A/F"}
                         className={"absolute -left-5 top-32"}/>
                </div>

                <div className={"w-full flex mb-16"}>
                    {footerData.map(({title, links}) =>
                        <div key={title} className={"w-full"}>
                            <h4 className={"font-workSans mb-8 text-darkGray uppercase tracking-widest text-xs"}>{title}</h4>
                            {links.map(({name, url}) => <Link href={url} key={name}>
                                <a className={"font-openSans block mb-3 text-lightGray capitalize text-2sm hover:text-gray-800 transition duration-200"}>{name}</a>
                            </Link>)}
                        </div>)}
                </div>
            </div>
            <p className={"text-center text-secondaryGray text-2xs font-openSans"}>
                ©2020 Again Faster. All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
