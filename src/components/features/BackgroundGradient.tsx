import { FC } from 'react';

const BackgroundGradient: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundGradient;