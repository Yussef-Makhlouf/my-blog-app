// export default function Home() {
//     return (
//       <div>
//         <h1>Home Page without Sidebar</h1>
//         <p>This is the home page for the without-sidebar route group.</p>
//       </div>
//     );
//   }

import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    
    <div style={containerStyle}>
       <Navbar />
      <header style={headerStyle}>
       
        <h1 style={titleStyle}>Home Page without Sidebar</h1>
        <p style={subtitleStyle}>This is the home page for the without-sidebar route group.</p>
      </header>
      <main style={mainStyle}>
        <p style={mainTextStyle}>
          Welcome to our blog! Here you will find a variety of articles and insights on various topics. 
          Feel free to explore and enjoy your stay!
        </p>
       
      </main>
      <footer style={footerStyle}>
        <p style={footerTextStyle}>© 2024 My Blog App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f4f4f4',
  padding: '20px',
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
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  textAlign: 'center',
};

const mainTextStyle = {
  color: '#666',
  fontSize: '1.1em',
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px 0',
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
  position: 'absolute',
  bottom: 0,
};

const footerTextStyle = {
  margin: 0,
};
