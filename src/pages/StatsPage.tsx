import { BarChart } from "@/components/atoms/BarChart"
import { LineChart } from "@/components/atoms/LineChart"
import { LineBarChart } from "@/components/atoms/LineBarChart"
import { Box, Container, Stack, Typography } from '@mui/material';

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

                        <div className="w-2/4">
                            <LineBarChart/>
                        </div>
                        <div className="w-2/4">
                            <LineChart/>    
                        </div>
                        <div className="w-2/4">
                            <BarChart/>
                        </div>

                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default StatsPage