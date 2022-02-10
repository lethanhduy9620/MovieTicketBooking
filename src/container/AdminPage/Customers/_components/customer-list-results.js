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

const buttonStyle = {
  fontSize: '12px',
  bgcolor: '#dd003f',
  color: '#fff',
  '&:hover': {
    bgcolor: '#3832A0',
    color: '#fff'
  }
}

export const CustomerListResults = ({ customerData, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [rowsPerPage, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customerData.content?.map((customer) => customer.taiKhoan);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, taiKhoan) => {
    const selectedIndex = selectedCustomerIds.indexOf(taiKhoan);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, taiKhoan);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
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
                    checked={selectedCustomerIds.length === customerData?.content.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customerData?.content.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Account
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerData?.content?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer) => (
                <TableRow
                  hover
                  key={customer.taiKhoan}
                  selected={selectedCustomerIds.indexOf(customer.taiKhoan) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.taiKhoan) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.taiKhoan)}
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
                        {customer.hoTen}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.soDt}
                  </TableCell>
                  <TableCell>
                    {customer.maLoaiNguoiDung}
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{ ...buttonStyle, m: '5px' }}
                    >
                      Edit User
                    </Button>
                    <Button
                      sx={{ ...buttonStyle, m: '5px' }}
                    >
                      Delete User
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {customerData &&
        <TablePagination
          component="div"
          count={customerData.content.length}
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

