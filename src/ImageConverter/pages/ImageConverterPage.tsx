import { Typography } from "@mui/material";
import FileUploader from "../components/FileUploiader";

export const ImageConverterPage = () => {
    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Image Converter
            </Typography>
            <FileUploader  />
        </div>
    );
}
