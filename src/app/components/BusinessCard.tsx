import { LucideIcon } from 'lucide-react';

interface BusinessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export function BusinessCard({ title, description, icon: Icon, image }: BusinessCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0">
        <video 
          src="/alrayn.mp4" 
          autoPlay
          muted
          loop
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 transition-all duration-300"></div>
      </div>
      
      <div className="relative p-8 h-80 flex flex-col justify-end">
        <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
