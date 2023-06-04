import {FC} from 'react'
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import funcExtensions from './funcExtensions'

interface FileItemProps {
  fileName: string
  imgUrl: string
  ext: string | undefined
}

const ModelCard: FC<FileItemProps> = ({ fileName, imgUrl, ext }) => {
  const handleError = (event: any) => {
    event.target.style.display = 'none'
  }

  let lastDotIndex: number = 0
  let extensionFast: string = ''

  if (ext != undefined) {
    lastDotIndex = ext.lastIndexOf('/')
    extensionFast = ext.slice(lastDotIndex + 1)
    console.log(extensionFast)
  }

  return (
    <>
      <Card sx={{ border: '1px solid grey' }}>
        {funcExtensions.isImageFile(extensionFast || imgUrl) ? (
          <CardMedia
            component="img"
            height="140"
            image={imgUrl}
            alt={fileName}
            onError={handleError}
            sx={{ borderBottom: '1px solid grey' }}
          />
        ) : (
          <Box sx={{p: 6}}>
              <DescriptionIcon fontSize={'large'}/>
              .{funcExtensions.getFileExtension(extensionFast || imgUrl)}
          </Box>
        )}
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            title={fileName}
            sx={{
              wordWrap: 'break-word',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {fileName}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ModelCard