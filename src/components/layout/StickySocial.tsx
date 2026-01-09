import { Facebook, Twitter, Instagram, Youtube, Target } from "lucide-react";

const StickySocial = () => {
  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/rajendrashuklamp", Target: "_blank", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: "https://www.instagram.com/rajendrashuklaofficial/", Target: "_blank", color: "hover:bg-[#E4405F]" },
    { icon: Twitter, href: "https://x.com/rshuklabjp", Target: "_blank", color: "hover:bg-[#1DA1F2]" },
    { icon: Youtube, href: "https://www.youtube.com/@rajendrashuklamp", Target: "_blank", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <div className="fixed z-[999] 
      /* Desktop: Center Left */
      left-0 top-1/2 -translate-y-1/2 md:flex flex-col gap-2 hidden
      /* Mobile: Bottom Center (Optional - if you want it on mobile too) */
      ">
      
      <div className="bg-white/80 backdrop-blur-md border border-border shadow-2xl rounded-r-2xl py-4 px-2 flex flex-col gap-4">
        {socials.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl text-secondary transition-all duration-300 hover:text-white hover:scale-110 shadow-sm ${item.color}`}
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default StickySocial;