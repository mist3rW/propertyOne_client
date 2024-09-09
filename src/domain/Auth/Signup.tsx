import { Button, Typography } from '@mui/material';
import {
  StyledContainer,
  StyledInputBox,
  StyledAuthFooter,
  StyledLink,
} from './Shared.Auth';
import { useNavigate } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import ReduxTextField from '../../redux/components/ReduxTextField';
import FORM from '../../const/form';
import { isEmailValid, passwordValidation } from '../../utils/validation';
const {
  SIGN_UP: { formName, formFields },
} = FORM;

const Signup = ({ handleSubmit, valid, anyTouched }: InjectedFormProps) => {
  const navigate = useNavigate();

  const submitForm = (formData: any) => {
    console.log('Form submitting', formData);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <StyledContainer>
        <Typography variant="h4">Sign Up</Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Enter your email and password to create an account
        </Typography>
        <StyledInputBox>
          <Field
            validate={[isEmailValid]}
            name={formFields.email}
            label="User Email"
            component={ReduxTextField}
          />
          <Field
            validate={[passwordValidation]}
            name={formFields.password}
            label="User Password"
            component={ReduxTextField}
            type="password"
          />
        </StyledInputBox>
        <StyledAuthFooter>
          <Button
            disabled={!anyTouched || !valid}
            variant="contained"
            type="submit"
            sx={{ marginBottom: 2 }}
          >
            Sign up
          </Button>
          <Typography>
            Already have an account?{' '}
            <StyledLink
              onClick={() => {
                navigate('/signin');
              }}
            >
              Sign in
            </StyledLink>
          </Typography>
        </StyledAuthFooter>
      </StyledContainer>
    </form>
  );
};

const EnhancedSignup = reduxForm({
  touchOnChange: true,
  form: formName,
})(Signup);

export default EnhancedSignup;
