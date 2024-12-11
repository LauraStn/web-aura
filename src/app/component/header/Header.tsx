'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {Burger} from './Burger';
import classNames from 'classnames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add('overflow-hidden');
    }
    if (!isOpen) {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className='bg-slate-600 flex justify-between px-3'>
      <div className='flex items-center gap-3 color-[#1EFDFD]'>
        <Image src='/logowa.webp' alt='WebAura logo' width={38} height={38} />
        <Link className='' href={'/'}>
          WebAura
        </Link>
      </div>
      <div>
        <Burger isOpen={isOpen} handleMenu={handleMenu} />
        <nav
          className={classNames(
            'fixed text-lg md:text-sm md:static md:flex md:flex-row w-full z-40 transition-all duration-500 top-0 left-0 right-0 items-center md:pt-0 h-screen md:h-auto backdrop-blur-lg md:justify-end lg:gap-16 xl:gap-32 2xl:gap-72 md:gap-12 bg-melon/70 md:bg-inherit',
            {
              'translate-x-full md:translate-x-0': !isOpen,
              'translate-x-0': isOpen,
            }
          )}
        >
          <ul
            className={classNames(
              'flex flex-col lg:text-xl md:flex-row flex-wrap gap-5 items-center pt-52 md:pt-0'
            )}
          >
            <li>
              <a href='/' onClick={() => setIsOpen(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href='/prestations' onClick={() => setIsOpen(false)}>
                Beauté des ongles
              </a>
            </li>
            <li>
              <a href={''} onClick={() => setIsOpen(false)}>
                Prise de rendez-vous
              </a>
            </li>
            <li>
              <a href='/galerie' onClick={() => setIsOpen(false)}>
                Galerie
              </a>
            </li>
            <li>
              <a href='/contact' onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className='flex gap-5 items-center md:pt-0 lg:text-xl relative md:static z-40 justify-center md:justify-normal pt-9'>
            {/* {props.userLogged !== undefined && (
              <>
                <button aria-label='déconnexion' onClick={() => logout()}>
                  <SlLogout className='text-[38px]' />
                </button>
                <Link
                  aria-label='profil'
                  onClick={() => setIsOpen(false)}
                  href={isAdmin}
                >
                  <FaUserLarge className='text-[38px]' />
                </Link>{' '}
              </>
            )} */}
            {/* {props.userLogged === undefined && ( */}
            <>
              <div className=' flex gap-4 flex-col md:flex-row'>
                <Link
                  aria-label='connexion'
                  href={'/connexion'}
                  onClick={() => setIsOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  aria-label='inscription'
                  href={'/inscription'}
                  onClick={() => setIsOpen(false)}
                >
                  Inscription
                </Link>
              </div>
            </>
            {/* )} */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
