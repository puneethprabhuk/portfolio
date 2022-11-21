import React from 'react';
import './hero.css';

const Hero = () => {
    return(
        <div className="hero-container">
            <div className="hero-left">
                <p>
                    <span className='html-tag'>&lt;p&gt;</span>
                    This is
                    <span className='html-tag'>&lt;/p&gt;</span>
                </p>
                <div className='main-name'>
                    <div>
                        <span className='html-tag'>&lt;h1&gt;</span>
                    </div>
                        <h1>Puneeth Prabhu</h1>
                    <div>
                        <span className='html-tag'>&lt;/h1&gt;</span>
                    </div>
                </div>
                <p>
                    <span className='html-tag'>&lt;p&gt;</span>
                    UI Developer and Designer
                    <span className='html-tag'>&lt;/p&gt;</span>
                </p>
            </div>
            <div className="hero-right">
                <div className='download-cv'>
                   &lt;Download CV/&gt;
                </div>
            </div>
        </div>
    );
}

export default Hero;