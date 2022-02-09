import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const MovieListResults = ({ movieData, ...rest }) => {
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);
  const [rowsPerPage, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedMovieIds;

    if (event.target.checked) {
      newSelectedMovieIds = movieData.content?.map((movie) => movie.maPhim);
    } else {
      newSelectedMovieIds = [];
    }

    setSelectedMovieIds(newSelectedMovieIds);
  };

  const handleSelectOne = (event, maPhim) => {
    const selectedIndex = selectedMovieIds.indexOf(maPhim);
    let newSelectedMovieIds = [];

    if (selectedIndex === -1) {
      newSelectedMovieIds = newSelectedMovieIds.concat(selectedMovieIds, maPhim);
    } else if (selectedIndex === 0) {
      newSelectedMovieIds = newSelectedMovieIds.concat(selectedMovieIds.slice(1));
    } else if (selectedIndex === selectedMovieIds.length - 1) {
      newSelectedMovieIds = newSelectedMovieIds.concat(selectedMovieIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedMovieIds = newSelectedMovieIds.concat(
        selectedMovieIds.slice(0, selectedIndex),
        selectedMovieIds.slice(selectedIndex + 1)
      );
    }

    setSelectedMovieIds(newSelectedMovieIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(page)
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest} >
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedMovieIds.length === movieData?.content.length}
                    color="primary"
                    indeterminate={
                      selectedMovieIds.length > 0
                      && selectedMovieIds.length < movieData?.content.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Image
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movieData?.content?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((movie) => (
                <TableRow
                  hover
                  key={movie.maPhim}
                  selected={selectedMovieIds.indexOf(movie.maPhim) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedMovieIds.indexOf(movie.maPhim) !== -1}
                      onChange={(event) => handleSelectOne(event, movie.maPhim)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {movie.maPhim}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {movie.tenPhim}
                  </TableCell>
                  <TableCell children={
                    <img src={movie.hinhAnh} alt='' style={{ height: '100px' }} />
                  }>
                  </TableCell>
                  <TableCell>
                    {movie.dangChieu ? "In theater" : "Coming soon"}
                  </TableCell>
                  <TableCell>
                    {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        fontSize: '12px',
                        bgcolor: '#dd003f',
                        color: '#fff',
                        '&:hover': {
                          bgcolor: '#3832A0',
                          color: '#fff'
                        }
                      }}
                    >Edit Movie</Button>
                    <Button
                      sx={{
                        mt: '10px',
                        fontSize: '12px',
                        bgcolor: '#dd003f',
                        color: '#fff',
                        '&:hover': {
                          bgcolor: '#3832A0',
                          color: '#fff'
                        }
                      }}
                    >Delete Movie</Button>
                    <Button
                      sx={{
                        mt: '10px',
                        fontSize: '12px',
                        bgcolor: '#dd003f',
                        color: '#fff',
                        '&:hover': {
                          bgcolor: '#3832A0',
                          color: '#fff'
                        }
                      }}
                      component={RouterLink}
                      to={'/showtime/' + movie.maPhim}
                    >Showtime</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {movieData &&
        <TablePagination
          component="div"
          count={movieData.content.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          sx={{ fontSize: 14 }}
        />
      }
    </Card>
  );
};

