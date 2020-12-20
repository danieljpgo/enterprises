import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import PasswordField from '../../../../common/components/PasswordField';
import PasswordIcon from '../../../../common/components/icons/PasswordIcon';
import MainIcon from '../../../../common/components/icons/MailIcon';
import Button from '../../../../common/components/Button';
import Input from '../../../../common/components/Input';
import Text from '../../../../common/components/Text';
import { Container } from './styles';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = object().shape({
  email: string()
    .email('Favor inserir um email válido.')
    .required(''),
  password: string()
    .min(6, 'Senha deve possuir mais de 6 caracteres.')
    .matches(RegExp(/^((?=.*[0-9]))/), 'Senha deve incluir números.')
    .required(''),
});

const propTypes = {
  isLoading: PropTypes.bool,
  requestError: PropTypes.string,
  onSubmit: PropTypes.func,
  onBlurFields: PropTypes.func,
};

const Form = (props) => {
  const {
    isLoading,
    requestError,
    onSubmit,
    onBlurFields,
  } = props;

  function handleBlurFields() {
    if (requestError) {
      onBlurFields();
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors, isValid, handleBlur }) => (
        <Container>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              status={(requestError || Boolean(errors.email)) && 'error'}
              startAdornment={<MainIcon />}
              as={Input}
              onBlur={(e) => {
                handleBlurFields();
                handleBlur(e);
              }}
            />
            <Field
              id="password"
              name="password"
              status={(requestError || Boolean(errors.password)) && 'error'}
              startAdornment={<PasswordIcon />}
              as={PasswordField}
              onBlur={(e) => {
                handleBlurFields();
                handleBlur(e);
              }}
            />
          </div>
          <Text variants="warning">
            {requestError || errors.email || errors.password}
          </Text>
          <div>
            <Button
              type="submit"
              disabled={isLoading || !isValid}
            >
              Entrar
            </Button>
          </div>
        </Container>
      )}
    </Formik>
  );
};

Form.propTypes = propTypes;

export default Form;
