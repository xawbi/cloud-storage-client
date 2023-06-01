import {FC} from 'react'
import {Grid} from "@mui/material";
import {getExtensionFromFileName} from "@/utils/getExtensionFromFileName";
import {FileDTO} from "@/api/dto/file.dto";
import ModelCard from "@/component/dashboard/content/modelCard";
import FastFiles from "@/component/dashboard/content/files/FastFiles";

interface PhotosProps {
  photosItem: FileDTO
}

const PhotoItem: FC<PhotosProps> = ({photosItem}) => {
  const ext = getExtensionFromFileName(photosItem.fileName)
  // const imgUrl = ext && isImage(ext) ? process.env.NEXT_PUBLIC_HOST + '/uploads/' + item.fileName : ''
  const imgUrl = process.env.NEXT_PUBLIC_HOST + '/uploads/' + `${item.user.id}/` + item.fileName

  return (
    <>
      <Grid sx={{cursor: 'pointer'}} key={photosItem.id} item xs={6} sm={4} md={3} lg={3}>
        <ModelCard fileName={photosItem.originalName} imgUrl={imgUrl}/>
      </Grid>
    </>
  )
}

export default PhotoItem