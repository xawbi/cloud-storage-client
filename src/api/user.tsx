import axios from "@/core/axios";
import {destroyCookie} from "nookies";
import {UserDTO} from "@/api/dto/user.dto";

export const getMe = async (): Promise<UserDTO> => {
  const {data} = await axios.get('users/me')
  return data
}