import React, {useState} from 'react';
import Link from "next/link";
import FadeIn from 'react-fade-in';

const FooterMenu = ({title, links}) => {
    const [open, setOpen] = useState(true)
    const [closed, setClosed] = useState(true)
    return (
        <div key={title} className={`w-full mb-6 overflow-hidden ${!closed ? "h-full" : "h-8"} ${open && "h-full"}`}>
            <h4 className={"font-workSans mb-4 lg:mb-8 text-darkGray uppercase text-xs relative"}>
                {title}
                <span className={"absolute right-0 lg:hidden"} onClick={() => setOpen(!open)}>
                    {open ? "-" : "+"}
                </span>
            </h4>
            <FadeIn visible={open} transitionDuration={180} delay={0}
                    onComplete={() => setClosed(!closed)}
            >
                {links.map(({name, url}) => (
                    <Link href={url} key={name}>
                        <a className={"font-openSans block mb-2 lg:mb-3 text-lightGray capitalize text-2sm hover:text-gray-800 transition duration-200"}>
                            {name}
                        </a>
                    </Link>)
                )}
            </FadeIn>
        </div>
    );
};

export default FooterMenu;
