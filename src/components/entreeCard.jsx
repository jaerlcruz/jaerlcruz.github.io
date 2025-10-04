import React, { useState, useRef } from 'react';
import EntreeOverlay from './entreeOverlay';
const imgs = import.meta.glob('/icons/*.png', { eager: true });

function EntreeCard({title, price, imgSrc, desc, ingredients}) {
    const [isHovered, setIsHovered] = useState(false);
    const [focus, setFocus] = useState(false);

    return (
        <li className="group border p-4 flex-col items-center justify-center text-left w-64 h-full shrink-0 hover:-rotate-1 transition-all ease-in-out hover:cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setFocus(!focus)}>
            <img className="bg-[#E2D591] group-hover:bg-transparent group-hover:rotate-12 w-48 h-48 rounded-full m-auto mb-2 border transition-all ease-in-out"
            src={isHovered?`/icons/${imgSrc}`:`/halftones/${imgSrc}`}/>
            <div className="flex justify-between text-lg">
                <h3 className="font-bold">{title}</h3>
                <p>{price}</p>
            </div>
            <div className="text-sm">
                <p>{desc}</p>
                <br/>
                <em>contains: {ingredients}</em>
            </div>
        </li>
    )
}

export default EntreeCard;