import { FormControl, InputAdornment, OutlinedInput, Stack, SvgIcon, Typography } from '@mui/material';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface ChildProps {
    title: string;
    labelWidth?: string;
}


export const SearchComp = ({ title, labelWidth }: ChildProps) => {
    return (
        <Stack
            alignItems="center"
            direction="row"
            spacing={1}
        >
            <Typography className={`w-${labelWidth ? labelWidth : '0'}`}>{title}</Typography>
            <FormControl sx={{ width: 700 }}>
                <OutlinedInput
                    defaultValue=""
                    fullWidth
                    placeholder="성명/이메일 등을 입력하세요"
                    startAdornment={(
                        <InputAdornment position="start">
                            <SvgIcon
                                color="action"
                                fontSize="small"
                            >
                                <MagnifyingGlassIcon />
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={{ maxWidth: 500 }}
                />
            </FormControl>
        </Stack>
    );
}