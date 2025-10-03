import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometidos em entregar soluções de alta qualidade que superam expectativas.'
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Cada projeto é desenvolvido pensando nas necessidades específicas do cliente.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e experientes em tecnologias de ponta.'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Sempre atualizados com as últimas tendências e tecnologias do mercado.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Anos de Experiência' },
    { number: '100+', label: 'Projetos Concluídos' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Suporte Disponível' }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-gold">Dinamics Eletronics</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A Dinamics Eletronics (Del) é uma empresa especializada em soluções de infraestrutura de TI, 
              fundada com o objetivo de oferecer serviços tecnológicos de excelência para empresas que 
              buscam crescer com segurança e eficiência.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Nossa missão é transformar a infraestrutura tecnológica das empresas através de soluções 
              inovadoras, suporte especializado e atendimento personalizado. Acreditamos que a tecnologia 
              deve ser um facilitador do crescimento, não um obstáculo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-gold text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all"
            >
              Conhecer Nossos Serviços
            </button>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Nossos Valores</h3>
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-black/50 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-black/50 p-12 rounded-2xl border border-gold-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">Nossa Missão</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "Ser o parceiro tecnológico de confiança das empresas, oferecendo soluções em infraestrutura 
              de TI que promovam crescimento sustentável, segurança digital e eficiência operacional, 
              sempre com foco na excelência do atendimento e na satisfação do cliente."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;