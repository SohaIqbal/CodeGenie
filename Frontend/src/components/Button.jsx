import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({onclick}) {
  return (
    <Stack  direction="row" justifyContent="flex-end" padding={2} >
      <Button variant="outlined " sx={{bgcolor:'#C594C6', color:'#2D2D2D', font:"poppins" , fontWeight:'bold' }} onClick={onclick} >Submit</Button>
    </Stack>
  );
}