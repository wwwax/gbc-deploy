import { Formik } from 'formik';
import { ErrorHelperText } from '../ErrorHelperText';
import { AuthButton } from '../AuthButton';

import {
  StyledFormTitle,
  StyledInput,
  StyledFormContainer,
  StyledForm,
} from './styles';

type Errors = {
  email?: string;
};

export const ForgotPasswordForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors: Errors = {};

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
        // TODO: add api call to request for new password
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
          <StyledFormTitle>Forgot Password</StyledFormTitle>
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

            <AuthButton
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              text="Send Email"
            />
          </StyledForm>
        </StyledFormContainer>
      )}
    </Formik>
  );
};
