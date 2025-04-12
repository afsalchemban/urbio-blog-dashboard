import { Breadcrumbs, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';

interface PostDetailBreadcrumbProps {
  postTitle: string;
}

const PostDetailBreadcrumb: FC<PostDetailBreadcrumbProps> = ({ postTitle }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 4 }}>
      <NextLink href="/" passHref>
        <Link color="inherit">Home</Link>
      </NextLink>
      <Typography color="text.primary">Blog</Typography> {/* Removed the link here */}
      <Typography color="text.primary">{postTitle}</Typography>
    </Breadcrumbs>
  );
};

export default PostDetailBreadcrumb;
