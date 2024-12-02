import { FC } from 'react';
import { Shield, Users, Clock, FileCheck, Globe, Lock } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Next-generation security solutions powered by AI and machine learning for proactive threat detection.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned cybersecurity professionals with decades of combined experience in protecting enterprise systems.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock security operations center with real-time threat detection and incident response.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Built-in compliance frameworks for GDPR, HIPAA, PCI DSS, and other regulatory requirements.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Worldwide threat intelligence network providing real-time protection against emerging threats.",
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Implementation of zero trust architecture ensuring maximum security at every access point.",
  },
];

const FeatureList: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={0.1 * index}
        />
      ))}
    </div>
  );
};

export default FeatureList;