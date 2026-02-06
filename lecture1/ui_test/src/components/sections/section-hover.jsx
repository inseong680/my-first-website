import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * SectionHover 컴포넌트
 *
 * 다양한 CSS 호버 효과를 보여주는 섹션
 * - 색상, 크기, 그림자, 회전 등
 */
function SectionHover() {
  const baseBoxStyle = {
    width: '100%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <Box
      sx={{
        mb: 4,
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        backgroundColor: 'background.paper',
        boxShadow: 1,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          mb: 3,
          fontWeight: 600,
          fontSize: { xs: '1.25rem', md: '1.5rem' },
        }}
      >
        18. Hover
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Scale Up
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            확대
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Scale Down
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'secondary.main',
              color: 'white',
              '&:hover': {
                transform: 'scale(0.95)',
              },
            }}
          >
            축소
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Shadow
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'success.main',
              color: 'white',
              boxShadow: 1,
              '&:hover': {
                boxShadow: 10,
                transform: 'translateY(-4px)',
              },
            }}
          >
            그림자
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Rotate
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'warning.main',
              color: 'white',
              '&:hover': {
                transform: 'rotate(5deg)',
              },
            }}
          >
            회전
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Color Change
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'grey.200',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            색상 변경
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Border
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'background.paper',
              border: '2px solid',
              borderColor: 'grey.300',
              '&:hover': {
                borderColor: 'primary.main',
                borderWidth: 3,
              },
            }}
          >
            테두리
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Glow
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'error.main',
              color: 'white',
              '&:hover': {
                boxShadow: '0 0 20px rgba(211, 47, 47, 0.6)',
              },
            }}
          >
            글로우
          </Paper>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }}
          >
            Skew
          </Typography>
          <Paper
            sx={{
              ...baseBoxStyle,
              backgroundColor: 'info.main',
              color: 'white',
              '&:hover': {
                transform: 'skewX(-5deg)',
              },
            }}
          >
            기울기
          </Paper>
        </Grid>
      </Grid>

      <Typography
        variant="subtitle1"
        sx={{ mt: 4, mb: 2, fontWeight: 500, color: 'text.secondary' }}
      >
        버튼 호버 효과
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: 6,
              },
            }}
          >
            Lift Up
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              py: 1.5,
              overflow: 'hidden',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.main',
                transition: 'left 0.3s ease',
                zIndex: 0,
              },
              '&:hover::before': {
                left: 0,
              },
              '&:hover': {
                color: 'white',
                borderColor: 'primary.main',
              },
              '& span': {
                position: 'relative',
                zIndex: 1,
              },
            }}
          >
            <span>Slide Fill</span>
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.5,
              '& .MuiButton-endIcon': {
                transition: 'transform 0.3s ease',
              },
              '&:hover .MuiButton-endIcon': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Arrow Move
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            startIcon={<FavoriteIcon />}
            sx={{
              py: 1.5,
              '& .MuiButton-startIcon': {
                transition: 'transform 0.3s ease',
              },
              '&:hover .MuiButton-startIcon': {
                transform: 'scale(1.3)',
              },
            }}
          >
            Icon Scale
          </Button>
        </Grid>
      </Grid>

      <Typography
        variant="subtitle1"
        sx={{ mt: 4, mb: 2, fontWeight: 500, color: 'text.secondary' }}
      >
        텍스트 호버 효과
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Typography
          sx={{
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Color Change
        </Typography>

        <Typography
          sx={{
            cursor: 'pointer',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 2,
              backgroundColor: 'primary.main',
              transition: 'width 0.3s ease',
            },
            '&:hover::after': {
              width: '100%',
            },
          }}
        >
          Underline
        </Typography>

        <Typography
          sx={{
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              letterSpacing: 2,
            },
          }}
        >
          Letter Spacing
        </Typography>

        <Typography
          sx={{
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            },
          }}
        >
          Text Shadow
        </Typography>
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 4, color: 'text.secondary', textAlign: 'center' }}
      >
        각 요소에 마우스를 올려 호버 효과를 확인해보세요
      </Typography>
    </Box>
  );
}

export default SectionHover;
