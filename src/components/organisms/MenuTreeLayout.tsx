import MenuTree from "../molecules/MenuTree"
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button } from '@mui/joy';
import ChipGroup from "../molecules/ChipGroup";
import Input from '@mui/joy/Input';
import Checkbox from '@mui/joy/Checkbox';
import * as React from 'react';
import TypoComp from "../atoms/TypoComp";
import { comments } from "@/api";
import { SelectComp } from "../atoms/SelectComp";
import { useState } from "react";

const MenuTreeLayout = () => {
    let res = comments()
    res.then((res)=>{
        console.log(res,"res")
    })

    const [selectBoxData, setSelectBoxData] = useState("");

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const menu = ['투약실시','수혈실시','채혈실시']

    const handleSave = () => {
        console.log("저장")
        console.log("selectBoxData", selectBoxData)
    }

    return(
        <>
            <Card sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item><SelectComp hosNm={menu}/></Grid>
                    <Grid item><SelectComp hosNm={menu}/></Grid>
                </Grid>
            </Card>
            
            <Card>
                <Box className='justify-end m-3' sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button startDecorator={<SaveIcon />} variant="outlined" onClick={()=>handleSave()}>저장</Button>
                </Box>

                <Grid container spacing={2} className="h-[60vh]">
                    <Grid item xs={4} >
                        <MenuTree/>
                    </Grid>
                    <Grid item xs={8} className="pr-3 pb-3">
                        <div className="flex justify-between">
                            <SelectComp title='상위메뉴:' hosNm={menu} size={true} labelWidth={'200px'} setData={setSelectBoxData}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='메뉴'/>
                            <SelectComp hosNm={menu}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='메뉴타입:'/>
                            <SelectComp hosNm={menu}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='표시순서:'/>
                            <Input
                                className="w-[230px]"
                                type="number"
                                defaultValue={2.5}
                                slotProps={{ input: { ref: inputRef, min: 1, max: 5, tep: 0.1, }, }}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='override menu:'/>
                            <SelectComp hosNm={menu}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='override imgURL:'/>
                            <SelectComp hosNm={menu}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='override serviceURL:'/>
                            <SelectComp hosNm={menu}/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='사용여부:'/>
                            <Checkbox className="w-[230px]"/>
                        </div>
                        <div className="flex justify-between">
                            <TypoComp title='부서화이트리스트:'/>
                            <Input className="w-[230px]"/>
                        </div>
                        <TypoComp title='메뉴권한:'/>
                        <ChipGroup/>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default MenuTreeLayout