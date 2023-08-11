import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)({
  backgroundImage: 'url(/login-page-bg.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
});

export const StyledFlexContainer = styled(Box)({
  display: 'flex',
});

export const StyledDescription = styled(Box)({
  width: '50%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledLogoWrapper = styled(Box)({
  paddingTop: '80px',
  paddingLeft: '40px',
});

export const StyledLogo = styled('img')({
  width: '300px',
  height: 'auto',
});

export const StyledTextWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const StyledText = styled(Typography)(({ theme }) => ({
  width: 400,
  textAlign: 'center',
  color: theme.custom.authForm.whiteColorText,
}));

export const StyledManifestText = styled(Typography)(({ theme }) => ({
  paddingBottom: '40px',
  paddingLeft: '80px',
  textTransform: 'uppercase',
  color: theme.custom.authForm.whiteColorText,
}));

export const StyledFormWrapper = styled(Box)({
  width: '50%',
  height: '100vh',
});
