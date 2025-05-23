import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { Post } from '@/types/Post';
import { useTheme } from '@mui/material/styles';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const theme = useTheme();

    return (
        <Card sx={{ display: "flex", flexDirection: "column", boxShadow: 0, border: "none" }}>
            <CardContent>
                <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                    {post.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontStyle: 'italic',
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.secondary,
                        marginBottom: theme.spacing(1),
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minHeight: '3rem', // Ensures space for 2 lines even if shorter
                    }}
                >
                    {post.body.substring(0, 100)}...
                </Typography>

                {/* Author and button aligned left and right */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
                        {post.author}
                    </Typography>

                    {/* Link with Button to navigate to the post */}
                    <Link href={`/posts/${post.id}`} passHref>
                        <Button
                            variant="text"
                            sx={{
                                textTransform: "none",
                                color: "primary.main",
                                border: "none",
                                padding: 0
                            }}
                        >
                            Read more &gt;&gt;
                        </Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PostCard;
