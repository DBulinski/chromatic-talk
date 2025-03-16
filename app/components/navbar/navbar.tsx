import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Logo } from "~/components/icons/logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-10 w-10 block" />
            <span className="font-bold text-xl hidden sm:inline-block">
              Classic cars
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Button asChild size="sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "container md:hidden overflow-hidden transition-all duration-300 ease-in-out px-6",
          isMenuOpen ? "max-h-56" : "max-h-0",
        )}
      >
        <nav className="flex flex-col space-y-4 py-4">
          <Link
            to="/features"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Button asChild size="sm" className="sm:w-auto">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
