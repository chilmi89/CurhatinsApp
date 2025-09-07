"use client";

import Link from "next/link";
import { Layers, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Detail", label: "Detail" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md
                 bg-background/30 backdrop-blur-md
                 supports-[backdrop-filter]:bg-background/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Layers size={28} className="text-amber-50" />
          <span className="text-lg font-bold tracking-wide text-amber-50">
            Curhatins
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {links.map((link, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-sm font-medium text-white rounded-md transition-colors
                                 hover:text-black hover:bg-white"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </PopoverTrigger>

            {/* Transparent Popover */}
            <PopoverContent
              align="end"
              className="w-48 mt-2 bg-transparent backdrop-blur-md rounded-xl shadow-lg"
            >
              <nav className="flex flex-col gap-3">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-colors
                               hover:bg-blue-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
