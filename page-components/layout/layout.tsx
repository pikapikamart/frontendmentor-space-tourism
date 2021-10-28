import Head from "next/head";
import { ReactNode } from "react";

import { Header } from "@/components/layout/header";


type LayoutChildren = {
  children: ReactNode
}

const Layout = ({ children}: LayoutChildren) =>{
  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Frontendmentor space tourism for people who likes space"/>
        <meta name="keywords" content="Space, Tourism, Space tourism" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
        <title>Frontendmentor Space Tourism</title>
      </Head>
      <Header />
      {children}
    </>
  )
}


export default Layout;