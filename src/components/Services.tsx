import React from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Monitor, 
  Wifi, 
  HardDrive,
  Settings,
  Headphones
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Infraestrutura de Servidores',
      description: 'Configuração, manutenção e otimização de servidores físicos e virtuais para máxima performance.',
      features: ['Instalação de Servidores', 'Virtualização', 'Backup Automático', 'Monitoramento 24/7']
    },
    {
      icon: Shield,
      title: 'Segurança da Informação',
      description: 'Proteção completa dos seus dados com soluções avançadas de segurança cibernética.',
      features: ['Firewall Avançado', 'Antivírus Corporativo', 'Auditoria de Segurança', 'Políticas de Acesso']
    },
    {
      icon: Cloud,
      title: 'Soluções em Nuvem',
      description: 'Migração e gerenciamento de infraestrutura em nuvem para maior flexibilidade e economia.',
      features: ['Migração para Nuvem', 'Backup em Nuvem', 'Sincronização de Dados', 'Acesso Remoto']
    },
    {
      icon: Monitor,
      title: 'Suporte Técnico',
      description: 'Atendimento especializado para resolver problemas técnicos com rapidez e eficiência.',
      features: ['Suporte Remoto', 'Atendimento Local', 'Diagnóstico Avançado', 'Manutenção Preventiva']
    },
    {
      icon: Wifi,
      title: 'Redes e Conectividade',
      description: 'Projeto e implementação de redes corporativas seguras e de alta performance.',
      features: ['Cabeamento Estruturado', 'Wi-Fi Corporativo', 'VPN Empresarial', 'Monitoramento de Rede']
    },
    {
      icon: HardDrive,
      title: 'Backup e Recuperação',
      description: 'Soluções robustas de backup e recuperação de dados para proteger informações críticas.',
      features: ['Backup Automatizado', 'Recuperação Rápida', 'Teste de Integridade', 'Armazenamento Seguro']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-gold">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em infraestrutura de TI para empresas de todos os portes, 
            com foco em segurança, performance e disponibilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/50 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-black" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-gold p-8 rounded-xl text-black">
            <div className="flex items-center justify-center mb-4">
              <Headphones size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda Especializada?</h3>
            <p className="text-lg mb-6">
              Nossa equipe está pronta para atender suas necessidades específicas em infraestrutura de TI.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-gold-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;