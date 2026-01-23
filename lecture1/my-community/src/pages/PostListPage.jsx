import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PetsIcon from '@mui/icons-material/Pets';
import { supabase } from '../utils/supabase';

/**
 * PostListPage 컴포넌트
 *
 * Props:
 * @param {object} user - 로그인한 사용자 정보 [Required]
 * @param {function} onLogout - 로그아웃 시 실행할 함수 [Required]
 *
 * Example usage:
 * <PostListPage user={user} onLogout={handleLogout} />
 */
function PostListPage({ user, onLogout }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { count } = await supabase
        .from('posts')
        .select('*', { count: 'exact', head: true });

      setTotalPages(Math.ceil((count || 0) / postsPerPage));

      const from = (page - 1) * postsPerPage;
      const to = from + postsPerPage - 1;

      const { data: postsData, error } = await supabase
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
        .order('created_at', { ascending: false })
        .range(from, to);

      if (error) throw error;

      const postsWithComments = await Promise.all(
        (postsData || []).map(async (post) => {
          const { count: commentCount } = await supabase
            .from('comments')
            .select('*', { count: 'exact', head: true })
            .eq('post_id', post.id);

          return {
            ...post,
            authorName: post.users?.username || '알 수 없음',
            commentCount: commentCount || 0,
          };
        })
      );

      setPosts(postsWithComments);
    } catch (err) {
      console.error('게시물 로딩 오류:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    return date.toLocaleDateString('ko-KR');
  };

  const truncateContent = (content, maxLength = 50) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AppBar position="static" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PetsIcon />
            <Typography variant="h6" component="div">
              Pet Community
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {user.username}님 환영합니다
            </Typography>
            <Button color="inherit" onClick={onLogout} size="small">
              로그아웃
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
            게시물 목록
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/posts/create')}
          >
            글쓰기
          </Button>
        </Box>

        <Paper elevation={2} sx={{ borderRadius: 2 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : posts.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <PetsIcon sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
              <Typography color="text.secondary">
                아직 게시물이 없습니다. 첫 번째 글을 작성해보세요!
              </Typography>
            </Box>
          ) : (
            <List disablePadding>
              {posts.map((post, index) => (
                <Box key={post.id}>
                  {index > 0 && <Divider />}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => navigate(`/posts/${post.id}`)}
                      sx={{ py: 2, px: { xs: 2, md: 3 } }}
                    >
                      <Box sx={{ width: '100%' }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 500,
                            mb: 0.5,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {truncateContent(post.content)}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                          }}
                        >
                          <Typography variant="caption" color="text.secondary">
                            {post.authorName}
                          </Typography>
                          <Chip
                            icon={<FavoriteIcon sx={{ fontSize: 14 }} />}
                            label={post.like_count}
                            size="small"
                            variant="outlined"
                            sx={{ height: 24 }}
                          />
                          <Chip
                            icon={<ChatBubbleOutlineIcon sx={{ fontSize: 14 }} />}
                            label={post.commentCount}
                            size="small"
                            variant="outlined"
                            sx={{ height: 24 }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(post.created_at)}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                </Box>
              ))}
            </List>
          )}
        </Paper>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
              showFirstButton
              showLastButton
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default PostListPage;
