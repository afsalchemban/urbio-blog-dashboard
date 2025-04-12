import React from "react";

import { useGetPostsQuery } from '@/store/api';
import { Grid, Typography, CircularProgress } from "@mui/material";
import PostCard from "@/components/post/PostCard";
import PostListHeader from "./PostListHeader";

const PostList = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery();

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading posts</Typography>;

    return (
        <div>
            <PostListHeader/>
            <Grid container spacing={2}>
                {posts?.map((post) => (
                    <Grid item xs={12} sm={6} md={6} key={post.id}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PostList;
