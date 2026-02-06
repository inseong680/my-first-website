import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

/**
 * SectionTab 컴포넌트
 *
 * MUI Tabs를 사용한 탭 섹션
 * - 기본 탭, 컬러 탭, 세로 탭
 */
function SectionTab() {
  const [basicTab, setBasicTab] = useState(0);
  const [colorTab, setColorTab] = useState(0);
  const [verticalTab, setVerticalTab] = useState(0);

  const tabContent = [
    '첫 번째 탭의 콘텐츠입니다. 여기에 다양한 내용을 표시할 수 있습니다.',
    '두 번째 탭의 콘텐츠입니다. 탭을 전환하면 이 내용이 표시됩니다.',
    '세 번째 탭의 콘텐츠입니다. 각 탭마다 다른 정보를 보여줍니다.',
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
        11. Tab
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            기본 탭
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={basicTab}
              onChange={(e, newValue) => setBasicTab(newValue)}
            >
              <Tab label="탭 1" />
              <Tab label="탭 2" />
              <Tab label="탭 3" />
            </Tabs>
          </Box>
          <Box sx={{ p: 2, backgroundColor: 'grey.50', borderRadius: '0 0 4px 4px' }}>
            <Typography variant="body2">
              {tabContent[basicTab]}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            컬러 탭
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={colorTab}
              onChange={(e, newValue) => setColorTab(newValue)}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="홈" />
              <Tab label="프로필" />
              <Tab label="설정" />
            </Tabs>
          </Box>
          <Box sx={{ p: 2, backgroundColor: 'grey.50', borderRadius: '0 0 4px 4px' }}>
            <Typography variant="body2">
              {colorTab === 0 && '홈 화면입니다. 메인 콘텐츠가 여기에 표시됩니다.'}
              {colorTab === 1 && '프로필 화면입니다. 사용자 정보를 확인하세요.'}
              {colorTab === 2 && '설정 화면입니다. 앱 설정을 변경할 수 있습니다.'}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            세로 탭
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Tabs
              orientation="vertical"
              value={verticalTab}
              onChange={(e, newValue) => setVerticalTab(newValue)}
              sx={{
                borderRight: { sm: 1 },
                borderBottom: { xs: 1, sm: 0 },
                borderColor: 'divider',
                minWidth: { sm: 120 },
              }}
            >
              <Tab label="메뉴 1" />
              <Tab label="메뉴 2" />
              <Tab label="메뉴 3" />
            </Tabs>
            <Box
              sx={{
                p: 2,
                flexGrow: 1,
                backgroundColor: 'grey.50',
                borderRadius: { xs: '0 0 4px 4px', sm: '0 4px 4px 0' },
              }}
            >
              <Typography variant="body2">
                {verticalTab === 0 && '메뉴 1의 콘텐츠 영역입니다. 세로 탭은 사이드바 형태로 사용됩니다.'}
                {verticalTab === 1 && '메뉴 2의 콘텐츠 영역입니다. 대시보드나 설정 페이지에 적합합니다.'}
                {verticalTab === 2 && '메뉴 3의 콘텐츠 영역입니다. 복잡한 네비게이션에 유용합니다.'}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionTab;
