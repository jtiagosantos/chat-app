import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { WarningCircle } from 'phosphor-react';

//types
import { ErrorProps } from './types';

//styles
import { Container } from './styles';

export const Error: FC<ErrorProps> = ({ errors, name }) => {
  const existsError = errors[name];
  
  if (existsError) {
    return (
      <Container>
        <WarningCircle weight='regular' />
        <ErrorMessage errors={errors} name={name} as='p' />
      </Container>
    );
  }

  return null;
}