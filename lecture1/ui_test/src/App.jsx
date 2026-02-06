import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SectionButton from './components/sections/section-button';
import SectionInput from './components/sections/section-input';
import SectionNavigation from './components/sections/section-navigation';
import SectionDropdown from './components/sections/section-dropdown';
import SectionCheckbox from './components/sections/section-checkbox';
import SectionRadio from './components/sections/section-radio';
import SectionSlider from './components/sections/section-slider';
import SectionSwitch from './components/sections/section-switch';
import SectionCard from './components/sections/section-card';
import SectionModal from './components/sections/section-modal';
import SectionTab from './components/sections/section-tab';
import SectionProgress from './components/sections/section-progress';
import SectionAlert from './components/sections/section-alert';
import SectionTooltip from './components/sections/section-tooltip';
import SectionAvatar from './components/sections/section-avatar';
import SectionChip from './components/sections/section-chip';
import SectionAnimation from './components/sections/section-animation';
import SectionHover from './components/sections/section-hover';

/**
 * App 컴포넌트
 *
 * 16개 UI 섹션을 순차적으로 추가하기 위한 메인 레이아웃 컴포넌트
 * 각 섹션은 components/sections/ 폴더에서 import하여 추가
 */
function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        py: { xs: 2, md: 4 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* 페이지 헤더 */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 600,
            textAlign: 'center',
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          UI Components Test
        </Typography>

        {/* 섹션 추가 영역 */}
        <SectionButton />
        <SectionInput />
        <SectionNavigation />
        <SectionDropdown />
        <SectionCheckbox />
        <SectionRadio />
        <SectionSlider />
        <SectionSwitch />
        <SectionCard />
        <SectionModal />
        <SectionTab />
        <SectionProgress />
        <SectionAlert />
        <SectionTooltip />
        <SectionAvatar />
        <SectionChip />
        <SectionAnimation />
        <SectionHover />

      </Container>
    </Box>
  );
}

export default App;
