import { useRouter } from 'next/router';
import { useGetPostQuery } from '../../store/api';
import { Card, CardContent, Typography, CircularProgress, Box, Breadcrumbs, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NextLink from 'next/link';
import PostDetailBreadcrumb from './PostDetailBreadcrumb';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading, error } = useGetPostQuery(Number(id));

  const theme = useTheme();

  if (isLoading) return <CircularProgress />;
  if (error || !post) return <Typography color="error">Post not found.</Typography>;

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <PostDetailBreadcrumb postTitle={post.title} />

      <Card
        sx={{
          width: '100%',
          borderRadius: 2,
          boxShadow: 0,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <CardContent>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Author: {post.author || 'Unknown'}
          </Typography>
          <Typography variant="body1">{post.body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostDetail;