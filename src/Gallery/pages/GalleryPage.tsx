import { type FC } from 'react';
import { Gallery } from '../components';
import { useParams } from 'react-router';
import { useGallery } from '../hooks/useGallery';
import Typography from '@mui/material/Typography';

export const GalleryPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { items, title } = useGallery(id);
    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                {title}
            </Typography>
            <Gallery items={items} />
        </div>
    );
};
