
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card animate-fade-in h-full hover:-translate-y-2 transition-all" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 text-gold-500 p-3 bg-gold-500/10 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
