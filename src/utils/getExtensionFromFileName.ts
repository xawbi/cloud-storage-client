export const getExtensionFromFileName = (fileName: string ) => {
  return fileName.split('.').pop()
}