import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../components/layout";

import { Provider } from "react-redux";

import MyContext from "../lib/my-context";

import testHoc from "../lib/with-redux";

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Layout>
        <MyContext.Provider value="Melrose">
          <Component {...pageProps} />
        </MyContext.Provider>
      </Layout>
    </Provider>
  );
}

export default testHoc(MyApp);
