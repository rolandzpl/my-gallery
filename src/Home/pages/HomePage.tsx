import { Box, Tab, Tabs } from "@mui/material";
import type { FC } from "react";
import React from "react";
import { SourceEditor } from "../components/SourceEditor";

// CKEditor?
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// Monaco Editor?
// import Editor from '@monaco-editor/react';`

const WYSIWYGEditor = () => <div>WYSIWYG Editor Placeholder</div>;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export const HomePage: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (<div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Editor" {...a11yProps(0)} />
                <Tab label="Source" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <WYSIWYGEditor />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <SourceEditor />
        </CustomTabPanel>
    </div>);
}