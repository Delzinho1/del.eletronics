import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      servico: '',
      mensagem: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-gold">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura de TI? Entre em contato conosco e 
            solicite um orçamento personalizado para sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefone</h4>
                  <p className="text-gray-300">(83) 8813-6161</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail</h4>
                  <p className="text-gray-300">del.eletronic@outlook.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Instagram className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instagram</h4>
                  <p className="text-gray-300">@del.eletronics</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Horário de Atendimento</h4>
                  <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-300">Suporte 24/7 para emergências</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-gold p-8 rounded-xl text-black">
              <h4 className="text-2xl font-bold mb-4">Atendimento Especializado</h4>
              <p className="mb-6">
                Nossa equipe técnica está pronta para atender suas necessidades específicas 
                e oferecer as melhores soluções em infraestrutura de TI.
              </p>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <Phone size={20} />
                <span>(83) 8813-6161</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-black/50 p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Solicitar Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-white font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-white font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="(83) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-white font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servico" className="block text-white font-medium mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="infraestrutura">Infraestrutura de Servidores</option>
                    <option value="seguranca">Segurança da Informação</option>
                    <option value="nuvem">Soluções em Nuvem</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="redes">Redes e Conectividade</option>
                    <option value="backup">Backup e Recuperação</option>
                    <option value="consultoria">Consultoria Geral</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-white font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors resize-vertical"
                    placeholder="Descreva suas necessidades e como podemos ajudar..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-black py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar Solicitação</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;