import { Transition } from '@headlessui/react'; // Para animações suaves

const linksMobile = [
    { name: 'Sobre', href: '/' },
    { name: 'Serviços', href: '/serviços' },
    { name: 'Segmentos', href: '/segmentos' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Premiações', href: '/premiações' },
];

const NavbarToggle = ({ isOpen, Click }) => {
    return (
        <div className="md:hidden">
            <div className="flex justify-between items-center">
                <div>
                    <button
                        onClick={Click}
                        className="text-white focus:outline-none"
                    >
                        {/* Ícone do hamburger */}
                        <svg
                            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        {/* Ícone de close */}
                        <svg
                            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Menu */}
            <Transition
                show={isOpen}
                enter="transition-transform duration-300 ease-in"
                enterFrom="transform -translate-y-full"
                enterTo="transform translate-y-0"
                leave="transition-transform duration-300 ease-out"
                leaveFrom="transform translate-y-0"
                leaveTo="transform -translate-y-full"
            >
                <div className="md:hidden bg-blue-600 border border-gray-300 rounded-lg p-4 mt-4 w-[200px] mx-auto absolute top-20 left-15 right-0 z-50">

                    <ul className="flex flex-col items-start space-y-2">
                        {linksMobile.map((links, index) => (
                            <li key={index} className="text-white py-2">
                                {links.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </Transition>



        </div>
    );
};

export default NavbarToggle;
