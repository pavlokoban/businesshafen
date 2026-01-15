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