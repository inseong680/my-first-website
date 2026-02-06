import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';

/**
 * SectionAlert 컴포넌트
 *
 * MUI Alert를 사용한 알림 섹션
 * - severity: success, info, warning, error
 * - variant: standard, filled, outlined
 */
function SectionAlert() {
  const [showAlert, setShowAlert] = useState(true);

  const severities = ['success', 'info', 'warning', 'error'];

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
        13. Alert
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            기본 Alert
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {severities.map((severity) => (
              <Alert key={severity} severity={severity}>
                {severity} 알림 메시지입니다.
              </Alert>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Filled Alert
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {severities.map((severity) => (
              <Alert key={severity} severity={severity} variant="filled">
                {severity} 알림 메시지입니다.
              </Alert>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Outlined Alert
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {severities.map((severity) => (
              <Alert key={severity} severity={severity} variant="outlined">
                {severity} 알림 메시지입니다.
              </Alert>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Title & 닫기 버튼
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Alert severity="success">
              <AlertTitle>성공</AlertTitle>
              작업이 성공적으로 완료되었습니다.
            </Alert>
            <Collapse in={showAlert}>
              <Alert
                severity="warning"
                onClose={() => setShowAlert(false)}
              >
                <AlertTitle>경고</AlertTitle>
                닫기 버튼을 클릭하여 이 알림을 닫을 수 있습니다.
              </Alert>
            </Collapse>
            {!showAlert && (
              <Button
                variant="outlined"
                size="small"
                onClick={() => setShowAlert(true)}
              >
                알림 다시 표시
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionAlert;
