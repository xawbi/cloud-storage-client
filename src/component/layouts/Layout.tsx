import {FC} from 'react'
import Head from "next/head";
import Header from "@/component/Header";
import React from "react"
import {Container} from "@mui/material";

interface LayoutProps {
  title: string
}

const Layout: FC<React.PropsWithChildren<LayoutProps>> = ({title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header/>
        <Container>
          {children}
        </Container>
      </main>
    </>
  )
}

export default Layout