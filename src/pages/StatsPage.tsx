import { Box, Container, Stack, Typography } from '@mui/material';
import UserStatsLayout from "@/components/organisms/UserStatsLayout";

const StatsPage = () => {
    return(
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
                                통계 관리
                                </Typography>
                            </Stack>
                        </Stack>

                        <UserStatsLayout/>

                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default StatsPage