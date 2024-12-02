import React from 'react';
import { MobileNavLink } from './NavLink';
import { SERVICE_ROUTES } from '../../constants/routes';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 shadow-lg">
        <MobileNavLink to="/">Home</MobileNavLink>
        <MobileNavLink to="/about">About</MobileNavLink>
        
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm font-medium text-gray-400">
            Services
          </div>
          {SERVICE_ROUTES.map((service) => (
            <MobileNavLink
              key={service.name}
              to={service.to}
              className="pl-6"
            >
              {service.name}
            </MobileNavLink>
          ))}
        </div>

        <MobileNavLink to="/contact">Contact</MobileNavLink>
      </div>
    </div>
  );
};

export default MobileMenu;