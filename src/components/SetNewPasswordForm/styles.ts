import { Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormContainer = styled(Box)({
  paddingTop: '40px',
  width: '400px',
});

export const StyledFormTitle = styled(Typography)(({ theme }) => ({
  color: theme.custom.authForm.title,
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: 'normal',
  marginBottom: '16px',
}));

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledInput = styled(TextField)({
  borderRadius: '30px',
  border: '1px solid #244A71',
  boxShadow: '-2px 2px 4px 0px rgba(0, 0, 0, 0.35)',

  '& fieldset': { border: 'none' },
});
