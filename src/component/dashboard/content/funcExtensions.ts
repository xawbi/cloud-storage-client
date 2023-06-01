const getFileExtension = (imgUrl: string) => {
  const lastDotIndex = imgUrl.lastIndexOf('.');
  return imgUrl.slice(lastDotIndex + 1);
}

const isImageFile = (imgUrl: string) => {
  const lastDotIndex = imgUrl.lastIndexOf('.');
  const extension = imgUrl.slice(lastDotIndex + 1);

  return extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif' || extension === 'bmp' || extension === 'webp';
}

export default {getFileExtension, isImageFile}