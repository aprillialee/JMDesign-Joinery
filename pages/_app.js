import "../styles/globals.css";

import NavBar from "../components/primitives/NavBar";
import Footer from "../components/primitives/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
