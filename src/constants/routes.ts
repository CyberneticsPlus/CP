export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  services: {
    vulnerabilityManagement: '/services/vulnerability-management',
    penetrationTesting: '/services/penetration-testing',
    cloudSecurity: '/services/cloud-security',
    managedSoc: '/services/managed-soc',
  },
} as const;

export interface ServiceRoute {
  name: string;
  to: string;
  description: string;
}

export const SERVICE_ROUTES: ServiceRoute[] = [
  {
    name: 'Vulnerability Management',
    to: ROUTES.services.vulnerabilityManagement,
    description: 'Continuous scanning, assessment, and remediation of security vulnerabilities across your infrastructure.',
  },
  {
    name: 'Penetration Testing',
    to: ROUTES.services.penetrationTesting,
    description: 'Expert-led security assessments to identify and exploit vulnerabilities before attackers do.',
  },
  {
    name: 'Cloud Security',
    to: ROUTES.services.cloudSecurity,
    description: 'Comprehensive cloud infrastructure protection with real-time monitoring and compliance.',
  },
  {
    name: 'Managed SOC',
    to: ROUTES.services.managedSoc,
    description: '24/7 Security Operations Center with advanced threat detection and incident response.',
  },
];