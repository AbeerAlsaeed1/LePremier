export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fibonacci Spiral / Golden Ratio Design */}
      <rect x="10" y="10" width="80" height="80" fill="#eb2627" rx="8"/>
      <path 
        d="M 50 50 Q 50 30 70 30 Q 90 30 90 50 Q 90 70 70 70 Q 50 70 50 50" 
        stroke="white" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M 50 50 Q 50 40 60 40 Q 70 40 70 50 Q 70 60 60 60 Q 50 60 50 50" 
        stroke="white" 
        strokeWidth="2" 
        fill="none"
        opacity="0.7"
      />
      <circle cx="50" cy="50" r="5" fill="white"/>
    </svg>
  );
}
