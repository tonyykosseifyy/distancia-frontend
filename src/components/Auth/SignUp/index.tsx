'use client';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormData, schema } from './utils';

const SignUp = (): React.ReactNode => {
	const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  });
	const [ see, setSee ] = useState<Boolean>(false);
	const [ check , setCheck ] = useState(false);
  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
  };
	console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label htmlFor="exampleInputEmail1.1" className="form-label">
					First Name *
				</label>
				<div className="input-group input-group-lg">
					<span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						<i className="bi bi-person-fill"></i>
					</span>
					<input
						type="email"
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="First Name"
						id="exampleInputEmail1.1"
						{...register('firstName')}
						autoComplete="given-name" 
					/>
				</div>
				{errors.firstName && <p className="text-danger mt-2">{errors.firstName.message}</p>}
			</div>
			<div className="mb-4">
				<label htmlFor="exampleInputEmail1.2" className="form-label">
					Last Name *
				</label>
				<div className="input-group input-group-lg">
					<span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						<i className="bi bi-person-fill"></i>
					</span>
					<input
						type="email"
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="Last Name"
						id="exampleInputEmail1.2"
						{...register('lastName')}
						autoComplete="family-name" 
					/>
				</div>
				{errors.lastName && <p className="text-danger mt-2">{errors.lastName.message}</p>}
			</div>
			<div className="mb-4">
				<label htmlFor="exampleInputEmail1.9" className="form-label">
					Phone Number *
				</label>
				<div className="input-group input-group-lg">
					<span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						<i className="bi bi-telephone-fill"></i>
					</span>
					<input
						type="number"
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="Phone Number - 07XXXXXXXX"
						pattern='^[0-9]{8}$'
						id="exampleInputEmail1.9"
						{...register('phoneNumber')}
						autoComplete="tel" 
					/>
				</div>
				{errors.phoneNumber && <p className="text-danger mt-2">{errors.phoneNumber.message}</p>}
			</div>
			<div className="mb-4">
				<label htmlFor="exampleInputEmail1.5" className="form-label">
					Email Address *
				</label>
				<div className="input-group input-group-lg">
					<span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						<i className="bi bi-envelope-fill" />
					</span>
					<input
						type="email"
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="E-mail"
						id="exampleInputEmail1.5"
						{...register('email')}
						autoComplete="email" 
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
			{/* Confirm Password */}
			<div className="mb-4">
				<label htmlFor="inputPassword7" className="form-label">
					Confirm Password *
				</label>
				<div className="input-group input-group-lg">
					<span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
						<i className="fas fa-lock" />
					</span>
					<input
						type="password"
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="*********"
						id="inputPassword7"
						{...register('confirmPassword')} 
					/>
				</div>
				{errors.confirmPassword && <p className="text-danger mt-2">{errors.confirmPassword.message}</p>}
			</div>
			{/* Check box */}
			<div className="mb-4">
				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="checkbox-1"
						checked={check}
						onChange={() => setCheck(state => !state)}
					/>
					<label className="form-check-label" htmlFor="checkbox-1">
						By signing up, you agree to the
						<a href="#"> terms of service</a>
					</label>
				</div>
			</div>
			{/* Button */}
			<div className="align-items-center mt-0">
				<div className="d-grid">
					<button disabled={!check} onClick={handleSubmit(onSubmit)} className="btn btn-primary mb-0" type="submit">
						Sign Up
					</button>
				</div>
			</div>
		</form>
	)
}

export default SignUp ;