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


export type axiosError = {
  statusCode: number;
  message: String ;
  error: String ;
}

export class axiosErrorClass {
  statusCode: number;
  message: String ;
  error: String ;

  constructor() {
    this.statusCode = 0;
    this.message = "";
    this.error = "";
  }

}