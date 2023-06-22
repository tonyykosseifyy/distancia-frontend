import React from 'react';
import SignUpForm from '@/components/Auth/SignUp';


const SignUp = () : React.ReactNode => {
	return (
		<main>
			<section className="p-0 d-flex align-items-center position-relative overflow-hidden">
				<div className="container-fluid">
					<div className="row flex-column">
						{/* left */}
						<div style={{ minHeight: '100vh' }} className="pt-4 col d-md-flex justify-content-center align-items-stretch bg-primary bg-opacity-10 vh-100">
							<div style={{ maxHeight: '100vh',minHeight: 'calc(100vh - 40px)' }} className="h-100 p-3 p-lg-2 d-flex flex-column align-items-center justify-content-between">
								{/* Title */}
								<div className="text-center">
									<h2 className="fw-bold">Welcome to our largest community</h2>
									<p className="mb-0 h6 fw-light">
										Let's learn something new today!
									</p>
								</div>
								{/* SVG Image */}
								<img src="/images/element/02.svg" style={{ objectFit: 'contain', maxHeight:'40vh' }} className="mt-5" alt="" />
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
						<div className="col m-auto">
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