import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../comonents/layout";

import MyContext from "../lib/my-context";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MyContext.Provider value="Melrose">
        <Component {...pageProps} />
      </MyContext.Provider>
    </Layout>
  );
}

export default MyApp;
