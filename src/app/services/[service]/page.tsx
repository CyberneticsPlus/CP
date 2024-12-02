import { Metadata } from 'next';
import VulnerabilityManagement from '@/components/services/VulnerabilityManagement';
import PenetrationTesting from '@/components/services/PenetrationTesting';
import CloudSecurity from '@/components/services/CloudSecurity';
import ManagedSOC from '@/components/services/ManagedSOC';
import { notFound } from 'next/navigation';

type ServiceParams = {
  params: {
    service: string;
  };
};

const services = {
  'vulnerability-management': {
    component: VulnerabilityManagement,
    title: 'Vulnerability Management',
    description: 'Comprehensive vulnerability assessment and management services.',
  },
  'penetration-testing': {
    component: PenetrationTesting,
    title: 'Penetration Testing',
    description: 'Expert security testing and vulnerability assessment services.',
  },
  'cloud-security': {
    component: CloudSecurity,
    title: 'Cloud Security',
    description: 'Advanced cloud infrastructure protection and security services.',
  },
  'managed-soc': {
    component: ManagedSOC,
    title: 'Managed SOC',
    description: '24/7 Security Operations Center services and threat monitoring.',
  },
};

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const service = services[params.service as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - CyberNeticsPlus`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServiceParams) {
  const service = services[params.service as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  const ServiceComponent = service.component;
  return <ServiceComponent />;
}

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service,
  }));
}