import { SelectChangeEvent, Button, DialogTitle, DialogContent, DialogContentText, Box, FormControlLabel, Switch, DialogActions, IconButton, Typography, TextField, FormGroup } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { SelectComp } from './SelectComp';

interface ChildProps {
  columns: any[];
  rows: any[];
}

export const PopupComp = ({ columns, rows }: ChildProps) => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
  const hosNm = ['강북삼성병원', '세브란스병원']

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <IconButton color="secondary" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>UPDATE USER</DialogTitle>
        <FormGroup>
          {
            rows.map((item) => (
              <>
              <TextField
                margin="normal"
                name="firstName"
                label="병원명"
                id="1"
                value={item.hospitalCd || ''} />
                <TextField
                  margin="normal"
                  name="enabled"
                  label="사용여부"
                  value={item.enabled || ''} />
                </>
            ))
          }
        </FormGroup>

        {/* <SelectComp hosNm={hosNm} title={''} /> */}


        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >


            <FormControlLabel
              sx={{ mt: 1 }}
              control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
              label="Full width" />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}