import { type FC } from 'react';
import Typography from '@mui/material/Typography';
import { Gallery } from '../components';
import itemData from '../data/itemData';

const GalleryPage: FC = () => {
    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Image Gallery
            </Typography>
            <Gallery items={itemData} />
        </div>
    );
};

export default GalleryPage;
