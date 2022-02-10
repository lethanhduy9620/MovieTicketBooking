import {
  Box,
  Button,
  Typography
} from '@mui/material';

export const MovieListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Movies
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
          sx={{
            bgcolor: '#dd003f', fontSize: 14
          }}
        >
          Add movies
        </Button>
      </Box>
    </Box>
  </Box>
);
