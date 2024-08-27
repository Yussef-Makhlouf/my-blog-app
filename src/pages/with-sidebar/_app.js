import LayoutWithSidebar from "@/component/layoutWithSidebar";

export default function MyApp({ Component, pageProps }) {
  return (
    <LayoutWithSidebar>
      <Component {...pageProps} />
    </LayoutWithSidebar>
  );
}
