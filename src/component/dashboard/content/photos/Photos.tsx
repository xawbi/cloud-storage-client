import {FC} from 'react'
import {Grid, Typography} from "@mui/material";
import FileItem from "@/component/dashboard/content/files/FileItem";
import {FileDTO} from "@/api/dto/file.dto";
import FastPhotos from "@/component/dashboard/content/photos/FastPhotos";

interface ContentFileProps {
  photosItem: FileDTO[]
}

const Photos: FC<ContentFileProps> = ({photosItem}) => {
  return (
    <>
      <Typography variant={"h6"} sx={{mb: 3}}>Photos</Typography>
      <Grid container spacing={2}>
        {photosItem.map((item) => (
          <FileItem item={item}/>
        ))}
        <FastPhotos/>
      </Grid>
    </>
  )
}

export default Photos