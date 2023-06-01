import {FC} from 'react'
import {NextPage} from "next";
import Head from "next/head";
import LoginForm from "@/component/auth/AuthForm";
import AuthForm from "@/component/auth/AuthForm";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main>
        <AuthForm/>
      </main>
    </>
  )
}

export default AuthPage