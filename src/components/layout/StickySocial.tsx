import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const StickySocial = () => {
  const socials = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/rajendrashuklamp", 
      color: "#1877F2", 
      bg: "bg-[#1877F2]/10", 
      border: "border-[#1877F2]/20" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/rajendrashuklaofficial/", 
      color: "#E4405F", 
      bg: "bg-[#E4405F]/10", 
      border: "border-[#E4405F]/20" 
    },
    { 
      icon: Twitter, 
      href: "https://x.com/rshuklabjp", 
      color: "#000000", 
      bg: "bg-black/5", 
      border: "border-black/10" 
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/@rajendrashuklamp", 
      color: "#FF0000", 
      bg: "bg-[#FF0000]/10", 
      border: "border-[#FF0000]/20" 
    },
  ];

  return (
    <div className="fixed z-[999] right-5 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
      {/* Sleek Vertical Glass Dock */}
      <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-2.5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col gap-4">
        
        {socials.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group h-12 w-12 flex items-center justify-center rounded-2xl border ${item.bg} ${item.border} transition-all duration-300 hover:shadow-lg`}
          >
            {/* Hover Solid Background & Glow */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
              style={{ 
                backgroundColor: item.color, 
                boxShadow: `0 10px 20px -5px ${item.color}66` 
              }}
            />
            
            {/* Icon - FIXED: Hover pe white dikhega */}
            <item.icon 
              className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:!text-white" 
              style={{ color: item.color }} 
            />

            {/* Magnetic Tooltip */}
            <div className="absolute right-full mr-5 px-3 py-1.5 rounded-xl bg-secondary text-white text-[10px] font-black uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-4 group-hover:translate-x-0 shadow-xl border border-white/10 whitespace-nowrap">
               Follow Us
               <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-secondary rotate-45" />
            </div>
          </motion.a>
        ))}
        
      </div>
    </div>
  );
};

export default StickySocial;