import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';

/**
 * SectionRadio 컴포넌트
 *
 * MUI Radio를 사용한 라디오 버튼 섹션
 * - 기본, 컬러, 가로 배치 라디오 그룹
 * - 선택값 실시간 표시
 */
function SectionRadio() {
  const [values, setValues] = useState({
    basic: 'option1',
    color: 'primary',
    horizontal: 'small',
  });

  const handleChange = (group) => (event) => {
    setValues((prev) => ({
      ...prev,
      [group]: event.target.value,
    }));
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
        06. Radio
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl>
            <FormLabel>기본 라디오</FormLabel>
            <RadioGroup
              value={values.basic}
              onChange={handleChange('basic')}
            >
              <FormControlLabel
                value="option1"
                control={<Radio />}
                label="옵션 1"
              />
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label="옵션 2"
              />
              <FormControlLabel
                value="option3"
                control={<Radio />}
                label="옵션 3"
              />
              <FormControlLabel
                value="disabled"
                control={<Radio disabled />}
                label="비활성화"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl>
            <FormLabel>컬러 라디오</FormLabel>
            <RadioGroup
              value={values.color}
              onChange={handleChange('color')}
            >
              <FormControlLabel
                value="primary"
                control={<Radio color="primary" />}
                label="Primary"
              />
              <FormControlLabel
                value="secondary"
                control={<Radio color="secondary" />}
                label="Secondary"
              />
              <FormControlLabel
                value="error"
                control={<Radio color="error" />}
                label="Error"
              />
              <FormControlLabel
                value="success"
                control={<Radio color="success" />}
                label="Success"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl>
            <FormLabel>가로 배치</FormLabel>
            <RadioGroup
              row
              value={values.horizontal}
              onChange={handleChange('horizontal')}
            >
              <FormControlLabel
                value="small"
                control={<Radio size="small" />}
                label="S"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="M"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="L"
              />
            </RadioGroup>
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
          선택된 값:
        </Typography>
        <Typography variant="body2">
          기본: {values.basic} | 컬러: {values.color} | 사이즈: {values.horizontal}
        </Typography>
      </Box>
    </Box>
  );
}

export default SectionRadio;
