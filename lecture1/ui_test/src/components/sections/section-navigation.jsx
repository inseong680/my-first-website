import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

/**
 * SectionNavigation 컴포넌트
 *
 * MUI AppBar와 Toolbar를 사용한 네비게이션 섹션
 * - 데스크톱: 가로 메뉴 버튼
 * - 모바일: 햄버거 메뉴
 */
function SectionNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const menuItems = ['홈', '소개', '서비스', '연락처'];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menuName) => {
    alert(`${menuName} 메뉴가 클릭되었습니다!`);
    handleMenuClose();
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
        03. Navigation
      </Typography>

      <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: { xs: '1rem', md: '1.25rem' } }}
            >
              My Website
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item}
                      onClick={() => handleMenuClick(item)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 2, color: 'text.secondary', textAlign: 'center' }}
      >
        {isMobile ? '모바일 모드: 햄버거 메뉴' : '데스크톱 모드: 가로 메뉴'}
      </Typography>
    </Box>
  );
}

export default SectionNavigation;
