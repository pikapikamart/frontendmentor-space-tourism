import Head from "next/head";
import { ReactNode } from "react";
import { useRouter } from "next/dist/client/router";
import { Header } from "@/components/layout/header";


type LayoutChildren = {
  children: ReactNode
}

const Layout = ({ children}: LayoutChildren) =>{
  const pathName = useRouter().pathname.slice(1);

  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Frontendmentor space tourism for people who likes space"/>
        <meta name="keywords" content="Space, Tourism, Space tourism" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow&display=swap" rel="stylesheet" />
        <title>Frontendmentor Space Tourism</title>
      </Head>
      <Header />
      <main className={`main ${pathName===""? "main--theme-home":
                              pathName==="destination"? "main--theme-destination":
                              pathName==="crew"? "main--theme-crew":
                              pathName==="technology"? "main--theme-technology": ""}`}>
        {children}
      </main>
    </>
  )
}


export default Layout;