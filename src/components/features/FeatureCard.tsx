import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>
      <div className="relative p-8 h-full">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 p-0.5 mb-6">
          <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </AnimatedSection>
  );
};

export default FeatureCard;