import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Lock, FileText, CheckCircle } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { IMAGES } from '../constants/images';

const SecurityApproach = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Pre-Engagement',
      description: 'It is essential that the pentester and client interact prior to the engagement in order to conduct a successful penetration test. Due to pentesting\'s technological nature, this phase is vital. Just like any other IT project, it requires great planning.',
      checkpoints: ['Meetings', 'Requirement\'s', 'Scope', 'Test Plan'],
      additionalText: 'Meeting with the client is the first step toward a successful pentest. This meeting will be followed by the development of a test plan. This will be the stage when you plan to achieve specific pentesting outcomes and align your goals with us.',
      image: IMAGES.services.pentesting
    },
    // ... other steps remain the same
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Approach To Security</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            There is no such thing as a secure system! With the best minds in the security industry, we help
            complex organizations protect their web applications, cloud, networks and mobile phones.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeStep === step.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Step - {step.id}
            </button>
          ))}
        </div>

        {steps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeStep === step.id ? 1 : 0,
              y: activeStep === step.id ? 0 : 20,
              display: activeStep === step.id ? 'block' : 'none',
            }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-8 border border-pink-500/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">{step.title}</h3>
                <p className="text-gray-300 mb-8">{step.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {step.checkpoints.map((checkpoint, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-pink-600/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                      </div>
                      <span className="text-gray-300">{checkpoint}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 mb-8">{step.additionalText}</p>

                <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors">
                  Get Started Now
                </button>
              </div>

              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"></div>
                <OptimizedImage
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecurityApproach;