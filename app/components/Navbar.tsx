'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
    const [active, setActive] = useState('hero')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ]
  
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        const sections = links.map(link => document.getElementById(link.href))

        sections.forEach((section) => {
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id)
        }
        })
        
         window.addEventListener('scroll', handleScroll)
         return () => window.removeEventListener('scroll', handleScroll)
     }, [])
    
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-gray-800 transition ${isScrolled ? 'bg-black/60 backdrop-blur border-b border-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
        
        <Logo />

        <div className="hidden md:flex gap-10 text-md">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>
              
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button> 
      </div>
          
        {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6">
          {links.map((link) => (
                <a
                    key={link.name}
                    href={`${link.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg ${
                    active === link.href
                    ? 'text-white'
                    : 'text-gray-400'
                    } hover:text-white transition`}
                    >
                    {link.name}
                </a>
          ))}
        </div>
      )}
    </nav>
  )
}