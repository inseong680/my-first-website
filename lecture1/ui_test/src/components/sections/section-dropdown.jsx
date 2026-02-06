import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

/**
 * SectionDropdown 컴포넌트
 *
 * MUI Select를 사용한 드롭다운 섹션
 * - variant: standard, outlined, filled
 * - 선택값 실시간 표시
 */
function SectionDropdown() {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: '',
  });

  const options = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
  ];

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({
      ...prev,
      [variant]: event.target.value,
    }));
  };

  const variants = [
    { key: 'standard', label: 'Standard' },
    { key: 'outlined', label: 'Outlined' },
    { key: 'filled', label: 'Filled' },
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
        04. Dropdown
      </Typography>

      <Grid container spacing={3}>
        {variants.map(({ key, label }) => (
          <Grid key={key} size={{ xs: 12, md: 4 }}>
            <FormControl variant={key} fullWidth>
              <InputLabel>{label}</InputLabel>
              <Select
                value={values[key]}
                label={label}
                onChange={handleChange(key)}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
                선택값:
              </Typography>
              <Typography variant="body2">
                {values[key]
                  ? options.find((o) => o.value === values[key])?.label
                  : '(선택 대기중...)'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SectionDropdown;
