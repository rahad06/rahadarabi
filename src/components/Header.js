import React from 'react';
import data from '../data/data.json'

function Header(props) {
    
    return (
        <div className="header d-flex align-items-center justify-content-between p-3">
            <div>
                <i 
                    onClick={() => props.setLight(!props.light)}
                    className="ri-pencil-line"></i>
            </div>
            <div className="header-right">
                <ul className="d-flex mb-0 header-list">
                    {data.header.menu.map((i, index) =>
                        (
                            <li key={index} onClick={() => props.scrollToElement(i.target)}>
                                {i.name}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Header;