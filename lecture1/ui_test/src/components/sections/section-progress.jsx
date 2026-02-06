import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

/**
 * SectionProgress 컴포넌트
 *
 * MUI Progress를 사용한 진행률 표시 섹션
 * - CircularProgress, LinearProgress
 * - 정적, 동적 진행률
 */
function SectionProgress() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 10;
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setProgress(0);
    setIsRunning(true);
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
        12. Progress
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Circular Progress
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={progress} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {progress}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Linear Progress
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <LinearProgress />
            <LinearProgress color="secondary" />
            <LinearProgress variant="determinate" value={progress} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={progress + 20} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleStart}
              disabled={isRunning}
            >
              {isRunning ? '진행 중...' : '시작'}
            </Button>
            <Typography variant="body2" color="text.secondary">
              현재 진행률: {progress}%
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionProgress;
