import React, { useState } from 'react';
import { useAddPostMutation } from '@/store/api';
import BaseButton from "@/components/common/BaseButton";
import BaseModal from '@/components/common/BaseModal';
import PostForm from '@/components/post/PostForm';
import { useRouter } from 'next/router';
import ErrorMessage from '@/components/common/ErrorMessage';

const PostFromButton = () => {

    const [open, setOpen] = useState(false);
    const [addPost, { isLoading, error }] = useAddPostMutation();

    const handlePostSubmit = async (data: any) => {
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
            </BaseModal>
            {error && <ErrorMessage message="Error creating post" />}
        </>
    );
};

export default PostFromButton;
