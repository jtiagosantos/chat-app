import { FC } from 'react';

//types
import { FormProps } from './types';

//styles
import { Container } from './styles';

export const Form: FC<FormProps> = ({ children, ...rest }) => {
  const styleProperties = { 
    width: rest.width,
    marginTop: rest.marginTop, 
    marginBottom: rest.marginBottom, 
    marginRight: rest.marginRight, 
    marginLeft: rest.marginLeft, 
    margin: rest.margin,
    paddingTop: rest.paddingTop,
    paddingBottom: rest.paddingBottom,
    paddingRight: rest.paddingRight,
    paddingLeft: rest.paddingLeft,
    padding: rest.padding, 
  };

  return (
    <Container
    styles={styleProperties}
    {...rest}
    >
      {children}
    </Container>
  );
}