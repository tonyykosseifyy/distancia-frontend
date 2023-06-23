'use client';
import React from 'react'
import { schema, ForgotPasswordForm } from './utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const SignIn = (): React.ReactNode => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
	console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address *
        </label>
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
            <i className="bi bi-envelope-fill" />
          </span>
          <input
            type="email"
            className="form-control border-0 bg-light rounded-end ps-1"
            placeholder="E-mail"
            id="exampleInputEmail1"
            autoComplete="email"
            {...register('email')}
          />
        </div>
        {errors.email && <p className="text-danger mt-2">{errors.email.message}</p>}
      </div>
      {/* Button */}
      <div className="align-items-center">
        <div className="d-grid">
          <button onClick={() => console.log('clicked')} className="btn btn-primary mb-0" type='submit'>
            Reset password
          </button>
        </div>
      </div>
    </form> 
  )
}

export default SignIn ;