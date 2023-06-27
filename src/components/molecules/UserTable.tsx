
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PopupComponent } from '../atoms/PopupComp';
import { Card, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const columns: GridColDef[] = [
  { field: 'hospitalCd', headerName: '병원', width: 170, disableColumnMenu: true },
  { field: 'enabled', headerName: '사용여부', width: 170, disableColumnMenu: true },
  { field: 'userNm', headerName: '성명', width: 170, disableColumnMenu: true },
  { field: 'sex', headerName: '성별', width: 150, disableColumnMenu: true },
  { field: 'email', headerName: '이메일', width: 170, disableColumnMenu: true },
  { field: 'countyCd', headerName: '국가코드', width: 170, disableColumnMenu: true },
  {
    field: 'action',
    width: 130,
    sortable: false,
    renderCell: (params) => {
      const onClickEdit = async () => {
        // TODO 팝업 추가
         return alert(JSON.stringify(params.row, null, 4));
      };
      const onClickDelete = async () => {};

      return (
        <>
          <IconButton color="secondary" onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
        </>
      );
    },
  },
  // { id: 'action', label: 'action', minWidth: 170},
];

const rows = [
  { id: 1, hospitalCd: '01', enabled: '사용', userNm: '꺽*찬', sex: '여', email: 'e2mail@lemonhc.com', countyCd: 'KR' },
  { id: 2, hospitalCd: '11100222', enabled: '미사용', userNm: '꺽*찬', sex: '여', email: 'e3mail@lemonhc.com', countyCd: 'KR' },
  { id: 3, hospitalCd: '02', enabled: '사용', userNm: '꺽*찬', sex: '여', email: 'ema4il@lemonhc.com', countyCd: 'KR' },
  { id: 4, hospitalCd: '11100222', enabled: '미사용', userNm: '꺽*찬', sex: '여', email: 'em3ail@lemonhc.com', countyCd: 'KR' },
  { id: 5, hospitalCd: '04', enabled: '사용', userNm: '꺽*찬', sex: '여', email: 'ema5il@lemonhc.com', countyCd: 'KR' },
  { id: 6, hospitalCd: '11100222', enabled: '사용', userNm: '꺽*찬', sex: '남', email: 'ema6il@lemonhc.com', countyCd: 'KR' },
  { id: 7, hospitalCd: '11100222', enabled: '미사용', userNm: '꺽*찬', sex: '남', email: 'em7ail@lemonhc.com', countyCd: 'KR' },
  { id: 8, hospitalCd: '11100222', enabled: '미사용', userNm: '꺽*찬', sex: '여', email: 'ema8il@lemonhc.com', countyCd: 'KR' },
  { id: 9, hospitalCd: '37100441', enabled: '사용', userNm: '김******)', sex: '남', email: 'ema9il@lemonhc.com', countyCd: '' },
  { id: 10, hospitalCd: '11100222', enabled: '사용', userNm: '김******)', sex: '여', email: 'ema0il@lemonhc.com', countyCd: '' },
  { id: 11, hospitalCd: '37100441', enabled: '미사용', userNm: '꺽*찬', sex: '남', email: 'e3mail@lemonhc.com', countyCd: 'KR' },
  { id: 12, hospitalCd: '11100222', enabled: '사용', userNm: '김******)', sex: '여', email: 'emai44l@lemonhc.com', countyCd: 'KR' },
  { id: 13, hospitalCd: '37100441', enabled: '사용', userNm: '꺽*찬', sex: '남', email: 'emai55l@lemonhc.com', countyCd: 'KR' },
  { id: 14, hospitalCd: '11100222', enabled: '미사용', userNm: '김******)', sex: '여', email: 'em444ail@lemonhc.com', countyCd: 'KR' },
  { id: 15, hospitalCd: '11100222', enabled: '미사용', userNm: '꺽*찬', sex: '여', email: 'ema333il@lemonhc.com', countyCd: 'KR' },
  { id: 16, hospitalCd: '37100441', enabled: '미사용', userNm: '김******)', sex: '여', email: 'ema666il@lemonhc.com', countyCd: 'KR' },
  { id: 17, hospitalCd: '11100222', enabled: '사용', userNm: '꺽*찬', sex: '남', email: 'ema77il@lemonhc.com', countyCd: 'KR' },
];



const UserTable = () => {
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <Card sx={{ p: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          // checkboxSelection
          />
        </Card>
        <PopupComponent />
      </div>
    </>
  )
}

export default UserTable