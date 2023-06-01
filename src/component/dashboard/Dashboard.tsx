import {FC, memo, useState} from 'react'
import {Button, Grid} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ContentFiles from "@/component/dashboard/content/ContentFIles";
import {FileDTO} from "@/api/dto/file.dto";
import UploadButton from "@/component/dashboard/uploadButton";

interface PropsItems {
  items: FileDTO[]
  photosItem: FileDTO[],
  trashItem: FileDTO[]
}

const Dashboard: FC<PropsItems> = memo(({items, photosItem, trashItem}) => {

  const buttonItem = [
    {id: 1, text: 'Files'},
    {id: 2, text: 'Photos'},
    {id: 3, text: 'Basket'}
  ]
  const [contentNumber, setContentNumber] = useState(1)

  return (
    <>
      <Grid container justifyContent={'center'} sx={{mt: 3}}>
        <Grid item xs={2} sx={{
          background: '#080918',
          border: '1px solid grey',
          borderRadius: 2,
          textAlign: 'center', pt: 2, pb: 2, mr: 0.6,
          height: '280px'
        }}>
          <UploadButton/>
          {buttonItem.map((item) =>
            <Button key={item.id} variant="text" onClick={() => setContentNumber(item.id)} sx={{
              width: '100%',
              color: 'white', mt: 0.5, mb: 0.5,
              height: 50,
              '&:hover': {
                backgroundColor: '#090A34',
              },
              ...(contentNumber === item.id && {
                backgroundColor: '#090A34',
              }),
            }}>
              {item.text}
            </Button>
          )}
        </Grid>
        <ContentFiles contentNumber={contentNumber} items={items} photosItem={photosItem} trashItem={trashItem}/>
      </Grid>
    </>
  )
})

export default Dashboard