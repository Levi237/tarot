import React from 'react';
const svgTest = () => {
    return (
        <svg width="100px" viewBox="0 0 290 290" style="fill:none;stroke:#fff;stroke-width:12;stroke-linecap:round;">
            <path class="shopping-bag" d="M0110 90 L0110 130 A24 24 0 0 0 180 130 L180 90" />
            <path class="empty-shopping-bag" d="M0110 90 L0110 50 A24 24 0 0 1 180 50 L180 90" />
            <rect x="55" y="70" width="180" height="200" rx="4"/>
        </svg>
    );
};

export default svgTest;