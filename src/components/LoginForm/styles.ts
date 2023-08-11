import { styled } from '@mui/material/styles';
import { Button, Box, TextField, Typography } from '@mui/material';

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
  textAlign: 'center',
}));

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledInput = styled(TextField)((props) => ({
  borderRadius: '30px',
  border: '1px solid #244A71',
  boxShadow: '-2px 2px 4px 0px rgba(0, 0, 0, 0.35)',

  '& fieldset': { border: 'none' },
}));

export const StyledResetPasswordLinkContainer = styled(Box)(({ theme }) => ({
  textAlign: 'right',
  color: theme.custom.authForm.grayColorText,
  fontSize: '14px',
  marginBottom: '16px',
}));
