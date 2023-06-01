import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FileItem {
  name: string;
  url: string;
  type: string
}

type FilesState = {
  fileList: FileItem[];
  photosList: FileItem[];
  trashList: FileItem[];
}

const initialState: FilesState = {
  fileList: [],
  photosList: [],
  trashList: [],
}

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile(state, action: PayloadAction<FileItem>) {
      state.fileList.push(action.payload)
    },
    addPhotos(state, action: PayloadAction<FileItem>) {
      state.photosList.push(action.payload)
    },
    addTrash(state, action: PayloadAction<FileItem>) {
      state.trashList.push(action.payload)
    },
    clearFileList(state) {
      state.fileList = []
      state.photosList = []
      state.trashList = []
    }
  },
});

export const { addFile, clearFileList, addPhotos, addTrash } = fileSlice.actions;

export default fileSlice.reducer;