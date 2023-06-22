import * as Yup from 'yup';

export type SignUpFormData = {
  email: string;
  password: string;
};

export const schema = Yup.object().shape({
  email: Yup.string().trim().required('Email is required').email('Invalid email address'),
  password: Yup.string().trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
});

