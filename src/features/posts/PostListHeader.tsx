import React from "react";
import { Typography, Box } from "@mui/material";
import PostFromButton from "./PostFromButton";

const PostListHeader = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                mb: 2,
            }}
        >
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Blog
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'lighter', color: 'text.secondary' }}
                >
                    Discover insights from our latest blog posts.
                </Typography>
            </Box>
            <PostFromButton />
        </Box>
    );
};

export default PostListHeader;
