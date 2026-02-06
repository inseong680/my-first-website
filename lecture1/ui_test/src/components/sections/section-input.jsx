import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionInput 컴포넌트
 *
 * MUI TextField의 다양한 variant를 보여주는 섹션
 * - variant: standard, outlined, filled
 * - 입력값 실시간 표시
 */
function SectionInput() {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: '',
  });

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({
      ...prev,
      [variant]: event.target.value,
    }));
  };

  const variants = [
    { key: 'standard', label: 'Standard', placeholder: 'Standard 입력' },
    { key: 'outlined', label: 'Outlined', placeholder: 'Outlined 입력' },
    { key: 'filled', label: 'Filled', placeholder: 'Filled 입력' },
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
        02. Input
      </Typography>

      <Grid container spacing={3}>
        {variants.map(({ key, label, placeholder }) => (
          <Grid key={key} size={{ xs: 12, md: 4 }}>
            <TextField
              variant={key}
              label={label}
              placeholder={placeholder}
              value={values[key]}
              onChange={handleChange(key)}
              fullWidth
            />
            <Box
              sx={{
                mt: 1,
                p: 1.5,
                borderRadius: 1,
                backgroundColor: 'grey.100',
                minHeight: 40,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}
              >
                입력값:
              </Typography>
              <Typography variant="body2">
                {values[key] || '(입력 대기중...)'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SectionInput;
