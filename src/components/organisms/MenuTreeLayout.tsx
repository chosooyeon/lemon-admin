import { useForm, SubmitHandler } from "react-hook-form";
import MenuTree from "../molecules/MenuTree"
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button } from '@mui/joy';
import ChipGroup from "../molecules/ChipGroup";
import { TextField, Checkbox, Card, Grid } from '@mui/material';
import * as React from 'react';
import TypoComp from "../atoms/TypoComp";
import { comments } from "@/api";
import { SelectComp } from "../atoms/SelectComp";
import { useState } from "react";

interface ITreeValue {
    topmenu?: string;
    menu?: string;
    menutype?: string;
    order?: string;
    overridemenu?: string;
    overrideimg?: string;
    overrideurl?: string;
    isuse?: string;
    whitelist?: string;
    permission?: string;
}

  
const MenuTreeLayout = () => {
    let res = comments()
    // res.then((res)=>{
    //     console.log(res,"res")
    // })
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ITreeValue>()

    const onSubmitHandler: SubmitHandler<ITreeValue> = (data) => {
        console.log(data,"성공")
    }

    const [selectBoxData, setSelectBoxData] = useState('');
    const [topMenuData, setTopMenuData] = useState('');
    const [menuData, setMenuData] = useState('');
    const [menuTypeData, setMenuTypeData] = useState('');

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const menu = ['투약실시','수혈실시','채혈실시']

    const handleSave = () => {
        console.log("저장")
        console.log("탑메뉴:", topMenuData)
        console.log("메뉴:", menuData)
        console.log("메뉴타입:", menuTypeData)
    }

    const ref = React.createRef();

    return(
        <>
            <Card sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item><SelectComp hosNm={menu}/></Grid>
                    <Grid item><SelectComp hosNm={menu}/></Grid>
                </Grid>
            </Card>
            
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Card>
                    <Box className='justify-end m-3' sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Button startDecorator={<SaveIcon />} variant="outlined" onClick={handleSave}>저장</Button>
                    </Box>

                    <Grid container spacing={2} className="h-[60vh]">
                        <Grid item xs={4} >
                            <MenuTree/>
                        </Grid>
                        <Grid item xs={8} className="pr-3 pb-3">
                            <div className="flex justify-between">
                                <SelectComp title='상위메뉴:' hosNm={menu} size={true} labelWidth={'200px'} setData={setTopMenuData}
                                {...register("topmenu")}/>
                            </div>
                            <div className="flex justify-between">
                                <SelectComp title='메뉴:' hosNm={menu} size={true} labelWidth={'200px'} setData={setMenuData}
                                {...register("menu")}/>
                            </div>
                            <div className="flex justify-between">
                                <SelectComp title='메뉴타입:' hosNm={menu} size={true} labelWidth={'200px'} setData={setMenuTypeData}
                                {...register("menutype")}/>
                            </div>
                            <div className="flex">
                                <TypoComp title='표시순서:'/>
                                <TextField
                                    type="number"
                                    label="표시순서"
                                    id="outlined-size-small"
                                    size="small"
                                    {...register("order")}/>
                            </div>
                            <div className="flex justify-between">
                                <SelectComp title='override menu:' hosNm={menu} size={true} labelWidth={'200px'} setData={setSelectBoxData}
                                {...register("overridemenu")}/>
                            </div>
                            <div className="flex justify-between">
                                <SelectComp title='override imgURL:' hosNm={menu} size={true} labelWidth={'200px'} setData={setSelectBoxData}
                                {...register("overrideimg")}/>
                            </div>
                            <div className="flex justify-between">
                                <SelectComp title='override serviceURL:' hosNm={menu} size={true} labelWidth={'200px'} setData={setSelectBoxData}
                                {...register("overrideurl")}/>
                            </div>
                            <div className="flex">
                                <TypoComp title='사용여부:'/>
                                <Checkbox defaultChecked {...register("isuse")}/>
                            </div>
                            <div className="flex">
                                <TypoComp title='부서화이트리스트:'/>
                                <TextField
                                    label="화이트리스트"
                                    id="outlined-size-small"
                                    size="small"
                                    {...register("whitelist")}/>
                            </div>
                            <TypoComp title='메뉴권한:' {...register("permission")}/>
                            <ChipGroup/>
                        </Grid>
                    </Grid>
                </Card>
            </form>
        </>
    )
}

export default MenuTreeLayout