import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67fa1570094de2fe6ea31be2.mockapi.io' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
            providesTags: ['Posts'],
        }),
        getPost: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
        addPost: builder.mutation<Post, Partial<Post>>({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = api;