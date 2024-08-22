import React, { useState } from 'react';
import { Box, Paper, TextField, IconButton, useTheme, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import ImageIcon from '@mui/icons-material/Image';

function ChatView() {
    const [message, setMessage] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSend = () => {
        console.log('Sending message:', message);
        setMessage('');
    };

    const iconButtonStyle = {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        padding: '12px',
        boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
        '&:hover': {
            boxShadow: '6px 6px 12px rgba(0,0,0,0.4)',
        },
    };

    const MessageBubble = ({ sent, children }) => (
        <Box sx={{
            display: 'flex',
            justifyContent: sent ? 'flex-end' : 'flex-start',
            marginBottom: 2,
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                [sent ? 'right' : 'left']: -6,
                width: 12,
                height: 12,
                background: sent ? '#BBDEFB' : '#FFFFFF',
                border: `2px solid ${sent ? '#64B5F6' : '#E0E0E0'}`,
                borderTop: 'none',
                borderRight: sent ? 'none' : '2px solid #E0E0E0',
                borderLeft: sent ? '2px solid #64B5F6' : 'none',
                transform: 'rotate(45deg)',
                transformOrigin: 'center center',
                zIndex: 0,
            }
        }}>
            <Paper
                elevation={3}
                sx={{
                    position: 'relative',
                    bgcolor: sent ? '#BBDEFB' : '#FFFFFF',
                    color: '#000000',
                    borderColor: sent ? '#64B5F6' : '#E0E0E0',
                    padding: theme.spacing(1.5, 2.5),
                    paddingBottom: '15px',
                    borderRadius: '20px',
                    border: `2px solid ${sent ? '#64B5F6' : '#E0E0E0'}`,
                    boxShadow: '6px 6px 16px rgba(0,0,0,0.2) !important',
                    fontFamily: '"Nunito", sans-serif',
                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                    lineHeight: 1.4,
                    fontWeight: 600,
                    maxWidth: { xs: '85%', sm: '70%' },
                    zIndex: 1,
                }}
            >
                {children}
            </Paper>
        </Box>
    );

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            bgcolor: 'background.default',
            padding: { xs: 0, sm: 2 },
            fontFamily: '"Nunito", sans-serif',
        }}>
            <Paper
                elevation={5}
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    height: { xs: '100vh', sm: '80vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: `3px solid ${theme.palette.primary.main}`,
                    borderRadius: { xs: 0, sm: '20px' },
                    boxShadow: '10px 10px 30px rgba(0,0,0,0.5) !important',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        padding: { xs: 2, sm: 3 },
                        paddingTop: { xs: 4, sm: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'linear-gradient(180deg, #F0FAFF 0%, #D6F0FF 100%)',
                    }}
                >
                    <MessageBubble>Hello! How can I help you today?</MessageBubble>
                    <MessageBubble sent>Hi there! I'm looking for information about saving objects.</MessageBubble>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: { xs: 1, sm: 2 },
                        backgroundColor: '#B3E0FF',
                        borderTop: `2px solid ${theme.palette.primary.main}`,
                        boxShadow: '0px -4px 12px rgba(0,0,0,0.2)',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '30px',
                                    boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
                                    backgroundColor: '#FFFFFF',
                                    height: { xs: '60px', sm: '70px' },
                                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                                    fontFamily: '"Nunito", sans-serif',
                                    fontWeight: 600,
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: { xs: '0 20px', sm: '0 24px' },
                                    height: { xs: '60px', sm: '70px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#000000',
                                },
                                '& .MuiOutlinedInput-input::placeholder': {
                                    fontFamily: '"Nunito", sans-serif',
                                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                                    fontWeight: 600,
                                    color: 'rgba(0, 0, 0, 0.5)',
                                },
                            }}
                            InputProps={{
                                style: {
                                    fontFamily: '"Nunito", sans-serif',
                                    fontWeight: 600,
                                }
                            }}
                        />
                        <IconButton color="primary" onClick={handleSend} size="large" sx={{...iconButtonStyle, ml: 1, backgroundColor: '#FFFFFF'}}>
                            <SendIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 1,
                        mx: { xs: 2, sm: 4 }
                    }}>
                        <IconButton color="primary" size="large" sx={{...iconButtonStyle, backgroundColor: '#FFFFFF'}}>
                            <AttachFileIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="primary" size="large" sx={{...iconButtonStyle, backgroundColor: '#FFFFFF'}}>
                            <ImageIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="primary" size="large" sx={{...iconButtonStyle, backgroundColor: '#FFFFFF'}}>
                            <MicIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default ChatView;