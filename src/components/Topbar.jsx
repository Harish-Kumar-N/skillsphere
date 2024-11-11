import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const user = {
    name: 'Harish Kumar N',
    email: 'harishkumarkannan2005@gmail.com',
    imageUrl:
      'skillsphere/public/minato.png',
  };

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Projects', href: '#', current: false },
    { name: 'Articles', href: '#', current: false },
    { name: 'Write-ups', href: '#', current: false },
  ];

  const userNavigation = [
    { name: 'Profile', href: '#' }
  ];

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <nav className="bg-[#1a994d] w-full fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <span className="text-white text-2xl font-bold ml-2">Skillsphere</span>
          </div>

          <div className="hidden md:flex items-center">
            <span className="text-white text-2xl font-bold">Skillsphere</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <Menu size={24} />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={toggleUserMenu}
                className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              {item.name}
            </a>
          ))}

          <div className="mt-4 border-t pt-4">
            <div className="flex items-center px-4">
              <img
                className="h-10 w-10 rounded-full"
                src={user.imageUrl}
                alt={user.name}
              />
              <div className="ml-3">
                <p className="text-base font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopBar;
