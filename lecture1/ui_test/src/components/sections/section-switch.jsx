import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

/**
 * SectionSwitch 컴포넌트
 *
 * MUI Switch를 사용한 토글 스위치 섹션
 * - 기본, 컬러, 사이즈 스위치
 * - 상태 실시간 표시
 */
function SectionSwitch() {
  const [switches, setSwitches] = useState({
    basic1: true,
    basic2: false,
    primary: true,
    secondary: false,
    error: false,
    warning: true,
    small: true,
    medium: false,
  });

  const handleChange = (name) => (event) => {
    setSwitches((prev) => ({
      ...prev,
      [name]: event.target.checked,
    }));
  };

  const getActiveItems = () => {
    return Object.entries(switches)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(', ') || '없음';
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
        08. Switch
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            기본 스위치
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.basic1}
                    onChange={handleChange('basic1')}
                  />
                }
                label="알림 설정"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.basic2}
                    onChange={handleChange('basic2')}
                  />
                }
                label="다크 모드"
              />
              <FormControlLabel
                control={<Switch disabled />}
                label="비활성화"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            컬러 스위치
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.primary}
                    onChange={handleChange('primary')}
                    color="primary"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.secondary}
                    onChange={handleChange('secondary')}
                    color="secondary"
                  />
                }
                label="Secondary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.error}
                    onChange={handleChange('error')}
                    color="error"
                  />
                }
                label="Error"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.warning}
                    onChange={handleChange('warning')}
                    color="warning"
                  />
                }
                label="Warning"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            사이즈 스위치
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.small}
                    onChange={handleChange('small')}
                    size="small"
                  />
                }
                label="Small"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={switches.medium}
                    onChange={handleChange('medium')}
                    size="medium"
                  />
                }
                label="Medium"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 3,
          p: 1.5,
          borderRadius: 1,
          backgroundColor: 'grey.100',
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}
        >
          활성화된 스위치:
        </Typography>
        <Typography variant="body2">{getActiveItems()}</Typography>
      </Box>
    </Box>
  );
}

export default SectionSwitch;
