'use client';
import React, { useState } from 'react'
import { schema, SignInFormData } from './utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import axios from '../../../utils/axios';


const SignIn = (): React.ReactNode => {
  const [ rememberMe, setRememberMe ] = useState(false);
  const [ see, setSee ] = useState<Boolean>(false);
  const [ error, setError ] = useState<String>("");
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any)  => {
    try {
      console.log(data);
      const response = await axios.post('/auth/local/signin', data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
      {/* Password */}
      <div className="mb-4">
				<label htmlFor="inputPassword5" className="form-label">
					Password *
				</label>
				<div className="input-group input-group-lg">
					<span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						<i className="fas fa-lock" />
					</span>
					<input
						type={ see ? 'text' : 'password' }
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="*********"
						id="inputPassword5"
						{...register('password')} 
					/>
					<span style={{cursor:'pointer'}} onClick={() => setSee(state => !state)} className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						{ see ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i> }
					</span>
				</div>
				{errors.password && <p className="text-danger mt-2">{errors.password.message}</p>}
			</div>
      {/* Check box */}
      <div className="mb-4 d-flex justify-content-between mb-4">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="text-primary-hover">
          <Link href='/auth/forgot-password' className="text-secondary">
            <u>Forgot password?</u>
          </Link>
        </div>
      </div>
      {/* Button */}
      <div className="align-items-center mt-0">
        <div className="d-grid">
          <button onClick={handleSubmit(onSubmit)} className="btn btn-primary mb-0" type="button">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignIn ;