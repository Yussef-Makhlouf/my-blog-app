import LayoutWithoutSidebar from "@/component/layoutWithoutSidebar";

export default function MyApp({ Component, pageProps }) {
  return (
    <LayoutWithoutSidebar>
      <Component {...pageProps} />
    </LayoutWithoutSidebar>
  );
}
