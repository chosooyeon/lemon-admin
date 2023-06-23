import { Search } from '@/components/atoms/Search';
import UserTable from '@/components/molecules/UserTable';
import { SelectComponent } from '@/components/atoms/SelectComponent';
import { Card, CardActions, Container, Stack, SvgIcon, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button } from '@mui/joy';

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
                    <Stack spacing={1}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Stack>
                                <Typography variant="h4">
                                    사용자 관리
                                </Typography>
                            </Stack>
                        </Stack>
                        <Card sx={{ p: 2 }}>
                            <Stack
                                alignItems="center"
                                direction="row"
                                spacing={1}
                                sx={{ marginX: '5%' }}
                            >
                                <SelectComponent />
                                <Search />
                            </Stack>
                        </Card>
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                                <Button startDecorator={<RefreshIcon />}>Refresh</Button>
                            </Box>
                        </CardActions>
                        <UserTable />
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default UserPage