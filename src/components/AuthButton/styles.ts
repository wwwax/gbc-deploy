import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledAuthButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  background: theme.custom.authForm.buttonGradient,
  width: '270px',
  height: '50px',
  alignSelf: 'center',
}));
