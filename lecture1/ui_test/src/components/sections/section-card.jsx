import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

/**
 * SectionCard 컴포넌트
 *
 * MUI Card를 사용한 카드 섹션
 * - 기본, 미디어, 액션 카드
 */
function SectionCard() {
  const handleClick = (action) => {
    alert(`${action} 버튼이 클릭되었습니다!`);
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
        09. Card
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                기본 카드
              </Typography>
              <Typography variant="body2" color="text.secondary">
                가장 기본적인 형태의 카드입니다.
                텍스트 콘텐츠만 포함하고 있습니다.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardMedia
              sx={{ height: 140, backgroundColor: 'primary.main' }}
              title="이미지 영역"
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                미디어 카드
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상단에 이미지나 미디어를 포함하는 카드입니다.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardMedia
              sx={{ height: 140, backgroundColor: 'secondary.main' }}
              title="이미지 영역"
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                액션 카드
              </Typography>
              <Typography variant="body2" color="text.secondary">
                하단에 버튼 액션을 포함하는 카드입니다.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleClick('공유')}>
                공유
              </Button>
              <Button size="small" onClick={() => handleClick('더보기')}>
                더보기
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Outlined 카드
              </Typography>
              <Typography variant="body2" color="text.secondary">
                테두리가 있는 플랫한 스타일의 카드입니다.
                그림자 대신 테두리로 구분합니다.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleClick('확인')}>
                확인
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ backgroundColor: 'primary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                컬러 카드
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                배경색이 적용된 카드입니다.
                강조가 필요한 콘텐츠에 사용합니다.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: 'white' }} onClick={() => handleClick('액션')}>
                액션
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionCard;
