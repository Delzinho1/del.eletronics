import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold-500/20">
      {/* Top Bar */}
      <div className="bg-gradient-gold text-black py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-end items-center space-x-6 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>(83) 8813-6161</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>del.eletronic@outlook.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram size={16} />
              <span>@del.eletronics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-gold-400 font-bold text-xl">Dinamics Eletronics</h1>
              <p className="text-gray-400 text-sm">Suporte de TI Profissional</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-gold-400 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-gold-400 transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-gold-400 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-gold-400 transition-colors font-medium"
            >
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-gold text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gold-500/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-gold-400 transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-gold-400 transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-white hover:text-gold-400 transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-gold-400 transition-colors font-medium text-left"
              >
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-gold text-black px-6 py-2 rounded-lg font-semibold w-fit"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;