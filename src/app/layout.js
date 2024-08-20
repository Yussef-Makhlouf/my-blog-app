import "../app/globals.css";
import Layout from "@/component/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout  >{children}
          
        </Layout>

      </body>
    </html>
  );
}
