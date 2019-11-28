import React from "react";
import App, { Container } from "next/app";

import Layout from "../components/Layout";

import "../styles/list.css";
import "../styles/checkout.css";
import "../styles/product.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
