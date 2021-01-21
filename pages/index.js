import Head from "next/head";

import HomePage from "../components/homepage/Homepage";
import OurServices from "./ourservices";
import Gallery from "./gallery";
import OurStoryPage from "./ourstory";

export default function Home() {
  return (
    <>
      <Head>
        <title>JM Design &#38; Joinery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      <OurServices />
      <Gallery />
      <OurStoryPage />
    </>
  );
}
