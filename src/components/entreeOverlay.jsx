import React, { useState } from 'react';

function EntreeOverlay({title, price, imgSrc, desc, ingredients, setFocus}) {

    return(
        <div className="fixed w-1/2 h-3/5 border bg-[#E0DAD2]">
            <h2>{title}</h2>
        </div>
    );
}

export default EntreeOverlay;