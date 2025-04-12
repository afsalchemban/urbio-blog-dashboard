import React, { useState } from 'react';
import { useAddPostMutation } from '@/store/api';
import BaseButton from "@/components/common/BaseButton";
import BaseModal from '@/components/common/BaseModal';
import PostForm from '@/components/post/PostForm';
import ErrorMessage from '@/components/common/ErrorMessage';
import { Post } from '@/types/Post';

const PostFromButton = () => {
    const [open, setOpen] = useState(false);
    const [addPost, { isLoading, error }] = useAddPostMutation();

    const handlePostSubmit = async (data: Post) => {
        try {
            await addPost(data).unwrap(); 
            setOpen(false);
        } catch (err) {
            console.error('Failed to submit post:', err);
        }
    };

    return (
        <>
            <BaseButton onClick={() => setOpen(true)}>Add New Post</BaseButton>
            <BaseModal open={open} onClose={() => setOpen(false)} title="Add New Post">
                <PostForm onSubmit={handlePostSubmit} isLoading={isLoading} />
                {error && <ErrorMessage message="Error creating post" />}
            </BaseModal>
        </>
    );
};

export default PostFromButton;
