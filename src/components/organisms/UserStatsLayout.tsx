import CalendarComp from '@/components/atoms/CalendarComp'
import { SelectComp } from '../atoms/SelectComp';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import { BarChart } from "@/components/atoms/BarChart"
import { LineChart } from "@/components/atoms/LineChart"
import { LineBarChart } from "@/components/atoms/LineBarChart"

const UserStatsLayout = () => {
    return(
        <>
            <Card sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item><SelectComp hosNm={['레몬종합','중앙대']}/></Grid>
                    <Grid item><CalendarComp/></Grid>
                    <Grid item><CalendarComp/></Grid>
                </Grid>
            </Card>

            <Card>
                <div className="w-2/4">
                    <LineBarChart/>
                </div>
                <div className="w-2/4">
                    <LineChart/>    
                </div>
                <div className="w-2/4">
                    <BarChart/>
                </div>
            </Card>
        </>
    )
}

export default UserStatsLayout