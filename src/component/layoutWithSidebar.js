
// import '../../public/style/globals.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
export default function LayoutWithSidebar({ children }) {
  return (
    <div className="layout-container with-sidebar ">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
