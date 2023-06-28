import { SearchComp } from '@/components/atoms/SearchComp';
import UserTable from '@/components/molecules/UserTable';
import { SelectComp } from '@/components/atoms/SelectComp';
import { Card, CardActions, Container, Stack, SvgIcon, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button } from '@mui/joy';

const UserPage = () => {
    const hosNm = ['강북삼성병원', '세브란스병원']
    const placeholder= '병원을 선택해주세요'
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
                                <SelectComp title='병원' hosNm={hosNm} labelWidth={'1/12'} placeholder={placeholder}/>
                                <SearchComp title='키워드검색' labelWidth={'max'}/>
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