// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // ... other theme properties ...

    shadows: [
        'none',
        '2px 2px 5px rgba(0,0,0,0.1)',
        '3px 3px 8px rgba(0,0,0,0.15)',
        '4px 4px 10px rgba(0,0,0,0.2)',
        '5px 5px 15px rgba(0,0,0,0.25)',
        '6px 6px 20px rgba(0,0,0,0.3)',
        // ... define other shadow levels as needed
    ],
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '6px 6px 20px rgba(0,0,0,0.3)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.2)',
                    '&:hover': {
                        boxShadow: '6px 6px 15px rgba(0,0,0,0.25)',
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    boxShadow: '3px 3px 8px rgba(0,0,0,0.15)',
                    '&:hover': {
                        boxShadow: '4px 4px 12px rgba(0,0,0,0.2)',
                    },
                },
            },
        },
        // ... other component overrides ...
    },
});

export default theme;