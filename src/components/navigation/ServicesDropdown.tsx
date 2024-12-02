import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICE_ROUTES } from '../../constants/routes';

interface ServicesDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const location = useLocation();

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className={`text-base font-medium ${
          isOpen ? 'text-white' : 'text-gray-300'
        } hover:text-white px-4 py-2 rounded-md inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
      >
        Services
        <ChevronDown 
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div 
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 mt-2 w-72 rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform origin-top-left transition-all duration-200 ease-out"
        >
          <div className="py-1">
            {SERVICE_ROUTES.map((service) => (
              <Link
                key={service.name}
                to={service.to}
                className={`block px-4 py-3 text-sm hover:bg-gray-700 transition-colors ${
                  location.pathname === service.to
                    ? 'bg-blue-600/10 text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;