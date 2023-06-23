import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";



export const SelectComponent = () => {
    const [hospitalCd, setHospitalCd] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setHospitalCd(event.target.value);
    };
    return (
        <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{paddingRight:'8%'}}
        >
            <Typography sx={{ width: '8%'}}> 병원</Typography>
            <FormControl sx={{ width: 500 }}>
                <InputLabel id="demo-simple-select-autowidth-label">병원을 선택하세요</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={hospitalCd}
                    onChange={handleChange}
                    fullWidth
                    label="Age"
                >
                    <MenuItem>레몬종합병원</MenuItem>
                    <MenuItem>강북삼성병원</MenuItem>
                    <MenuItem>세브란스병원</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
}