import React from 'react';
import { useGetPostsQuery } from '@/store/api';
import PostListHeader from './PostListHeader';
import { Grid } from '@mui/material';
import PostCard from '@/components/post/PostCard';

const PostsList = ({ initialData }: { initialData: any[] }) => {
    const { data: posts = initialData } = useGetPostsQuery();

    return (
        <div>
            <PostListHeader />
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

export default PostsList;
