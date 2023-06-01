import * as React from 'react';
import Content from "../component/Content";
import {GetStaticProps, NextPage} from "next";
import {IGetPosts, IPost} from "@/component/interfaces/post.interface";
import axios from "axios";
import Header from "@/component/Header";

const Home: NextPage = () => {

  return (
    <>
    </>
  );
}

export default Home

// export const getStaticProps:GetStaticProps<IGetPosts> = async () => {
//   const {data} = await axios.get<IPost[]>('http://localhost:3001/users/me')
//
//   return {
//     props: {
//       posts: data
//     },
//     revalidate: 10
//   }
// }