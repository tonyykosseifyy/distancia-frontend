'use client';
import React, { useState } from 'react'


const SignUp = (): React.ReactNode => {
	const [ state, setState ] = useState<Boolean>(false);
  return (
    <form>
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
					/>
				</div>
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
						type="password"
						className="form-control border-0 bg-light rounded-end ps-1"
						placeholder="*********"
						id="inputPassword5"
					/>
				</div>
			</div>
			{/* Confirm Password */}
			<div className="mb-4">
				<label htmlFor="inputPassword6" className="form-label">
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
						id="inputPassword6"
					/>
				</div>
			</div>
			{/* Check box */}
			<div className="mb-4">
				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="checkbox-1"
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
					<button className="btn btn-primary mb-0" type="button">
						Sign Up
					</button>
				</div>
			</div>
		</form>
	)
}

export default SignUp ;