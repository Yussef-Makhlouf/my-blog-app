
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
