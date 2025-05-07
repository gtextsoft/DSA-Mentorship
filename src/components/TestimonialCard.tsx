
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
  beforeMetric?: string;
  afterMetric?: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  imageUrl,
  beforeMetric,
  afterMetric,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <Card 
      className="testimonial-card animate-fade-in bg-blue-500" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-white">
        <Quote size={32} />
      </div>
      
      <p className="text-base lg:text-lg text-white mb-6 italic">"{quote}"</p>
      
      {(beforeMetric && afterMetric) && (
        <div className="flex justify-between mb-6 p-3 bg-blue-600 rounded-lg border border-white/5">
          <div className="text-center">
            <p className="text-sm text-white">Before</p>
            <p className="text-lg font-bold text-white">{beforeMetric}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-white">After</p>
            <p className="text-lg font-bold text-white">{afterMetric}</p>
          </div>
        </div>
      )}
      
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4 border-2 border-white">
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="bg-blue-600 text-white">
            {name[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-white">{title}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
