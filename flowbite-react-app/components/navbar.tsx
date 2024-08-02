'use client'

import Link from "next/link";
import { Button, DarkThemeToggle, Flowbite, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeModeScript } from "flowbite-react";

export default function NavBar() {
  return (
    <>
    
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Connect Courses</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          Sobre
        </NavbarLink>
        <NavbarLink href="#">Preços</NavbarLink>
        <NavbarLink href="#">Contato</NavbarLink>
      </NavbarCollapse>
      <Flowbite>
        <DarkThemeToggle/>
      </Flowbite>
      
      <div className="order-2 hidden items-center md:flex">
          <a
            href="#"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
          <Button href="#">Sign up</Button>
        </div>
    </Navbar>
    </>
  );
}
