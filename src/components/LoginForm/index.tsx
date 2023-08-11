import Link from 'next/link';
import { Formik } from 'formik';
import { ErrorHelperText } from '../ErrorHelperText';
import { AuthButton } from '../AuthButton';

import {
  StyledForm,
  StyledInput,
  StyledResetPasswordLinkContainer,
  StyledFormTitle,
  StyledFormContainer,
} from './styles';

type Errors = {
  email?: string;
  password?: string;
};

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: Errors = {};

        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 8) {
          errors.password = 'Must be 8 characters or more';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // TODO: add api call to login
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <StyledFormContainer>
          <StyledFormTitle>Welcome Back</StyledFormTitle>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />

            <ErrorHelperText
              message={errors.email && touched.email ? errors.email : ''}
            />

            <StyledInput
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />

            <ErrorHelperText
              message={
                errors.password && touched.password ? errors.password : ''
              }
            />

            <StyledResetPasswordLinkContainer>
              <Link href="/forgot-password">reset password</Link>
            </StyledResetPasswordLinkContainer>

            <AuthButton
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              text="Access Agent Console"
            />
          </StyledForm>
        </StyledFormContainer>
      )}
    </Formik>
  );
};
