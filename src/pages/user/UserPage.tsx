import { Search } from '@/components/atoms/Search';
import UserTable from '@/components/molecules/UserTable';
import { Box, Container, Stack, Typography } from '@mui/material';


const UserPage = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          width: '100%'
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  사용자 관리
                </Typography>
              </Stack>
            </Stack>
            <Search />

            <UserTable />
         
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default UserPage