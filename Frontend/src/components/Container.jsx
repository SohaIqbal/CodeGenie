import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({ width, disableGutters ,bgcolor , children, maxWidth}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={disableGutters} >
        <Box sx={{ bgcolor: bgcolor, height: '100vh', width:width , padding:'20px', color:'white',overflowY:'auto',borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',  wordWrap: "break-word",}}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}