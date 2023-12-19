
import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const links = [
  {
    name: "Inicio",
    href: "/"
  },
  {
    name: "Sobre Mi",
    href: "/about"
  },
  {
    name: "Proyectos",
    href: "/project"
  },
  {
    name: "Contáctame",
    href: "/contact"
  }
]

export default function HeaderPage() {
  return (
    <Navbar className="bg-gray-800 w-full flex items-center flex-wrap justify-center justify-items-center content-center">
      <NavbarContent >
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-gray-100" href={link.href}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}


