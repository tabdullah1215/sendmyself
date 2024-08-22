// src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme';
import ChatView from './components/ChatView';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', bgcolor: 'background.default' }}>
          <Container maxWidth="sm" disableGutters sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ChatView />
          </Container>
        </Box>
      </ThemeProvider>
  );
}

export default App;