import React from 'react';
import { Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-gold-400 font-bold text-xl">Dinamics Eletronics</h3>
                <p className="text-gray-400 text-sm">Suporte de TI Profissional</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em infraestrutura de TI, oferecemos soluções completas para empresas 
              que buscam crescer com segurança e eficiência tecnológica. Nossa missão é ser seu 
              parceiro de confiança na transformação digital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:8388136161" 
                className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <Phone className="text-black" size={20} />
              </a>
              <a 
                href="mailto:del.eletronic@outlook.com" 
                className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <Mail className="text-black" size={20} />
              </a>
              <a 
                href="https://instagram.com/del.eletronics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <Instagram className="text-black" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold-400 font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Telefone</p>
                <p className="text-white">(83) 8813-6161</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">E-mail</p>
                <p className="text-white">del.eletronic@outlook.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Instagram</p>
                <p className="text-white">@del.eletronics</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Horário</p>
                <p className="text-white text-sm">Seg-Sex: 8h às 18h</p>
                <p className="text-white text-sm">Suporte 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dinamics Eletronics (Del). Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="bg-gold-500 text-black p-2 rounded-lg hover:bg-gold-600 transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;