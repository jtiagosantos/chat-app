import { FC } from 'react';
import { useController } from 'react-hook-form'

//components
import { Error } from '@/components';

//types
import { InputProps } from './types';

//styles
import { InputElement, Container } from './styles';

export const Input: FC<InputProps> = ({ control, name, ...rest }) => {
  const inputStyleProperties = { 
    height: rest.height,
    fontSize: rest.fontSize,
    textColor: rest.textColor,
    placeholderColor: rest.placeholderColor,
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

  const containerStyleProperties = {
    width: rest.width,
  }

  const { 
    field,
    formState: { errors }
  } = useController({ control, name });

  return (
    <Container styles={containerStyleProperties}>
      <InputElement 
        styles={inputStyleProperties} 
        {...field}
        {...rest} 
      />
      <Error errors={errors} name={name} />
    </Container>
  );
}