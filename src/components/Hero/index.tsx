import React from 'react';
import { Box } from '@mui/material';

import {
  StyledContainer,
  StyledFlexContainer,
  StyledDescription,
  StyledLogoWrapper,
  StyledLogo,
  StyledFormWrapper,
  StyledText,
  StyledTextWrapper,
  StyledManifestText,
} from './styles';

interface HeroProps {
  form: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ form }) => {
  return (
    <StyledContainer>
      <StyledFlexContainer>
        <StyledDescription>
          <StyledLogoWrapper>
            <StyledLogo src="/logo.png" alt="logo" />
          </StyledLogoWrapper>

          <StyledTextWrapper>
            <Box flexGrow={1}>
              <StyledText margin="40px 0 40px 40px">
                {`As a key member of the world's top travel agency, your
                creativity and passion for travel are vital in upholding our
                standard of excellence.`}
              </StyledText>

              <StyledText marginLeft="200px">
                {`Log in ready to transform wanderlust into real journeys,
                crafting unforgettable experiences that exceed our clients'
                expectations.`}
              </StyledText>
            </Box>

            <StyledManifestText>
              {`Together, let's make every trip extraordinary.`}
            </StyledManifestText>
          </StyledTextWrapper>
        </StyledDescription>

        <StyledFormWrapper>{form}</StyledFormWrapper>
      </StyledFlexContainer>
    </StyledContainer>
  );
};
