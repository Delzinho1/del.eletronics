import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-dark flex items-center pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Soluções em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                Infraestrutura de TI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transformamos sua infraestrutura tecnológica com soluções profissionais, 
              suporte especializado e atendimento personalizado para sua empresa crescer com segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-gold-500 text-gold-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-500 hover:text-black transition-all"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">5+</div>
                <div className="text-gray-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">100+</div>
                <div className="text-gray-400">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-gray-400">Suporte Disponível</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="bg-black/50 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Shield className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Segurança Garantida</h3>
              </div>
              <p className="text-gray-300">
                Protegemos sua infraestrutura com as melhores práticas de segurança e monitoramento 24/7.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Zap className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Performance Otimizada</h3>
              </div>
              <p className="text-gray-300">
                Maximizamos a performance de seus sistemas com soluções tecnológicas avançadas.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Users className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Suporte Especializado</h3>
              </div>
              <p className="text-gray-300">
                Equipe técnica qualificada pronta para atender suas necessidades com agilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;