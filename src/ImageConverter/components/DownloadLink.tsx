import type { FC } from 'react';
import { useImageDataUrl } from '../hooks/useImageDataUrl';

export const DownloadLink: FC<{ image: Blob | null; fileName: string; }> = ({ image, fileName }) => {
  const imageDataUrl = useImageDataUrl(image);
  return (
    <a href={imageDataUrl} download={fileName}>
      Save Image
    </a>
  );
};
