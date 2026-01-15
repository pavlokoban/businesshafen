"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { AIButton } from "@/components/ui/ai-button";
import { Menu, X } from "lucide-react";
// import { useState } from "react";
  import StaggeredMenu from './StaggeredMenu';
  import { MenuBar } from "@/components/ui/animated-menu-bar";
import React, { useState } from 'react'

const menuItems = [
  'dashboard',
  'notifications2',
  'settings',
  'help',
  'security',
] as const;
type MenuItem = typeof menuItems[number];

export default function DemoOne() {
    const [active, setActive] = useState<MenuItem>('dashboard');
  return  <MenuBar active={active} onSelect={setActive} />;
}


// export default function Header() {
//   const [open, setOpen] = useState(false);
// const menuItems = [
//   { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
//   { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
//   { label: 'Services', ariaLabel: 'View our services', link: '/services' },
//   { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
// ];

// const socialItems = [
//   { label: 'Twitter', link: 'https://twitter.com' },
//   { label: 'GitHub', link: 'https://github.com' },
//   { label: 'LinkedIn', link: 'https://linkedin.com' }
// ];
//   return (
//     // <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
//     <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
//       <div className="pointer-events-auto">
//   <StaggeredMenu
//     position="right"
//     items={menuItems}
//     socialItems={socialItems}
//     displaySocials={true}
//     displayItemNumbering={true}
//     menuButtonColor="#000000ff"
//     openMenuButtonColor="#000000ff"
//     changeMenuColorOnOpen={true}
//     colors={['#B19EEF', '#5227FF']}
//     logoUrl="/businesshafen.svg"
//     accentColor="#ff6b6b"
//     onMenuOpen={() => console.log('Menu opened')}
//     onMenuClose={() => console.log('Menu closed')}
//   />
//   </div>
//     </header>
//   );
// }