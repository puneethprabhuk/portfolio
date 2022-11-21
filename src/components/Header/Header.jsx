import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className='header-container'>
            <div className="item-left">
                <div className="header-item">//&lt;01.  Home/&gt;</div>
                <div className="header-item">//&lt;02.  About Me/&gt;</div>
            </div>
            <div className="item-middle">
                My Portfolio
            </div>
            <div className="item-right">
                <div className="header-item">//&lt;03.  Projects/&gt;</div>
                <div className="header-item">//&lt;04.  Contact Me/&gt;</div>
            </div>
        </div>
    );
}

export default Header;