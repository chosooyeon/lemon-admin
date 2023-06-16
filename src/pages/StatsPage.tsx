import { BarChart } from "@/components/atoms/BarChart"
import { LineChart } from "@/components/atoms/LineChart"
import { LineBarChart } from "@/components/atoms/LineBarChart"

const StatsPage = () => {
    return(
        <>
            <LineBarChart/>
            <LineChart/>
            <BarChart/>
        </>
    )
}

export default StatsPage