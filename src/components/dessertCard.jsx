import React, { useState, useRef } from 'react';

function DessertCard({title, imgSrc}) {
    console.log(imgSrc);

    return (
        <div className="group border w-64 h-64 bg-[#413D3B] hover:bg-transparent  cursor-pointer hover:rotate-2 transition-all ease-in-out p-8">
          <div className={`w-full h-full sepia transition-all ease-in-out relative flex items-center justify-center group-hover:sepia-0`}>
            <img className="absolute" src={`/previews/${imgSrc}`}/>
          </div>
          
        </div>
    )
}

export default DessertCard;