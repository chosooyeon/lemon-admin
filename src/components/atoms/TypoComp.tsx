import Typography from '@mui/joy/Typography';

interface TypoProps {
    title: string;
}

const TypoComp = ({title}:TypoProps) => {
    return(
        <>
            <Typography id="rank" level="body2" fontWeight="lg" sx={{ mb: 1.5 }}>{title}</Typography>
        </>
    )
}

export default TypoComp