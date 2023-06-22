import * as Yup from 'yup';

export type SignUpFormData = {
	firstName: string;
	lastName: string;
  // username: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export const schema = Yup.object().shape({
  firstName: Yup.string().trim().required('First name is required').min(3, 'First name must be at least 3 characters'),
  lastName: Yup.string().trim().required('Last name is required').min(3, 'Last name must be at least 3 characters'),
  // username: Yup.string().trim()
  //   .required('Username is required')
  //   .min(3, 'Username must be at least 3 characters')
  //   .matches(/^\S*$/, 'Username must not contain spaces'),
	phoneNumber: Yup.string().trim()
    .required('Phone number is required')
    .matches(/^\d{8}$/, 'Phone number must consist of 8 digits'),
  email: Yup.string().trim().required('Email is required').email('Invalid email address'),
  password: Yup.string().trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});