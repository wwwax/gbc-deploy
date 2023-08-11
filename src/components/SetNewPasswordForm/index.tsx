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
  newPassword?: string;
  confirmNewPassword?: string;
};

export const SetNewPasswordForm = () => {
  return (
    <Formik
      initialValues={{ newPassword: '', confirmNewPassword: '' }}
      validate={(values) => {
        const errors: Errors = {};

        if (!values.newPassword) {
          errors.newPassword = 'Required';
        } else if (values.newPassword.length < 8) {
          errors.newPassword = 'Must be 8 characters or more';
        }

        if (!values.confirmNewPassword) {
          errors.confirmNewPassword = 'Required';
        } else if (values.newPassword !== values.confirmNewPassword) {
          errors.confirmNewPassword = 'Passwords do not match';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // TODO: add api call to set new password
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
          <StyledFormTitle>Set New Password</StyledFormTitle>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type="password"
              name="newPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
              placeholder="New Password"
            />

            <ErrorHelperText
              message={
                errors.newPassword && touched.newPassword
                  ? errors.newPassword
                  : ''
              }
            />

            <StyledInput
              type="password"
              name="confirmNewPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmNewPassword}
              placeholder="Confirm New Password"
            />

            <ErrorHelperText
              message={
                errors.confirmNewPassword && touched.confirmNewPassword
                  ? errors.confirmNewPassword
                  : ''
              }
            />

            <AuthButton
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              text="Set New Password"
            />
          </StyledForm>
        </StyledFormContainer>
      )}
    </Formik>
  );
};
