import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';

/**
 * SectionModal 컴포넌트
 *
 * MUI Modal과 Dialog를 사용한 모달 섹션
 * - 기본 Modal, Alert Dialog, Confirm Dialog
 */
function SectionModal() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const handleConfirm = (result) => {
    alert(result ? '확인을 선택했습니다.' : '취소를 선택했습니다.');
    setConfirmOpen(false);
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
        10. Modal
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setBasicOpen(true)}
          >
            기본 Modal
          </Button>
          <Modal
            open={basicOpen}
            onClose={() => setBasicOpen(false)}
          >
            <Box sx={modalStyle}>
              <Typography variant="h6" component="h2" gutterBottom>
                기본 Modal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                기본적인 Modal 컴포넌트입니다.
                배경을 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.
              </Typography>
              <Button
                sx={{ mt: 2 }}
                variant="outlined"
                onClick={() => setBasicOpen(false)}
              >
                닫기
              </Button>
            </Box>
          </Modal>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            onClick={() => setAlertOpen(true)}
          >
            Alert Dialog
          </Button>
          <Dialog
            open={alertOpen}
            onClose={() => setAlertOpen(false)}
          >
            <DialogTitle>알림</DialogTitle>
            <DialogContent>
              <DialogContentText>
                작업이 성공적으로 완료되었습니다.
                확인 버튼을 눌러 계속 진행하세요.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAlertOpen(false)} autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => setConfirmOpen(true)}
          >
            Confirm Dialog
          </Button>
          <Dialog
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
          >
            <DialogTitle>확인</DialogTitle>
            <DialogContent>
              <DialogContentText>
                정말로 이 항목을 삭제하시겠습니까?
                이 작업은 되돌릴 수 없습니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleConfirm(false)}>
                취소
              </Button>
              <Button onClick={() => handleConfirm(true)} color="error" autoFocus>
                삭제
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 3, color: 'text.secondary', textAlign: 'center' }}
      >
        버튼을 클릭하여 각 모달을 확인해보세요
      </Typography>
    </Box>
  );
}

export default SectionModal;
