import { styled } from '@mui/material/styles';

export const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg,rgb(81, 109, 224) 0%,rgb(104, 127, 224) 50%,rgb(126, 145, 224) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg,rgb(81, 109, 224) 0%,rgb(104, 127, 224) 50%,rgb(126, 145, 224) 100%)',
  }),

}));