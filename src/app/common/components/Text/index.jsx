import { Container } from './styles';

// @TODO Adicionar props types

const Text = (props) => {
  const {
    children,
    variants,
  } = props;

  return (
    <Container $variants={variants}>
      {children}
    </Container>
  );
};

export default Text;
