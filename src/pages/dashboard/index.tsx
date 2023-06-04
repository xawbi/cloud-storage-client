import {GetServerSidePropsContext, NextPage} from "next";
import {checkAuth} from "@/utils/checkAuth";
import Layout from "@/component/layouts/Layout";
import React, {ComponentType} from "react"
import Dashboard from "@/component/dashboard/Dashboard";
import * as Api from "@/api";
import {FileDTO} from "@/api/dto/file.dto";

interface Props {
  items: FileDTO[]
  photosItem: FileDTO[]
  trashItem: FileDTO[]
}

interface DashboardPageStatic {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
}

const DashboardPage: NextPage<Props> & { getLayout?: (page: React.ReactNode) => React.ReactNode } = ({ items, photosItem, trashItem }) => {

  return (
    <>
      <Dashboard items={items} photosItem={photosItem} trashItem={trashItem}/>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title="Dashboard / Профиль">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx)

  if (authProps && 'redirect' in authProps) {
    return authProps
  }

  try {
    const itemsPromise = Api.file.getAll();
    const photosItemPromise = Api.file.getAll('photos');
    const trashItemPromise = Api.file.getAll('trash');

    const [items, photosItem, trashItem] = await Promise.all([itemsPromise, photosItemPromise, trashItemPromise]);

    return {
      props: {
        items,
        photosItem,
        trashItem
      }
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        items: [],
        photosItem: [],
        trashItem: []
      }
    }
  }
}

export default DashboardPage