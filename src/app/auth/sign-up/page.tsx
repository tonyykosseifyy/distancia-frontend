import React from 'react';
import SignUpForm from '@/components/Auth/SignUp';


const SignUp = () : React.ReactNode => {
	return (
		<main>
			<section className="p-0 d-flex align-items-center position-relative overflow-hidden">
				<div className="container-fluid">
					<div className="row">
						{/* left */}
						<div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
							<div className="p-3 p-lg-5">
								{/* Title */}
								<div className="text-center">
									<h2 className="fw-bold">Welcome to our largest community</h2>
									<p className="mb-0 h6 fw-light">
										Let's learn something new today!
									</p>
								</div>
								{/* SVG Image */}
								<img src="/images/element/02.svg" className="mt-5" alt="" />
								{/* Info */}
								<div className="d-sm-flex mt-5 align-items-center justify-content-center">
									<ul className="avatar-group mb-2 mb-sm-0">
										<li className="avatar avatar-sm">
											<img
												className="avatar-img rounded-circle"
												src="/images/avatar/01.jpg"
												alt="avatar"
											/>
										</li>
										<li className="avatar avatar-sm">
											<img
												className="avatar-img rounded-circle"
												src="/images/avatar/02.jpg"
												alt="avatar"
											/>
										</li>
										<li className="avatar avatar-sm">
											<img
												className="avatar-img rounded-circle"
												src="/images/avatar/03.jpg"
												alt="avatar"
											/>
										</li>
										<li className="avatar avatar-sm">
											<img
												className="avatar-img rounded-circle"
												src="/images/avatar/04.jpg"
												alt="avatar"
											/>
										</li>
									</ul>
									{/* Content */}
									<p className="mb-0 h6 fw-light ms-0 ms-sm-3">
										4k+ Students joined us, now it's your turn.
									</p>
								</div>
							</div>
						</div>
						{/* Right */}
						<div className="col-12 col-lg-6 m-auto">
							<div className="row my-5">
								<div className="col-sm-10 col-xl-8 m-auto">
									{/* Title */}
									<img
										src="/images/element/03.svg"
										className="h-40px mb-2"
										alt=""
									/>
									<h2>Sign up for your account!</h2>
									<p className="lead mb-4">
										Nice to see you! Please Sign up with your account.
									</p>
									{/* Form START */}
									<SignUpForm />
									{/* Form END */}
									{/* Social buttons */}
									<div className="row">
										{/* Divider with text */}
										<div className="position-relative my-4">
											<hr />
											<p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
												Or
											</p>
										</div>
										{/* Social btn */}
										<div className="col-xxl-6 d-grid">
											<a href="#" className="btn bg-google mb-2 mb-xxl-0">
												<i className="fab fa-fw fa-google text-white me-2" />
												Signup with Google
											</a>
										</div>
										{/* Social btn */}
										<div className="col-xxl-6 d-grid">
											<a href="#" className="btn bg-facebook mb-0">
												<i className="fab fa-fw fa-facebook-f me-2" />
												Signup with Facebook
											</a>
										</div>
									</div>
									{/* Sign up link */}
									<div className="mt-4 text-center">
										<span>
											Already have an account?
											<a href="sign-in.html"> Sign in here</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
  )
};

export default SignUp;