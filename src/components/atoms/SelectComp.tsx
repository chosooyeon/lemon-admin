import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";


interface ChildProps {
    title?: string;
    hosNm: string[];
    placeholder?: string;
    size?: boolean;
    labelWidth?: string;
    setData?: any;
}

export const SelectComp = ({ title, hosNm, placeholder, size, labelWidth, setData }: ChildProps) => {
    const [hospitalCd, setHospitalCd] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setHospitalCd(event.target.value);
        console.log(event.target.value);
        setData(event.target.value)
    };
    return (
        <Stack
            alignItems="center"
            direction="row"
            spacing={1}
        >
            <Typography className={`w-${labelWidth ? labelWidth: '0'}`}>{title}</Typography>
            <FormControl sx={{ m: 1, width: 500 }} size={size ? 'small' : 'medium'}>
                <InputLabel id="select-autowidth">{placeholder ? placeholder : hosNm[0]}</InputLabel>
                <Select
                    id="select-autowidth"
                    value={hospitalCd}
                    label={placeholder ? placeholder : hosNm[0]}
                    onChange={handleChange}
                >
                    {
                        hosNm.map((item, idx) => (
                            <MenuItem key={idx} value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Stack>
    );
}