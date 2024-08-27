// import '../../public/style/globals.css';
import Footer from './Footer';
import Navbar from './Navbar';
export default function LayoutWithoutSidebar({ children }) {
  return (
    <div className="layout-container without-sidebar">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
