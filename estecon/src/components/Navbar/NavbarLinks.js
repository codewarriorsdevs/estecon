import React from 'react'


/*
Armazena os links de navegação.
 */

const links = [
    { name: 'Sobre', href: '/' },
    { name: 'Serviços', href: '/serviços' },
    { name: 'Segmentos', href: '/segmentos' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Premiações', href: '/premiações' },
];

const NavbarLinks = () => {
    return (
        <ul className="hidden md:flex space-x-4 font-bold text-[30px] leading-normal gap-[20px] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl list-none ">

            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="text-whiteColor hover:text-gray-400 no-underline">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NavbarLinks