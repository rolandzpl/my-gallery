import { Box, Button, Grid, ImageList, ImageListItem, Paper, styled, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useMemo, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface GalleryFormData {
    title: string;
    description: string;
    password: string;
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
                        {
                            useMemo(() => (
                                <TextField id="gallery-title"
                                    onChange={handleChange}
                                    name="title"
                                    label="Gallery Title"
                                    value={formData.title}
                                    variant="outlined"
                                    fullWidth />
                            ), [formData.title])
                        }
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        {
                            useMemo(() => (
                                <TextField id="gallery-password"
                                    onChange={handleChange}
                                    name="password"
                                    label="Gallery Paqssword"
                                    variant="outlined"
                                    fullWidth />
                            ), [formData.password])
                        }
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        {
                            useMemo(() => (
                                <TextField id="gallery-description"
                                    onChange={handleChange}
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    maxRows={10} />
                            ), [formData.description])
                        }
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
                        {
                            useMemo(() => (<ImageList cols={imageListColumns} gap={3}>
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
                            </ImageList>), [formData.images])
                        }
                    </Grid>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <Button variant="contained" component="label">
                            Create Gallery
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Paper 
                elevation={5}
                style={{
                    textAlign: "left",
                    backgroundColor: "beige",
                    padding: "1em"
                }}>
                <Typography>Title:</Typography>
                <Typography>{formData.title}</Typography>
                <Typography>Password:</Typography>
                <Typography>{formData.password}</Typography>
                <Typography>Description:</Typography>
                <Typography>{formData.description}</Typography>
                <Typography>Image #:</Typography>
                <Typography>{formData.images.length}</Typography>
            </Paper>
        </Box>
    );
};

// type GalleryCreatePanelProps = {
//     handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
// };

// const GalleryCreatePanel: React.FC<GalleryCreatePanelProps> = ({
//     handleChange
// }) => {
//     return <Grid container spacing={2} padding={2}>
//         <Grid size={{ xs: 12, md: 8 }}>
//             <TextField id="gallery-title"
//                 onChange={handleChange}
//                 label="Gallery Title"
//                 variant="outlined"
//                 fullWidth />
//         </Grid>
//         <Grid size={{ xs: 12, md: 4 }}>
//             <TextField id="gallery-password"
//                 onChange={handleChange}
//                 label="Gallery Paqssword"
//                 variant="outlined"
//                 fullWidth />
//         </Grid>
//         <Grid size={{ xs: 12, md: 12 }}>
//             <TextField id="gallery-description"
//                 onChange={handleChange}
//                 label="Description"
//                 variant="outlined"
//                 fullWidth
//                 multiline
//                 minRows={4}
//                 maxRows={10} />
//         </Grid>
//         <Grid>
//             <Button
//                 component="label"
//                 role={undefined}
//                 variant="contained"
//                 tabIndex={-1}
//                 startIcon={<CloudUploadIcon />}
//             >
//                 Upload files
//                 <VisuallyHiddenInput
//                     type="file"
//                     onChange={handleFileChange}
//                     multiple
//                 />
//             </Button>
//             <ImageList cols={imageListColumns} gap={3}>
//                 {formData.images.map((file, index) => (
//                     <ImageListItem key={index}>
//                         <img
//                             src={URL.createObjectURL(file)}
//                             alt={`Gallery Image ${index + 1}`}
//                             loading="lazy"
//                             style={{ borderRadius: 8 }}
//                         />
//                     </ImageListItem>
//                 ))}
//             </ImageList>
//         </Grid>
//         <Grid size={{ xs: 6, md: 8 }}>
//             <Button variant="contained" component="label">
//                 Create Gallery
//             </Button>
//         </Grid>
//     </Grid>
// }

export default GalleryCreate;