'use client';
import React, { useState } from 'react'
import { schema, SignInFormData, axiosError, axiosErrorClass } from './utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import axios from '@/utils/axios';
import { useRouter, useSearchParams } from 'next/navigation';

const saveTokens = async (response: any) => {
  console.log(response);
  console.log(response.headers.get('Set-Cookie'));
  // try {
  //   const response = await fetch('/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       access_token: 'your_access_token',
  //       refresh_token: 'your_refresh_token',
  //     }),
  //   });

  //   // if (response.ok) {
  //   //   const cookies = response.headers.get('Set-Cookie');
  //   //   // Parse and save the cookies as needed
  //   //   // Example: document.cookie = cookies;

  //   //   setMessage('Login successful');
  //   // } else {
  //   //   setMessage('Login failed');
  //   // }
  // } catch (error) {
  //   console.error('Login error:', error);
  // }
};


const SignIn = (): React.ReactNode => {
  const router = useRouter();
  const query = useSearchParams();
  const [ rememberMe, setRememberMe ] = useState(false);
  const [ see, setSee ] = useState<Boolean>(false);
  const [ loading, setLoading ] = useState<Boolean>(false);
  const [ error, setError ] = useState<axiosError>({ statusCode: 0, message: "", error: "" });
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any)  => {
    setLoading(true)
    try {
      const response = await axios.post('/auth/local/signin', data);
      const user_data = response.data;
      setError(new axiosErrorClass()) ;
      console.log(user_data);
      saveTokens(response);
      router.push(query ? query.get('previous') ?? '/student/dashboard': '/student/dashboard') ;
    } catch (err: any) {
      setError(err.response.data);
    }
    finally {
      setLoading(false);
    }
  };
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
      {error.statusCode === 403 && <p className="text-danger mt-2">{error.message}</p>}

      <div className="align-items-center mt-0">
        <div className="d-grid">
          <button onClick={handleSubmit(onSubmit)} className={`btn btn-primary mb-0 ${Object.values(errors).length > 0 && 'disabled'}`} type="submit">
            {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> :
            <>
              Login
            </>
            }
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignIn ;