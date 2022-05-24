import { FC } from 'react';

//types
import { ButtonProps } from './types';

//styles
import { Container } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}