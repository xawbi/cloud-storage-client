import {FC} from 'react'
import {Grid, ImageList, ImageListItem, Typography} from "@mui/material";
import FileItem from "@/component/dashboard/content/files/FileItem";
import FastPhotos from "@/component/dashboard/content/photos/FastPhotos";
import {FileDTO} from "@/api/dto/file.dto";
import FastTrash from "@/component/dashboard/content/basket/FastTrash";

interface ContentFileProps {
  trashItem: FileDTO[]
}

const Trash: FC<ContentFileProps> = ({trashItem}) => {
  return (
    <>
      <Typography variant={"h6"} sx={{mb: 3}}>Basket</Typography>
      <Grid container spacing={2}>
        {trashItem.map((item) => (
          <FileItem item={item}/>
        ))}
        <FastTrash/>
      </Grid>
    </>
  )
}

export default Trash