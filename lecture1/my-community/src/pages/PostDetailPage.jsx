import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { supabase } from '../utils/supabase';

/**
 * PostDetailPage 컴포넌트
 *
 * Props:
 * @param {object} user - 로그인한 사용자 정보 [Required]
 *
 * Example usage:
 * <PostDetailPage user={user} />
 */
function PostDetailPage({ user }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          id,
          title,
          content,
          like_count,
          created_at,
          author_id,
          users (username)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;

      setPost({
        ...data,
        authorName: data.users?.username || '알 수 없음',
      });
    } catch (err) {
      console.error('게시물 로딩 오류:', err);
      navigate('/posts');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          id,
          content,
          created_at,
          author_id,
          users (username)
        `)
        .eq('post_id', id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setComments(
        (data || []).map((comment) => ({
          ...comment,
          authorName: comment.users?.username || '알 수 없음',
        }))
      );
    } catch (err) {
      console.error('댓글 로딩 오류:', err);
    }
  };

  const handleLike = async () => {
    if (!post) return;

    const newLikeCount = isLiked ? post.like_count - 1 : post.like_count + 1;

    try {
      const { error } = await supabase
        .from('posts')
        .update({ like_count: newLikeCount })
        .eq('id', id);

      if (error) throw error;

      setPost({ ...post, like_count: newLikeCount });
      setIsLiked(!isLiked);
    } catch (err) {
      console.error('좋아요 오류:', err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('comments')
        .insert([{
          content: newComment.trim(),
          author_id: user.id,
          post_id: parseInt(id),
        }]);

      if (error) throw error;

      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error('댓글 작성 오류:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate('/posts')}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            게시물
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, mb: 3 }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
            {post?.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3,
              color: 'text.secondary',
            }}
          >
            <Typography variant="body2">{post?.authorName}</Typography>
            <Typography variant="body2">|</Typography>
            <Typography variant="body2">{formatDate(post?.created_at)}</Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Typography
            variant="body1"
            sx={{
              whiteSpace: 'pre-wrap',
              lineHeight: 1.8,
              minHeight: 200,
              mb: 3,
            }}
          >
            {post?.content}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={handleLike}
              color={isLiked ? 'error' : 'default'}
            >
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              좋아요 {post?.like_count}
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <ChatBubbleOutlineIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              댓글 {comments.length}개
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleCommentSubmit}
            sx={{ display: 'flex', gap: 2, mb: 3 }}
          >
            <TextField
              fullWidth
              placeholder="댓글을 입력하세요"
              variant="outlined"
              size="small"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={!newComment.trim() || isSubmitting}
            >
              등록
            </Button>
          </Box>

          {comments.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography color="text.secondary">
                아직 댓글이 없습니다. 첫 번째 댓글을 남겨보세요!
              </Typography>
            </Box>
          ) : (
            <List disablePadding>
              {comments.map((comment, index) => (
                <Box key={comment.id}>
                  {index > 0 && <Divider sx={{ my: 2 }} />}
                  <ListItem disablePadding sx={{ display: 'block' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {comment.authorName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(comment.created_at)}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                      {comment.content}
                    </Typography>
                  </ListItem>
                </Box>
              ))}
            </List>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default PostDetailPage;
