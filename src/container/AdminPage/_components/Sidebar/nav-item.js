import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
  const { path, icon, name, ...others } = props;
  const location = useLocation();
  const active = path ? (location.pathname === path) : false;
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <Button
        component={RouterLink}
        to={path}
        startIcon={icon}
        disableRipple
        sx={{
          backgroundColor: active && 'rgba(255,255,255, 0.08)',
          borderRadius: 1,
          color: active ? '#dd003f' : 'neutral.300',
          fontWeight: active && 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: active ? '#dd003f' : 'neutral.400'
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
            color: active ? '#dd003f' : 'neutral.300'
          }
        }}
      >
        <Box sx={{ flexGrow: 1, fontSize: '14px' }}>
          {name}
        </Box>
      </Button>
    </ListItem>
  );
};

