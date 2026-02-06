import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';

/**
 * SectionChip 컴포넌트
 *
 * MUI Chip을 사용한 칩 섹션
 * - variant: filled, outlined
 * - 클릭, 삭제 기능
 */
function SectionChip() {
  const [chips, setChips] = useState(['React', 'MUI', 'JavaScript', 'TypeScript']);

  const handleDelete = (chipToDelete) => {
    setChips((prev) => prev.filter((chip) => chip !== chipToDelete));
  };

  const handleClick = (label) => {
    alert(`${label} 칩이 클릭되었습니다!`);
  };

  const handleReset = () => {
    setChips(['React', 'MUI', 'JavaScript', 'TypeScript']);
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
        16. Chip
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            기본 Chip
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="error" />
            <Chip label="Warning" color="warning" />
            <Chip label="Info" color="info" />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Outlined Chip
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="Default" variant="outlined" />
            <Chip label="Primary" color="primary" variant="outlined" />
            <Chip label="Secondary" color="secondary" variant="outlined" />
            <Chip label="Success" color="success" variant="outlined" />
            <Chip label="Error" color="error" variant="outlined" />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            클릭 가능한 Chip
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              label="클릭하세요"
              onClick={() => handleClick('클릭하세요')}
            />
            <Chip
              label="Primary"
              color="primary"
              onClick={() => handleClick('Primary')}
            />
            <Chip
              label="아이콘"
              icon={<FaceIcon />}
              onClick={() => handleClick('아이콘')}
            />
            <Chip
              label="완료"
              color="success"
              deleteIcon={<DoneIcon />}
              onDelete={() => handleClick('완료')}
              onClick={() => handleClick('완료')}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            아바타 Chip
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
            <Chip
              avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>K</Avatar>}
              label="김철수"
              variant="outlined"
            />
            <Chip
              avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>L</Avatar>}
              label="이영희"
              color="secondary"
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            삭제 가능한 Chip (태그)
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                onDelete={() => handleDelete(chip)}
                color="primary"
                variant="outlined"
              />
            ))}
            {chips.length < 4 && (
              <Chip
                label="초기화"
                size="small"
                onClick={handleReset}
                color="secondary"
              />
            )}
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
            현재 태그: {chips.length}개
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            사이즈 Chip
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Chip label="Small" size="small" />
            <Chip label="Medium" />
            <Chip label="Small Outlined" size="small" variant="outlined" />
            <Chip label="Medium Outlined" variant="outlined" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionChip;
