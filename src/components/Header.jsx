import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () =>(
        <header className="header">
            <div className="header_logo"><h1>Logo</h1></div>
            <nav>
                <ul>
                    <li>option</li>
                    <li>option1</li>
                    <li>option2</li>
                </ul>
            </nav>
        </header>
    );

export default Header;
