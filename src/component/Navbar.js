// import React from 'react';
// import Link from 'next/link';
// import "../app/globals.css";
// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg ">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-3xl font-extrabold">
//           <Link href="/">My Blog App</Link>
//         </div>
//         <ul className="flex space-x-6">
//           <li className="hover:text-gray-300">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="hover:text-gray-300">
//             <Link href="/aboutUs">About Us</Link>
//           </li>
//           <li className="hover:text-gray-300">
//             <Link href="/contactUs">Contact Us</Link>
//           </li>
//           <li className="hover:text-gray-300">
//             <Link href="/blog">Blog</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import Link from 'next/link';
import "../../public/style/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">My Blog App</Link>
        </div>
        <ul className="navbar-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutUs">About Us</Link></li>
          <li><Link href="/contactUs">Contact Us</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
