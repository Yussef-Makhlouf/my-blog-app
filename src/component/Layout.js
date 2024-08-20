// import Footer from "./Footer";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import "../app/globals.css";
// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-row min-h-screen">
//        <Navbar   />
//       <Header   />

//       <div className="">
//         <Sidebar   />
//         <main className="f ">{children}</main>
//       </div>
//       <Footer   />
//     </div>
//   );
// };

// export default Layout;
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../public/style/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <Header />

      <div className="layout-content">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
