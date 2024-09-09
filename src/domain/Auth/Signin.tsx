import { Button, Typography } from '@mui/material';
import {
  StyledContainer,
  StyledInputBox,
  StyledAuthFooter,
  StyledLink,
} from './Shared.Auth';
import { useNavigate } from 'react-router-dom';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import ReduxTextField from '../../redux/components/ReduxTextField';
import FORM from '../../const/form';
import { isEmailValid, passwordValidation } from '../../utils/validation';
const {
  SIGN_IN: { formName, formFields },
} = FORM;

const Signin = ({ handleSubmit, valid, anyTouched }: InjectedFormProps) => {
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledContainer>
        <Typography variant="h4">Sign In</Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Enter your email and password to sign in to your account.
        </Typography>
        <StyledInputBox>
          <Field
            validate={[isEmailValid]}
            name={formFields.email}
            label="Enter Username"
            component={ReduxTextField}
          />
          <Field
            validate={[passwordValidation]}
            name={formFields.password}
            label="Enter Password"
            component={ReduxTextField}
            type="password"
          />
        </StyledInputBox>
        <StyledAuthFooter>
          <Button
            variant="contained"
            sx={{ marginBottom: 2 }}
            disabled={!anyTouched || !valid}
          >
            Sign In
          </Button>
          <Typography>
            Don't have an account?{' '}
            <StyledLink
              onClick={() => {
                navigate('/signup');
              }}
            >
              Signup
            </StyledLink>
          </Typography>
        </StyledAuthFooter>
      </StyledContainer>
    </form>
  );
};

const EnhancedSignin = reduxForm({
  touchOnChange: true,
  form: formName,
})(Signin);

export default EnhancedSignin;
