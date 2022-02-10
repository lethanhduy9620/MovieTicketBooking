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

export const ShowtimeListResults = ({ showtimeData, ...rest }) => {
  const [selectedShowtimeIds, setSelectedShowtimeIds] = useState([]);
  const [rowsPerPage, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const showtimeArray = showtimeData?.content.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim;

  const handleSelectAll = (event) => {
    let newSelectedShowtimeIds;

    if (event.target.checked) {
      newSelectedShowtimeIds = showtimeArray?.map((showtime) => showtime.maLichChieu);
    } else {
      newSelectedShowtimeIds = [];
    }

    setSelectedShowtimeIds(newSelectedShowtimeIds);
  };

  const handleSelectOne = (event, maLichChieu) => {
    const selectedIndex = selectedShowtimeIds.indexOf(maLichChieu);
    let newSelectedShowtimeIds = [];

    if (selectedIndex === -1) {
      newSelectedShowtimeIds = newSelectedShowtimeIds.concat(selectedShowtimeIds, maLichChieu);
    } else if (selectedIndex === 0) {
      newSelectedShowtimeIds = newSelectedShowtimeIds.concat(selectedShowtimeIds.slice(1));
    } else if (selectedIndex === selectedShowtimeIds.length - 1) {
      newSelectedShowtimeIds = newSelectedShowtimeIds.concat(selectedShowtimeIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedShowtimeIds = newSelectedShowtimeIds.concat(
        selectedShowtimeIds.slice(0, selectedIndex),
        selectedShowtimeIds.slice(selectedIndex + 1)
      );
    }

    setSelectedShowtimeIds(newSelectedShowtimeIds);
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
                    checked={selectedShowtimeIds.length === showtimeArray?.length}
                    color="primary"
                    indeterminate={
                      selectedShowtimeIds.length > 0
                      && selectedShowtimeIds.length < showtimeArray?.length
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
              {showtimeArray?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((showtime) => (
                <TableRow
                  hover
                  key={showtime.maLichChieu}
                  selected={selectedShowtimeIds.indexOf(showtime.maLichChieu) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedShowtimeIds.indexOf(showtime.maLichChieu) !== -1}
                      onChange={(event) => handleSelectOne(event, showtime.maLichChieu)}
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
                        {showtime.maLichChieu}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {showtime.maRap}
                  </TableCell>
                  <TableCell>
                    {showtime.tenRap}
                  </TableCell>
                  <TableCell>
                    {showtime.thoiLuong + ' phút'}
                  </TableCell>
                  <TableCell>
                    {new Date(showtime.ngayChieuGioChieu).toLocaleDateString()}
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
                    >Edit Showtime</Button>
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
                    >Delete Showtime</Button>
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
                    >Seat map</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {showtimeData &&
        <TablePagination
          component="div"
          count={showtimeArray?.length}
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

