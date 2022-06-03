import { FC } from 'react';

//components
import { SpinnerLoading } from '../SpinnerLoading';

//types
import { ButtonProps } from './types';

//styles
import { Container } from './styles';

export const Button: FC<ButtonProps> = ({ children, loading, icon, ...rest }) => {
  const styleProperties = { 
    width: rest.width, 
    height: rest.height, 
    marginTop: rest.marginTop, 
    marginBottom: rest.marginBottom, 
    marginRight: rest.marginRight, 
    marginLeft: rest.marginLeft, 
    margin: rest.margin,
  };

  return (
    <Container 
      styles={styleProperties} 
      disabled={loading}
      {...rest}
    >
      {icon && icon}
      {!loading && children}
      {loading && (
        <SpinnerLoading 
          size={20}
          borderSize={3}
          secondaryColor="#8257e5"
          primaryColor="#ffffff"
        />
      )}
    </Container>
  );
}