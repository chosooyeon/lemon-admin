import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
export const Search = () => (
    <Card sx={{ p: 2 }}>
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
    </Card>
  );
  