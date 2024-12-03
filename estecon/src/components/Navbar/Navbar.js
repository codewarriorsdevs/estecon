import React, { useState } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import NavbarToggle from './NavbarToggle';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='relative bg-bluePrimary p-6 flex justify-between items-center w-full h-20 font-inter pb-[65px] pt-[65px] '>

            <NavbarBrand />

            {/* Links para telas grandes */}
            <div className="hidden md:flex space-x-8">
                <NavbarLinks />
            </div>

            {/* Botão de Toggle para Mobile */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                >
                    <NavbarToggle isOpen={isOpen} Click={toggleMenu} />
                </button>
            </div>

            {/* Menu Responsivo */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } md:hidden absolute top-20 left-0 w-full bg-bluePrimary p-4`}
            >
                <NavbarLinks />
            </div>

        </nav>
    );
};
