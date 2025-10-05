import React from 'react';
// import { BiLogoLinkedinSquare } from "react-icons/bi";

function Starter({title, price, Icon, link}) {
    return (
        <li className="flex justify-between py-1 text-sm md:text-base">
            <a className={(link?`hover:text-[#5A310D] hover:cursor-pointer hover:underline `:``)+`flex items-center gap-2 transition-all ease-in-out`} href={link} target="_blank">
                {Icon &&
                <Icon className=""/>}
                {/* <div>{icon}</div>} */}
                {/* <img src={`/svgs/${icon}`} className=""/>} */}
                <p className="font-bold">{title}</p>
            </a>
            <p>{price}</p>
        </li>
    )
}

export default Starter;