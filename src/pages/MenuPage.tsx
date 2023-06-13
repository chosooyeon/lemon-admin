import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MenuPage = () => {
    return(
        <>
            <div>메뉴페이지</div>
             <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </>
    )
}

export default MenuPage