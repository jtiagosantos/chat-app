import { FC } from 'react';

//types
import { InputProps } from './types';

//styles
import { InputElement } from './styles';

export const Input: FC<InputProps> = ({ ...rest }) => {
  const styleProperties = { 
    width: rest.width,
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

  return (
    <InputElement styles={styleProperties} {...rest} />
  );
}