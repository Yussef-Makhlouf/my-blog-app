

// import React from 'react';
// import Link from 'next/link';

// const Sidebar = () => {
//   return (
//     <aside className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-64 h-screen shadow-lg">
//       <div className="p-6 text-3xl font-bold border-b border-gray-700">
//         Navigation
//       </div>
//       <nav className="p-4">
//         <ul>
//           <li className="mb-6">
//             <Link href="/" className="block p-3 rounded hover:bg-gray-700 hover:shadow-lg transition-all">
//               Home
//             </Link>
//           </li>
//           <li className="mb-6">
//             <Link href="/aboutUs" className="block p-3 rounded hover:bg-gray-700 hover:shadow-lg transition-all">
//               About Us
//             </Link>
//           </li>
//           <li className="mb-6">
//             <Link href="/contactUs" className="block p-3 rounded hover:bg-gray-700 hover:shadow-lg transition-all">
//               Contact Us
//             </Link>
//           </li>
//           <li className="mb-6">
//             <Link href="/blog" className="block p-3 rounded hover:bg-gray-700 hover:shadow-lg transition-all">
//               Blog
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
import React from 'react';
import Link from 'next/link';
import '../../public/style/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Navigation</div>
      <nav className="sidebar-menu">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutUs">About Us</Link></li>
          <li><Link href="/contactUs">Contact Us</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
