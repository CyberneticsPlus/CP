import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Terminal, Cloud, Shield } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: ShieldAlert,
      title: 'Vulnerability Management',
      description: 'Continuous scanning, assessment, and remediation of security vulnerabilities across your infrastructure.',
      to: '/services/vulnerability-management'
    },
    {
      icon: Terminal,
      title: 'Penetration Testing',
      description: 'Expert-led security assessments to identify and exploit vulnerabilities before attackers do.',
      to: '/services/penetration-testing'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Comprehensive cloud infrastructure protection with real-time monitoring and compliance.',
      to: '/services/cloud-security'
    },
    {
      icon: Shield,
      title: 'Managed SOC Services',
      description: '24/7 Security Operations Center with advanced threat detection and incident response.',
      to: '/services/managed-soc'
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.2}>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Our Services
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade cybersecurity solutions for modern threats
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 md:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <Link to={service.to} className="block h-full">
                <div className="h-full relative p-6 md:p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-600/20 mb-4">
                      <service.icon className="h-6 w-6 md:h-7 md:w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-blue-400 text-sm md:text-base font-medium inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;