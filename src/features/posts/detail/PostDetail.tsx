import { useRouter } from 'next/router';
import { useGetPostQuery } from '../../../store/api';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PostDetailBreadcrumb from './PostDetailBreadcrumb';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading, error } = useGetPostQuery(Number(id));

  const theme = useTheme();

  if (isLoading) return <LoadingSpinner />;
  if (error || !post) return <ErrorMessage message="Post not found." /> ;

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
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2, color: 'text.primary' }}>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2, color: 'text.secondary' }}>
            Author: {post.author || 'Unknown'}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>{post.body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostDetail;