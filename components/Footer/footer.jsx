import React from 'react';
import Link from "next/link"
import Image from 'next/image'
import FooterMenu from "./FooterMenu";

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
        <footer className={"bg-primaryGray pt-20 pb-6 relative overflow-hidden"}>
            <div className={"flex flex-col lg:flex-row px-4 lg:px-0"}>
                <div className={"w-full lg:px-40"}>
                    <label className={"font-workSans text-xs uppercase block mb-3"}>Newsletter</label>
                    <div className={"relative"}>
                        <input type={"email"}
                               placeholder={"Enter your email"}
                               className={"font-workSans border-b border-secondaryGray bg-primaryGray py-4 placeholder-black text-sm opacity-50 w-full focus:outline-none focus:border-black "}/>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Image src={"/svgs/arrow.svg"} width={16} height={16}/>
                        </div>
                    </div>
                    <div className={"mt-7 mb-10"}>
                        {contacts.map(({method, url}) =>
                            <Link href={url} key={method} className={"mr-5"}>
                                <a className={"inline-block mr-5 opacity-100"}>
                                    <Image src={`/svgs/${method}.svg`} width={16} height={16} alt={method}/>
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className={"w-full lg:w-max lg:px-0 absolute lg:-left-3 lg:top-36 -bottom-6 left-10"}>
                        <img src={"/imgs/footer.png"} alt={"A/F"}
                             className={"object-cover"}/>
                    </div>
                </div>

                <div className={"w-full flex mb-16 flex-col lg:flex-row"}>
                    {footerData.map(({title, links}) =>
                        <FooterMenu title={title} links={links} key={title}/>)}
                </div>
            </div>
            <p className={"text-center text-secondaryGray text-2xs font-openSans"}>
                ©2020 Again Faster. All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
