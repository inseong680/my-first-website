import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

/**
 * SectionCheckbox 컴포넌트
 *
 * MUI Checkbox를 사용한 체크박스 섹션
 * - 기본, 컬러, 비활성화 체크박스
 * - 선택 상태 실시간 표시
 */
function SectionCheckbox() {
  const [checked, setChecked] = useState({
    basic1: false,
    basic2: true,
    basic3: false,
    primary: true,
    secondary: false,
    error: false,
  });

  const handleChange = (name) => (event) => {
    setChecked((prev) => ({
      ...prev,
      [name]: event.target.checked,
    }));
  };

  const getSelectedItems = () => {
    return Object.entries(checked)
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
        05. Checkbox
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            기본 체크박스
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.basic1}
                    onChange={handleChange('basic1')}
                  />
                }
                label="항목 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.basic2}
                    onChange={handleChange('basic2')}
                  />
                }
                label="항목 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.basic3}
                    onChange={handleChange('basic3')}
                  />
                }
                label="항목 3"
              />
              <FormControlLabel
                control={<Checkbox disabled />}
                label="비활성화"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            컬러 체크박스
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.primary}
                    onChange={handleChange('primary')}
                    color="primary"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.secondary}
                    onChange={handleChange('secondary')}
                    color="secondary"
                  />
                }
                label="Secondary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.error}
                    onChange={handleChange('error')}
                    color="error"
                  />
                }
                label="Error"
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
          선택된 항목:
        </Typography>
        <Typography variant="body2">{getSelectedItems()}</Typography>
      </Box>
    </Box>
  );
}

export default SectionCheckbox;
