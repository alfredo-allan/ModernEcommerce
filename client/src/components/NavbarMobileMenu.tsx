import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { categories } from '../categories';

export const NavBarMobileMenu = () => {
    const [open, setOpen] = useState(false);
    const [location] = useLocation();

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md transition-colors hover:bg-accent hover:text-clientPink text-gray-600 dark:text-gray-300"
            >
                <Menu className="h-5 w-5" />
            </button>

            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50 md:hidden">
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 z-50 flex justify-end">
                    <Dialog.Panel className="w-4/5 max-w-xs bg-white dark:bg-gray-900 p-6 font-sans">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold text-clientPink">Menu</span>
                            <button onClick={() => setOpen(false)}>
                                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            </button>
                        </div>

                        {/* Lista de categorias (reflete o Navbar.tsx) */}
                        <nav className="flex flex-col gap-4">
                            {categories.map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/${category.slug}`}
                                    onClick={() => setOpen(false)}
                                    className={`px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors ${location === `/${category.slug}`
                                        ? 'text-clientPink'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-clientPinkHover'
                                        }`}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </nav>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};
