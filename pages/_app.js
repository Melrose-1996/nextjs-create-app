import "../styles/globals.css";
import "antd/dist/antd.css";
import App from "next/app";
import Layout from "../components/layout";

import Link from "next/link";

// import Router from "next/router";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import PageLoading from "../components/PageLoading";

import { Provider } from "react-redux";

import MyContext from "../lib/my-context";

import testHoc from "../lib/with-redux";

function MyApp({ Component, pageProps, reduxStore }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // return loading && <div>Loading....{/*I have an animation here*/}</div>;

  return (
    <Provider store={reduxStore}>
      <Layout>
        <MyContext.Provider value="Melrose">
          {/* <PageLoading /> */}
          {loading ? <PageLoading /> : null}
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/detail">
            <a>Detail</a>
          </Link>
          <Component {...pageProps} />
        </MyContext.Provider>
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default testHoc(MyApp);
