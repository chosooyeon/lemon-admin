import Line from '@/components/atoms/LineChart'
import Bar from '@/components/atoms/BarChart'
import { myLineData } from '@/json/LineChartData'
import { myBarData } from '@/json/BarChartData'

const MenuPage = () => {
    return(
        <>
            <Line data={myLineData}/>
            <Bar data={myBarData}/>
        </>
    )
}

export default MenuPage