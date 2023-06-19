import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Paper,
} from '@mui/material';
import React from 'react';

interface Column {
  id: 'hospitalCd' | 'enabled' | 'userNm' | 'sex' | 'email';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'hospitalCd', label: '병원', minWidth: 170 },
  { id: 'enabled', label: '사용여부', minWidth: 100 },
  {
    id: 'userNm',
    label: '성명',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'sex',
    label: '성별',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: '이메일',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  hospitalCd: string;
  enabled: string;
  userNm: string;
  sex: string;
  email: string;
}

function createData(
  hospitalCd: string,
  enabled: string,
  userNm: string,
  sex: string,
  email: string
): Data {

  return { hospitalCd, enabled, userNm, sex, email };
}

const rows = [
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('37100441', '사용', '김******)', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '김******)', '여', 'email@lemonhc.com'),
  createData('37100441', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '김******)', '여', 'email@lemonhc.com'),
  createData('37100441', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '김******)', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
  createData('37100441', '사용', '김******)', '여', 'email@lemonhc.com'),
  createData('11100222', '사용', '꺽*찬', '여', 'email@lemonhc.com'),
];



const UserTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </>
  )
}

export default UserTable