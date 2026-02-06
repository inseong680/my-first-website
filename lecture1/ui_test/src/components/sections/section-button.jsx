import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionButton 컴포넌트
 *
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 * - variant: contained, outlined, text
 * - color: primary, secondary, error
 */
function SectionButton() {
  const handleClick = (variant, color) => {
    alert(`${variant} ${color} 버튼이 클릭되었습니다!`);
  };

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

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
        01. Button
      </Typography>

      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
              fontWeight: 500,
              color: 'text.secondary',
              textTransform: 'capitalize',
            }}
          >
            {variant}
          </Typography>

          <Grid container spacing={2}>
            {colors.map((color) => (
              <Grid key={color} size={{ xs: 12, sm: 4 }}>
                <Button
                  variant={variant}
                  color={color}
                  fullWidth
                  onClick={() => handleClick(variant, color)}
                  sx={{ py: 1.5 }}
                >
                  {color}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default SectionButton;
