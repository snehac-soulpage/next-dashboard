import React from "react";
import Head from "next/head";
import MiniSidebar from "../components/Dashboard/sidebar";

const Index = () => (
  <div>
    <Head>
      <title>My styled page</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="//db.onlinewebfonts.com/c/0e979bd4a3c1c6ac788ed57ac569667f?family=revicons"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/static/Headerstyle.css" rel="stylesheet" />
    </Head>
    <MiniSidebar></MiniSidebar>
  </div>
);

export default Index;
