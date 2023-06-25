import React from 'react';
import SignInForm from '@/components/Auth/SignIn';
import Link from 'next/link';

const SignIn = () : React.ReactNode => {
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
									{/* Avatar group */}
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
									<span className="mb-0 fs-1">👋</span>
									<h1 className="fs-2">Login into Distancia!</h1>
									<p className="lead mb-4">
										Nice to see you! Please log in with your account.
									</p>
									{/* Form START */}
									<SignInForm />
									{/* Form END */}
									{/* Social buttons and divider */}
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
												Login with Google
											</a>
										</div>
										{/* Social btn */}
										<div className="col-xxl-6 d-grid">
											<a href="#" className="btn bg-facebook mb-0">
												<i className="fab fa-fw fa-facebook-f me-2" />
												Login with Facebook
											</a>
										</div>
									</div>
									{/* Sign up link */}
									<div className="mt-4 text-center">
										<span>
											Don't have an account? <Link href='/auth/sign-up'>Signup here</Link>
										</span>
									</div>
								</div>
							</div>{" "}
							{/* Row END */}
						</div>
					</div>{" "}
					{/* Row END */}
				</div>
			</section>
		</main>
  )
};

export default SignIn;