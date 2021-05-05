import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../components/layout";

import { Provider } from "react-redux";

import MyContext from "../lib/my-context";

import testHoc from "../lib/with-redux";

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Layout>
      <Provider store={reduxStore}>
        <MyContext.Provider value="Melrose">
          <Component {...pageProps} />
        </MyContext.Provider>
      </Provider>
    </Layout>
  );
}

export default testHoc(MyApp);
