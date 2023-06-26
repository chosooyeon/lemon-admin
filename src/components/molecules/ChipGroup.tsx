import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Done from '@mui/icons-material/Done';

export default function ChipGroup() {
  const [value, setValue] = React.useState<string[]>([]);
  const role = ['Elevator', 'Washer/Dryer', 'Fireplace', 'Dogs ok', 'Cats ok']

  return (
      <Box role="group" aria-labelledby="rank">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
          }}
        >
          {role.map(
            (item) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    color="primary"
                    sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: 'none' }}
                  />
                )}
                <Checkbox
                  size="sm"
                  disableIcon
                  overlay
                  label={item}
                  checked={value.includes(item)}
                  variant={value.includes(item) ? 'soft' : 'outlined'}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.checked) {
                      setValue((val) => [...val, item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            ),
          )}
        </List>
      </Box>
  );
}