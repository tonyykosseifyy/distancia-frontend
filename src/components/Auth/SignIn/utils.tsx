import * as Yup from 'yup';

export type SignInFormData = {
  email: string;
  password: string;
};

export const schema = Yup.object().shape({
  email: Yup.string().trim().required('Email is required').email('Invalid email address'),
  password: Yup.string().trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
});

