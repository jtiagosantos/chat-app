import { X } from 'phosphor-react';

//styles
import { Container } from './styles';

export const UserDialog = () => {
  return (
    <Container>
      <div>
        <X size={20} weight='bold' color='#ffffff' />
      </div>
      <img src="https://github.com/jtiagosantos.png" alt="" />
      <h1>Tiago Santos</h1>
    </Container>
  );
}