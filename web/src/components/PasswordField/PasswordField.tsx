import { FC, useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';

//components
import { Input } from '@/components';

//hooks
import { useTheme } from '@/hooks';

//types
import { PasswordFieldProps } from './types';

//styles
import { Container } from './styles';

export const PasswordField: FC<PasswordFieldProps> = ({ control, name, ...rest }) => {
  const { colors } = useTheme();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  return (
    <Container>
      <Input 
        type={isShowPassword ? 'text' : 'password'} 
        width="100%"
        height="2.5rem"
        fontSize="0.875rem"
        textColor={colors.manatee}
        placeholderColor={colors.manatee}
        padding="0.5rem 3rem 0.5rem 0.625rem"
        placeholder="Insert your password"  
        control={control}
        name={name}
        {...rest}
      />
      {isShowPassword ? (
        <EyeSlash size={23} color="gray" onClick={handleShowPassword} />
      ) : (
        <Eye size={23} color="gray" onClick={handleShowPassword} />
      )}
    </Container>
  );
}