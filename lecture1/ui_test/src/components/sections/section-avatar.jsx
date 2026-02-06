import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';

/**
 * SectionAvatar 컴포넌트
 *
 * MUI Avatar를 사용한 아바타 섹션
 * - 이미지, 문자, 아이콘 아바타
 * - 다양한 사이즈와 AvatarGroup
 */
function SectionAvatar() {
  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase();
  };

  const users = [
    { name: '김철수', color: 'primary.main' },
    { name: '이영희', color: 'secondary.main' },
    { name: '박지민', color: 'success.main' },
    { name: '최수진', color: 'warning.main' },
    { name: '정민호', color: 'error.main' },
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
        15. Avatar
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            문자 Avatar
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {users.map((user) => (
              <Avatar
                key={user.name}
                sx={{ bgcolor: stringToColor(user.name) }}
              >
                {getInitials(user.name)}
              </Avatar>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            아이콘 Avatar
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <PersonIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              <FolderIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: 'success.main' }}>
              <AssignmentIcon />
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            사이즈 Avatar
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>S</Avatar>
            <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>M</Avatar>
            <Avatar sx={{ width: 40, height: 40 }}>L</Avatar>
            <Avatar sx={{ width: 56, height: 56, fontSize: '1.5rem' }}>XL</Avatar>
            <Avatar sx={{ width: 72, height: 72, fontSize: '2rem' }}>XXL</Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Variant Avatar
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
            <Avatar variant="square" sx={{ bgcolor: 'error.main' }}>C</Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}
          >
            Avatar Group
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <AvatarGroup max={4}>
              {users.map((user) => (
                <Avatar
                  key={user.name}
                  sx={{ bgcolor: stringToColor(user.name) }}
                >
                  {getInitials(user.name)}
                </Avatar>
              ))}
            </AvatarGroup>
            <AvatarGroup total={24}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
              <Avatar sx={{ bgcolor: 'success.main' }}>C</Avatar>
            </AvatarGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionAvatar;
