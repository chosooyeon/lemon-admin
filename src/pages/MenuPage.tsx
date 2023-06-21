import { Box, Container, Stack, Typography, Button } from '@mui/material';


const MenuPage = () => {
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
                            메뉴 관리
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </Stack>
                
                </Stack>
                </Container>
            </Box>
        </>
    )
}

export default MenuPage