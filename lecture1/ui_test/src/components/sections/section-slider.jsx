import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

/**
 * SectionSlider 컴포넌트
 *
 * MUI Slider를 사용한 슬라이더 섹션
 * - 기본, 범위, 스텝 슬라이더
 * - 값 실시간 표시
 */
function SectionSlider() {
  const [values, setValues] = useState({
    basic: 30,
    range: [20, 60],
    step: 50,
    color: 40,
  });

  const handleChange = (name) => (event, newValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const marks = [
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
  ];

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
        07. Slider
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            기본 슬라이더
          </Typography>
          <Box sx={{ px: 1 }}>
            <Slider
              value={values.basic}
              onChange={handleChange('basic')}
              valueLabelDisplay="auto"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            값: {values.basic}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            범위 슬라이더
          </Typography>
          <Box sx={{ px: 1 }}>
            <Slider
              value={values.range}
              onChange={handleChange('range')}
              valueLabelDisplay="auto"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            범위: {values.range[0]} - {values.range[1]}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            스텝 슬라이더 (marks)
          </Typography>
          <Box sx={{ px: 1 }}>
            <Slider
              value={values.step}
              onChange={handleChange('step')}
              step={25}
              marks={marks}
              valueLabelDisplay="auto"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            온도: {values.step}°C
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            컬러 슬라이더
          </Typography>
          <Box sx={{ px: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Slider
              value={values.color}
              onChange={handleChange('color')}
              color="secondary"
              valueLabelDisplay="auto"
            />
            <Slider
              defaultValue={70}
              disabled
              valueLabelDisplay="auto"
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            Secondary: {values.color} | Disabled: 70
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionSlider;
