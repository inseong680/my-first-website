import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';

/**
 * SectionTooltip 컴포넌트
 *
 * MUI Tooltip을 사용한 툴팁 섹션
 * - placement: top, bottom, left, right
 * - 다양한 스타일링
 */
function SectionTooltip() {
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
        14. Tooltip
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            위치별 Tooltip
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Tooltip title="위쪽 툴팁" placement="top">
              <Button variant="outlined">Top</Button>
            </Tooltip>
            <Tooltip title="아래쪽 툴팁" placement="bottom">
              <Button variant="outlined">Bottom</Button>
            </Tooltip>
            <Tooltip title="왼쪽 툴팁" placement="left">
              <Button variant="outlined">Left</Button>
            </Tooltip>
            <Tooltip title="오른쪽 툴팁" placement="right">
              <Button variant="outlined">Right</Button>
            </Tooltip>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            아이콘 버튼 Tooltip
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="삭제">
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="추가">
              <IconButton color="primary">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="정보 보기">
              <IconButton color="info">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Arrow Tooltip
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Tooltip title="화살표가 있는 툴팁" arrow>
              <Button variant="contained">Arrow</Button>
            </Tooltip>
            <Tooltip title="화살표가 있는 툴팁" arrow placement="right">
              <Button variant="contained" color="secondary">Arrow Right</Button>
            </Tooltip>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            커스텀 Tooltip
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Tooltip
              title={
                <Box>
                  <Typography variant="subtitle2">멀티라인 툴팁</Typography>
                  <Typography variant="body2">
                    여러 줄의 내용을 표시할 수 있습니다.
                  </Typography>
                </Box>
              }
              arrow
            >
              <Button variant="outlined" color="info">멀티라인</Button>
            </Tooltip>
            <Tooltip title="비활성화된 버튼" arrow>
              <span>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
              </span>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 3, color: 'text.secondary', textAlign: 'center' }}
      >
        각 버튼에 마우스를 올려 툴팁을 확인해보세요
      </Typography>
    </Box>
  );
}

export default SectionTooltip;
