import axios from "@/core/axios";
import {FileDTO} from "@/api/dto/file.dto";

type FileType = 'all' | 'photos' | 'trash'

export const getAll = async (type: FileType = 'all'): Promise<FileDTO[]> => {
  const {data} = await axios.get('files?type=' + type)
  return data
}

export const remove = (ids: number[]): Promise<void> => {
  return axios.delete('/files?ids=' + ids)
}

export const uploadFile = async (option: any) => {
  const {onSuccess, onError, file, onProgress} = option

  const formData = new FormData()
  formData.append('file', file)

  const config = {
    headers: {'Content-Type': 'multipart/form-data'},
    onUploadProgress: progressEvent => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      onProgress(percentCompleted)
    }
  }

  try {
    const {data} = await axios.post('files', formData, config)
    onSuccess()
    return data
  } catch (e) {
    onError({e})
    console.log(e)
  }
}