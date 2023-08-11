import theme from '@/utils/theme';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledErrorHelperTextContainer = styled(Box)({
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  color: theme.custom.authForm.validationError,
  fontSize: '10px',
  paddingLeft: '16px',
});
