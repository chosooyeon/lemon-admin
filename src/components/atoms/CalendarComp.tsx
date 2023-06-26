import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function CalendarComp() {
  return (
    <Stack spacing={1.5} sx={{ minWidth: 300 }}>
      <Input
        className='w-[230px]'
        type="date"
        slotProps={{
          input: {
            min: '2018-06-07T00:00',
            max: '2018-06-14T00:00',
          },
        }}
      />
    </Stack>
  );
}