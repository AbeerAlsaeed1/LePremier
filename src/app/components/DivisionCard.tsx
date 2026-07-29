import { LucideIcon } from 'lucide-react';

interface DivisionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  onClick?: () => void;
  logo?: string;
}

export function DivisionCard({ title, description, icon: Icon, image, onClick, logo }: DivisionCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-[#eb2627] active:brightness-125 active:scale-[0.98]"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-[#eb2627]/95 transition-all duration-300"></div>
      </div>
      
      <div className="relative p-8 h-80 flex flex-col justify-end">
        {logo ? (
          <div className="mb-4">
            <img src={logo} alt={title} className="h-16 object-contain" />
          </div>
        ) : (
          <div className="bg-[#eb2627] w-16 h-16 rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-9 h-9 text-white" />
          </div>
        )}
        <h3 className="text-white text-3xl mb-3" style={{ fontFamily: 'Anton, sans-serif', letterSpacing: '0.5px' }}>
          {title}
        </h3>
        <p className="text-gray-200 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
          {description}
        </p>
        <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
  <span className="text-3xl text-white group-hover:translate-x-2 transition-transform duration-300">
    →
  </span>
</div>
      </div>
    </div>
  );
}