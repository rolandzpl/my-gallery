import { Box, Button, Grid, ImageList, ImageListItem, styled, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface GalleryFormData {
    title: string;
    description: string;
    images: File[];
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const useResponsiveColumns = () => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up("sm"));
    const medium = useMediaQuery(theme.breakpoints.up("md"));
    return (medium ? 10 : (small ? 5 : 3));
}

const GalleryCreate: React.FC = () => {
    const [formData, setFormData] = useState<GalleryFormData>({
        title: "",
        description: "",
        images: [],
    });

    const imageListColumns = useResponsiveColumns();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData(prev => ({
                ...prev,
                images: [...Array.from(e.target.files || []), ...prev.images],
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement gallery creation logic (e.g., API call)
        alert('Gallery created!');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3">Create New Gallery</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} padding={2}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <TextField id="gallery-title"
                            onChange={handleChange}
                            label="Gallery Title"
                            variant="outlined"
                            fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField id="gallery-password"
                            onChange={handleChange}
                            label="Gallery Paqssword"
                            variant="outlined"
                            fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <TextField id="gallery-description"
                            onChange={handleChange}
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={4}
                            maxRows={10} />
                    </Grid>
                    <Grid>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload files
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleFileChange}
                                multiple
                            />
                        </Button>
                        <ImageList cols={imageListColumns} gap={3}>
                            {formData.images.map((file, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Gallery Image ${index + 1}`}
                                        loading="lazy"
                                        style={{ borderRadius: 8 }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <Button variant="contained" component="label">
                            Create Gallery
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default GalleryCreate;