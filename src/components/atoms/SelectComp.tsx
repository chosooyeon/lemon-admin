import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

interface ChildProps {
  props: string[];
}

const SelectComp = ({props}:ChildProps) => {

  const handleChange = (e:any) => {
    const val = e.target.innerText
    console.log(val)
  }

  return (
    <Select
      onChange={(e)=>handleChange(e)}

      placeholder="선택하세요"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 230,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}>
      {
        props.map((item, idx) => (
          <Option key={idx} value={item}>{item}</Option>
        ))
      }
    </Select>
  );
}

export default SelectComp