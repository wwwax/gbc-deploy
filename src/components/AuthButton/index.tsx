import { StyledAuthButton } from './styles';

type AuthButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  text: string;
};

export const AuthButton: React.FC<AuthButtonProps> = ({
  type,
  disabled,
  variant,
  text,
}) => {
  return (
    <StyledAuthButton type={type} disabled={disabled} variant={variant}>
      {text}
    </StyledAuthButton>
  );
};
