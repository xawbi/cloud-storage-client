import {FC} from 'react'
import {useAppSelector} from "@/hook";
import ModelCard from "@/component/dashboard/content/modelCard";
import {Grid} from "@mui/material";

const FastPhotos: FC = () => {
  const photosList = useAppSelector(state => state.files.photosList);

  return (
    <>
      {photosList && photosList.map(item => <>
        <Grid sx={{cursor: 'pointer'}} key={item.id} item xs={6} sm={4} md={3} lg={3}>
          <ModelCard fileName={item.name} imgUrl={item.url} ext={item.type}/>
        </Grid>
      </>)}
    </>
  )
}

export default FastPhotos