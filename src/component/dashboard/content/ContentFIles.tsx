import {FC} from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import Files from "@/component/dashboard/content/files/Files";
import Photos from "@/component/dashboard/content/photos/Photos";
import Basket from "@/component/dashboard/content/basket/Trash";
import {FileDTO} from "@/api/dto/file.dto";
import Trash from "@/component/dashboard/content/basket/Trash";

interface DashboardProps {
  contentNumber: number
  items: FileDTO[]
  photosItem: FileDTO[],
  trashItem: FileDTO[]
}

const ContentFiles: FC<DashboardProps> = ({contentNumber, items, photosItem, trashItem}) => {

  let content;
  if (contentNumber === 1) {
    content = <Files items={items} />;
  } else if (contentNumber === 2) {
    content = <Photos photosItem={photosItem} />;
  } else if (contentNumber === 3) {
    content = <Trash trashItem={trashItem} />;
  } else {
    content = null;
  }

  return (
    <>
      <Grid item xs={9} sx={{
        background: '#080918',
        border: '1px solid grey',
        borderRadius: 2, ml: 0.6,
        padding: 2,
        height: 'calc(100vh - 118px)',
        overflow: 'auto'
      }}>
        {content}
      </Grid>
    </>
  )
}

export default ContentFiles