import {FC} from 'react'
import {Grid} from "@mui/material";
import {getExtensionFromFileName} from "@/utils/getExtensionFromFileName";
import {FileDTO} from "@/api/dto/file.dto";
import ModelCard from "@/component/dashboard/content/modelCard";
import FastFiles from "@/component/dashboard/content/files/FastFiles";

interface TrashProps {
  trashItem: FileDTO
}

const TrashItem: FC<TrashProps> = ({trashItem}) => {
  const ext = getExtensionFromFileName(trashItem.fileName)
  // const imgUrl = ext && isImage(ext) ? process.env.NEXT_PUBLIC_HOST + '/uploads/' + item.fileName : ''
  const imgUrl = process.env.NEXT_PUBLIC_HOST + '/uploads/' + `${item.user.id}/` + item.fileName

  return (
    <>
      <Grid sx={{cursor: 'pointer'}} key={trashItem.id} item xs={6} sm={4} md={3} lg={3}>
        <ModelCard fileName={trashItem.originalName} imgUrl={imgUrl}/>
      </Grid>
    </>
  )
}

export default TrashItem