import { StyledErrorHelperTextContainer } from './styles';

type ErrorHelperTextProps = {
  message: string;
};

export const ErrorHelperText: React.FC<ErrorHelperTextProps> = ({
  message,
}) => {
  return (
    <StyledErrorHelperTextContainer>{message}</StyledErrorHelperTextContainer>
  );
};
