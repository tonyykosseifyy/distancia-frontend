import * as Yup from 'yup';

export type ForgotPasswordForm = {
  email: string;
};

export const schema = Yup.object().shape({
  email: Yup.string().trim().required('Email is required').email('Invalid email address')
});
