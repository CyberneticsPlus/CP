"use client";

import React from 'react';
import { Shield, Eye, Bell, Clock } from 'lucide-react';
import ServiceBanner from '../ServiceBanner';
import ServiceFeatures from './ServiceFeatures';
import ServiceCapabilities from './ServiceCapabilities';
import AnimatedSection from '../animations/AnimatedSection';
import { IMAGES } from '@/constants/images';

const features = [
  {
    icon: Eye,
    title: '24/7 Monitoring',
    description: 'Round-the-clock security monitoring and threat detection.',
  },
  {
    icon: Bell,
    title: 'Incident Response',
    description: 'Rapid response to security incidents and threats.',
  },
  {
    icon: Shield,
    title: 'Threat Hunting',
    description: 'Proactive threat hunting and investigation.',
  },
  {
    icon: Clock,
    title: 'Real-time Alerts',
    description: 'Immediate notification of security events.',
  },
];

const capabilities = [
  {
    title: 'Threat Detection & Response',
    features: [
      'Advanced SIEM platform',
      'Behavioral analytics',
      'Automated response playbooks',
      'Threat intelligence integration',
    ],
  },
  {
    title: 'Security Management',
    features: [
      'Compliance monitoring',
      'Asset management',
      'Vulnerability management',
      'Security metrics and reporting',
    ],
  },
];

const ManagedSOC = () => {
  return (
    <div>
      <ServiceBanner
        title="Managed SOC Services"
        description="24/7 Security Operations Center with advanced threat detection and response"
        image={IMAGES.services.soc}
        icon={<Shield className="w-8 h-8 text-blue-400" />}
      />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceFeatures features={features} />
          <ServiceCapabilities capabilities={capabilities} />
          
          <AnimatedSection delay={0.3} className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Ready for 24/7 Security Monitoring?</h2>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ManagedSOC;