import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

import { ROUTES } from '../../Static/Constants/constants';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='name'>
                DJMAXY
            </div>
            <div className='routes'>
                {
                    ROUTES.map((route, i) => {
                        return (
                            <Link key={i} to="/">
                                <div className='route'>
                                    {route}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
