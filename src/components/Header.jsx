import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaHandsHelping,
  FaInfoCircle,
  FaUsers,
  FaHeart,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import logo from '/public/logo.png';

const sectionIds = [
  'services',
  'referral',
  'timeline',
  'agreements',
  'impact',
  'family',
  'staffinfo',
  'orgchart',
  'faq',
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 1) Check if user manually chose a theme before.
  // 2) Otherwise use system preference (prefers-color-scheme: dark).
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [currentSection, setCurrentSection] = useState('');
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Apply theme class to <html> and save preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // IntersectionObserver for highlight scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setCurrentSection(visible.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.2,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinkClass = (to) =>
    `flex items-center gap-2 transition ${
      location.pathname === to || currentSection === to.replace('#', '')
        ? 'text-purple-400'
        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-sm transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-black/90 text-white border-gray-800'
            : 'bg-white/90 text-black border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img src={logo} alt="4D Youth Logo" className="h-20 w-auto" />
            <span className="font-bold text-xl hidden sm:inline">4D Recovery | Youth Services </span>
          </Link>

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="text-teal-400 hover:text-purple-400 hidden md:block"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-teal-400 hover:text-purple-400 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className={navLinkClass('/')}>
              <FaHome className="text-xs" /> Home
            </Link>
            <Link to="/services" className={navLinkClass('/services')}>
              <FaHandsHelping className="text-xs" /> Services
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              <FaInfoCircle className="text-xs" /> About
            </Link>
            <Link to="/staff" className={navLinkClass('/staff')}>
              <FaUsers className="text-xs" /> Staff
            </Link>
            <a
              href="https://4drecovery.jotform.com/231350818414956"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-teal-400 transition"
            >
              Referral Form
            </a>
            <a
              href="https://4drecovery.org/capital-campaign/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-2 px-4 rounded-lg transition"
            >
              <FaHeart className="text-sm" />
              <span>Donate</span>
              <span className="sr-only">Donate to 4D Recovery's Capital Campaign</span>
            </a>
          </nav>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 text-white border-t border-gray-800 shadow-lg px-6 py-4 rounded-b-xl animate-fade-down space-y-4 text-sm font-medium transition-all">
            <Link
              to="/"
              onClick={closeMenu}
              className={navLinkClass('/')}
            >
              <FaHome className="text-xs" /> Home
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className={navLinkClass('/services')}
            >
              <FaHandsHelping className="text-xs" /> Services
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={navLinkClass('/about')}
            >
              <FaInfoCircle className="text-xs" /> About
            </Link>
            <Link
              to="/staff"
              onClick={closeMenu}
              className={navLinkClass('/staff')}
            >
              <FaUsers className="text-xs" /> Staff
            </Link>
            <a
              href="https://4drecovery.jotform.com/231350818414956"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-teal-400 hover:text-purple-300 transition"
            >
              Referral Form
            </a>
            <a
              href="https://4drecovery.org/capital-campaign/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-2 px-4 rounded-lg transition"
            >
              <div className="inline-flex items-center justify-center gap-2">
                <FaHeart className="text-sm" />
                <span>Donate</span>
              </div>
            </a>

            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 w-full mt-4
                         border border-teal-400 hover:border-purple-400 
                         rounded-lg px-3 py-2 text-teal-400 hover:text-purple-300
                         transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <FaSun className="text-xs" />
                  <span className="text-sm">Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon className="text-xs" />
                  <span className="text-sm">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        )}
      </header>

      {/* Sticky Donate Button on Mobile */}
      <a
        href="https://4drecovery.org/capital-campaign/"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 z-40 bg-gradient-to-r from-teal-400 to-purple-400 
                   hover:from-teal-300 hover:to-purple-300 text-black font-semibold 
                   py-2 px-4 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        <FaHeart className="text-sm" />
        <span>Donate</span>
        <span className="sr-only">Donate to 4D Recovery's Capital Campaign</span>
      </a>
    </>
  );
}
