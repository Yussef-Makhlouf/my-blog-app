// export default function Home() {
//     return (
//       <div >
//         <h1 >Home Page with Sidebar</h1>
//         <p>This is the home page for the with-sidebar route group.</p>
//       </div>
//     );
//   }
import Link from 'next/link';

export default function Home() {
  return (
    <div style={containerStyle}>
      <aside style={sidebarStyle}>
        <h2 style={sidebarTitleStyle}>Navigation</h2>
        <ul style={sidebarListStyle}>
          <li style={sidebarItemStyle}>
            <Link href="/blog">Blog</Link>
          </li>
          <li style={sidebarItemStyle}>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li style={sidebarItemStyle}>
            <Link href="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </aside>
      <main style={mainStyle}>
        <h1 style={mainTitleStyle}>Home Page with Sidebar</h1>
        <p style={mainTextStyle}>This is the home page for the with-sidebar route group.</p>
      </main>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f4f4f4',
};

const sidebarStyle = {
  width: '250px',
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
};

const sidebarTitleStyle = {
  fontSize: '1.5em',
  marginBottom: '20px',
};

const sidebarListStyle = {
  listStyle: 'none',
  paddingLeft: 0,
};

const sidebarItemStyle = {
  marginBottom: '15px',
};

const mainStyle = {
  flex: 1,
  padding: '40px',
  backgroundColor: '#fff',
};

const mainTitleStyle = {
  color: '#333',
  fontSize: '2.5em',
};

const mainTextStyle = {
  color: '#666',
  fontSize: '1.2em',
};
