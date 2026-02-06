import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';

/**
 * SectionAnimation 컴포넌트
 *
 * MUI Transition을 사용한 애니메이션 섹션
 * - Fade, Grow, Slide, Zoom, Collapse
 */
function SectionAnimation() {
  const [show, setShow] = useState({
    fade: true,
    grow: true,
    slide: true,
    zoom: true,
    collapse: true,
  });

  const handleToggle = (type) => {
    setShow((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleToggleAll = () => {
    const allVisible = Object.values(show).every((v) => v);
    setShow({
      fade: !allVisible,
      grow: !allVisible,
      slide: !allVisible,
      zoom: !allVisible,
      collapse: !allVisible,
    });
  };

  const boxStyle = {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary.main',
    color: 'white',
    borderRadius: 1,
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
        17. Animation
      </Typography>

      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={handleToggleAll}>
          전체 토글
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Fade
            </Typography>
            <Button size="small" onClick={() => handleToggle('fade')}>
              토글
            </Button>
          </Box>
          <Box sx={{ height: 80 }}>
            <Fade in={show.fade} timeout={500}>
              <Paper sx={boxStyle}>Fade</Paper>
            </Fade>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Grow
            </Typography>
            <Button size="small" onClick={() => handleToggle('grow')}>
              토글
            </Button>
          </Box>
          <Box sx={{ height: 80 }}>
            <Grow in={show.grow} timeout={500}>
              <Paper sx={{ ...boxStyle, backgroundColor: 'secondary.main' }}>Grow</Paper>
            </Grow>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Zoom
            </Typography>
            <Button size="small" onClick={() => handleToggle('zoom')}>
              토글
            </Button>
          </Box>
          <Box sx={{ height: 80 }}>
            <Zoom in={show.zoom} timeout={500}>
              <Paper sx={{ ...boxStyle, backgroundColor: 'success.main' }}>Zoom</Paper>
            </Zoom>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Slide (Left)
            </Typography>
            <Button size="small" onClick={() => handleToggle('slide')}>
              토글
            </Button>
          </Box>
          <Box sx={{ height: 80, overflow: 'hidden' }}>
            <Slide direction="right" in={show.slide} timeout={500} mountOnEnter unmountOnExit>
              <Paper sx={{ ...boxStyle, backgroundColor: 'warning.main' }}>Slide</Paper>
            </Slide>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Collapse
            </Typography>
            <Button size="small" onClick={() => handleToggle('collapse')}>
              토글
            </Button>
          </Box>
          <Collapse in={show.collapse} timeout={500}>
            <Paper sx={{ ...boxStyle, backgroundColor: 'error.main' }}>Collapse</Paper>
          </Collapse>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            연속 애니메이션
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[0, 1, 2, 3, 4].map((index) => (
              <Grow
                key={index}
                in={show.grow}
                timeout={500 + index * 200}
              >
                <Paper
                  sx={{
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
                    color: 'white',
                    borderRadius: 1,
                    fontWeight: 600,
                  }}
                >
                  {index + 1}
                </Paper>
              </Grow>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 3, color: 'text.secondary', textAlign: 'center' }}
      >
        각 버튼을 클릭하여 애니메이션을 확인해보세요
      </Typography>
    </Box>
  );
}

export default SectionAnimation;
