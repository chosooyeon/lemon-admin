import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";


interface ChildProps {
    title: string;
    hosNm: string[];
    placeholder?: string;
    size?: boolean
}

export const SelectComponent = ({ title, hosNm, placeholder, size }: ChildProps) => {
    const [hospitalCd, setHospitalCd] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setHospitalCd(event.target.value);
        console.log(event.target.value);
    };
    return (
        <Stack
            alignItems="center"
            direction="row"
            spacing={1}
        >
            <Typography sx={{ width: title ? '10%' : '0' }}>{title}</Typography>
            <FormControl sx={{ width: 500 }} size={size ? 'small' : 'medium'}>
                {/* <InputLabel id="demo-simple-select-autowidth-label">{placeholder ? placeholder : hosNm[0]}</InputLabel> */}
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={hospitalCd}
                    onChange={handleChange}
                    fullWidth
                >
                    {
                        hosNm.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

        </Stack>
    );
}