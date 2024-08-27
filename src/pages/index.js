
import Link from 'next/link';
import "../app/globals.css";

export default function Home() {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Welcome to My Blog App</h1>
        <p style={subtitleStyle}>Your go-to place for insightful articles and discussions.</p>
      </header>
      <main style={mainStyle}>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link href="/blog">
                <button style={buttonStyle}>Go to Blog</button>
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/aboutUs">
                <button style={buttonStyle}>Learn About Us</button>
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/contactUs">
                <button style={buttonStyle}>Contact Us</button>
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/with-sidebar">
                <button style={buttonStyle}>With Sidebar</button>
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/without-sidebar">
                <button style={buttonStyle}>Without Sidebar</button>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <footer style={footerStyle}>
        <p style={footerTextStyle}>© 2024 My Blog App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const containerStyle = {
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px',
};

const titleStyle = {
  color: '#333',
  fontSize: '2.5em',
};

const subtitleStyle = {
  color: '#666',
  fontSize: '1.2em',
};

const mainStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const navListStyle = {
  listStyle: 'none',
  paddingLeft: 0,
  display: 'flex',
  gap: '20px',
};

const navItemStyle = {
  marginBottom: '10px',
};

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#0070f3',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px 0',
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
};

const footerTextStyle = {
  margin: 0,
};
