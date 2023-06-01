import {UserDTO} from "@/api/dto/user.dto";

export interface FileDTO {
  id: number
  fileName: string
  originalName: string
  size: number
  mimetype: string
  user: UserDTO
  deleteAt: string | null
}