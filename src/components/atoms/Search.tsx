import { FormControl, InputAdornment, OutlinedInput, Stack, SvgIcon, Typography } from '@mui/material';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
export const Search = () => (
    <Stack
        alignItems="center"
        direction="row"
        spacing={1}
    >
        <Typography sx={{ width: '13%' }}> 키워드검색</Typography>
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
