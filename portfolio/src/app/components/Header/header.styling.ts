import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: theme.spacing(2),
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginLeft: 'auto',
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1rem',
  fontWeight: 500,
  position: 'relative',
  textTransform: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const TopBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
}));