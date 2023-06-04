import {FC, memo, useState} from 'react'
import {
  Alert, Box,
  Button, LinearProgress,
  Snackbar,
} from "@mui/material";
import * as Api from '@/api'
import {useAppDispatch, useAppSelector} from "@/hook";
import {addFile, addPhotos} from "@/store/fileSlice";

interface FileItem {
  name: string
  url: string
  type: string
}

const UploadButton: FC = memo(() => {
  const dispatch = useAppDispatch()
  const fileList = useAppSelector(state => state.files.fileList);

  const [showAlertError, setShowAlertError] = useState(false);
  // const [fileList, setFileList] = useState<any>([])
  const [uploadProgress, setUploadProgress] = useState(0);

  const onUploadSuccess = async (file: any) => {
    try {
        const options = await Api.file.uploadFile({
          file: file,
          onSuccess: () => {},
          onError: (error: any) => {},
          onProgress: (percentCompleted: any) => {
            setUploadProgress(percentCompleted)
          }
        })
      // setFileList((prevFileList) => [...prevFileList, {file, url: URL.createObjectURL(file)}])
      const fileItem: FileItem = {
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type
      }
      dispatch(addFile(fileItem))

      if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png')
      dispatch(addPhotos(fileItem))

    } catch (e) {
      console.log('aaaa')
      setShowAlertError(true)
    }
  }

  const handleCloseAlert = () => {
    setShowAlertError(false);
  };

  const renderSnackbar = (isOpen: boolean, onClose: () => any, severity: any, message: string) => {
    return (
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={onClose}>
        <Alert severity={severity} onClose={onClose}>
          {message}
        </Alert>
      </Snackbar>
    )
  }

  const FileUploadButton = ({ onFileSelect }: { onFileSelect: (file: File) => void }) => {
    const handleFileSelect = (event: any) => {
      const file = event.target.files[0];
      onFileSelect(file);
    };

    return (
      <div>
        <input
          accept="*"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileSelect}
          id="file-upload-button"
        />
        <label htmlFor="file-upload-button">
          <Button variant="contained" component="span">
            Select File
          </Button>
        </label>
      </div>
    );
  };

  return (
    <>
      <Box sx={{mb: 3, mt: 1}}>
        <FileUploadButton onFileSelect={(file) => onUploadSuccess(file)} />
        {uploadProgress !== 0 && uploadProgress !== 100 && <LinearProgress sx={{mt: 2}} variant="determinate" value={uploadProgress} />}
      </Box>
      {renderSnackbar(showAlertError, handleCloseAlert, 'error', 'Invalid email or password.')}
    </>
  )
})

export default UploadButton