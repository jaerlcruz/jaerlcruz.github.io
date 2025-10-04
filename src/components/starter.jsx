import React from 'react';
const socials = import.meta.glob('/*.svg', { eager: true });

function Starter({title, price, icon, link}) {
    return (
        <li className="flex justify-between py-1 text-sm md:text-base">
            <a className={(link?`hover:text-[#5A310D] hover:cursor-pointer hover:underline `:``)+`flex gap-2 transition-all ease-in-out`} href={link} target="_blank">
                {icon && <img src={`/${icon}`} className=""/>}
                <p className="font-bold">{title}</p>
            </a>
            <p>{price}</p>
        </li>
    )
}

export default Starter;