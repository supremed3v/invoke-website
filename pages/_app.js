import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import Modal from "react-modal";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

Modal.setAppElement("#__next");
