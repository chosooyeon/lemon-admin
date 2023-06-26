import SelectComp from "../atoms/SelectComp"
import MenuTree from "../molecules/MenuTree"
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button } from '@mui/joy';
import ChipGroup from "../molecules/ChipGroup";
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Checkbox from '@mui/joy/Checkbox';
import * as React from 'react';

const MenuTreeLayout = () => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const menu = ['투약실시','수혈실시','채혈실시']
    return(
        <>
            <Card sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}><SelectComp props={menu}/></Grid>
                    <Grid item xs={2}><SelectComp props={menu}/></Grid>
                </Grid>
            </Card>
            
            <Card>
                <Box className='justify-end m-3' sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button startDecorator={<SaveIcon />} variant="outlined">저장</Button>
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <MenuTree/>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">상위메뉴: </span><SelectComp props={menu}/></div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">메뉴: </span><SelectComp props={menu}/></div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">메뉴타입: </span><SelectComp props={menu}/></div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">표시순서: </span>
                            <Input
                                className="w-[230px]"
                                type="number"
                                defaultValue={2.5}
                                slotProps={{
                                input: {
                                    ref: inputRef,
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                                }}/>
                        </div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">override menu: </span><SelectComp props={menu}/></div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">override imgURL: </span><SelectComp props={menu}/></div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">override serviceURL: </span><SelectComp props={menu}/></div>
                        <div className="flex justify-between"><span className="mr-[9px] self-center">사용여부: </span>
                            <Checkbox className="w-[230px]"/>
                        </div>
                        <div className="flex justify-between"><Typography id="rank" level="body2" fontWeight="lg" sx={{ mb: 1.5 }}>부서화이트리스트: </Typography>
                            <Input className="w-[230px]"/>
                        </div>
                        <Typography id="rank" level="body2" fontWeight="lg" sx={{ mb: 1.5 }}>메뉴권한</Typography>
                        <ChipGroup/>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default MenuTreeLayout