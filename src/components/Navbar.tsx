import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, LogInIcon } from "lucide-react";
import logo from "@/assets/logo.webp";
import { ThemeToggle } from "./ui/theme-toggle";
import navlinks from "@/lib/navlinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="relative w-full max-w-6xl mx-auto bg-secondary/80 backdrop-blur-md my-4 px-4 py-4 rounded-3xl flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-end">
          <img
            src={logo}
            alt="Basti Ki Pathshala logo"
            className="size-12 bg-gray-100 rounded-md"
          />
          <span className="text-lg font-bold font-serif capitalize hidden md:inline-block">
            Basti Ki Pathshala.
          </span>
        </div>

        {/* Desktop Navlinks */}
        <ul className="hidden md:flex items-center gap-2">
          {navlinks.slice(0, 2).map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.url}
                aria-label={link.label}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors rounded-md px-4 py-2  ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/30"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Button asChild className="text-sm px-4 py-2 ml-2" variant={"CTA"}>
              <NavLink to="/form" aria-label="Go to volunteer form page">
                Volunteer Form
                <LogInIcon />
              </NavLink>
            </Button>
          </li>
          {/* Theme toggle */}
          <ThemeToggle />
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative">
          {/* Theme toggle */}
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {open && (
            <div className="absolute right-0 mt-2 bg-background border border-border rounded-md shadow-lg w-48 z-50">
              <ul className="flex flex-col bg-secondary m-2 p-2">
                {navlinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.url}
                    aria-label={link.label}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors px-2 py-2 rounded-md ${
                        isActive
                          ? "text-accent-foreground bg-accent"
                          : "hover:text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}