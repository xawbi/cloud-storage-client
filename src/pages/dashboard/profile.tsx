import React from 'react'
import {GetServerSidePropsContext, NextPage} from "next";
import {checkAuth} from "@/utils/checkAuth";
import * as Api from "@/api";
import Layout from "@/component/layouts/Layout";
import {UserDTO} from "@/api/dto/user.dto";
import {Button, Typography} from "@mui/material";
import {useRouter} from "next/router";

interface UserProps {
  userData: UserDTO;
}

const Profile: NextPage<UserProps> & { getLayout?: (page: React.ReactNode) => React.ReactNode } = ({userData}) => {
  const router = useRouter()

  const onClickLogout = () => {
      Api.auth.logout()
      router.push('/dashboard/auth')
  }

  return (
    <>
      <Typography variant="body1" gutterBottom>
        id: {userData.id}
      </Typography>
      <Typography variant="body1" gutterBottom>
        userName: {userData.fullName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        email: {userData.email}
      </Typography>
      <Button onClick={onClickLogout} variant="outlined" color="error">
        Logout
      </Button>
    </>
  )
}

Profile.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Главная">{page}</Layout>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx)

  if (authProps && 'redirect' in authProps) {
    return authProps
  }

  const userData = await Api.user.getMe()

  return {
    props: {userData}
  }
}

export default Profile