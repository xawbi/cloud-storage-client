import {FC} from 'react'
import {Grid, Typography} from "@mui/material";
import FileItem from "@/component/dashboard/content/files/FileItem";
import {FileDTO} from "@/api/dto/file.dto";
import FastFiles from "@/component/dashboard/content/files/FastFiles";

interface ContentFileProps {
  items: FileDTO[]
}

const Files: FC<ContentFileProps> = ({items}) => {
  return (
    <>
      <Typography variant={"h6"} sx={{mb: 3}}>Files</Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <FileItem item={item}/>
        ))}
        <FastFiles/>
      </Grid>
    </>
  )
}

export default Files