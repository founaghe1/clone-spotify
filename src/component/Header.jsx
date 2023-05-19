import React from 'react';
import './Header.css'
import { ButtonCompo } from './Button';

export const Header = () => {
    return (
        <div className='bg-dark bg-opacity-25 text-end p-3 fixed-top header'>
            {/* <button className='btn-black border-light text-white px-3 bg-transparent rounded-5 me-3'>Sign in</button>
            <button className='btn-black border-light text-white px-3 bg-transparent rounded-5'>Log in</button> */}
            <ButtonCompo />
        </div>
    );
};
export default Header;
