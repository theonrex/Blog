import React from "react";


function App() {
	return (
		<div className="">
			<div class="">
				{/* Footer  */}
				<footer className="text-center text-white">
					{/* Grid container  */}
					<div className="container">
						{/* Section: Links  */}
						<section className="mt-5">
							{/* Grid row */}
							<div className="row text-center d-flex justify-content-center pt-5">
								{/* Grid column  */}
								<div className="col-md-2">
									<h6 className="text-uppercase font-weight-bold">
										<a href="/about" className="text-white">
											About
										</a>
									</h6>
								</div>
								{/* Grid column  */}

								{/* Grid column  */}
								<div className="col-md-2">
									<h6 className="text-uppercase font-weight-bold">
										<a
											href="https://www.youtube.com/results?search_query=christian+videos"
											className="text-white"
										>
											Videos
										</a>
									</h6>
								</div>
								{/* Grid column  */}

								{/* Grid column  */}
							
								{/* Grid column  */}

								{/* Grid column  */}
								<div className="col-md-2">
									<h6 className="text-uppercase font-weight-bold">
										<a href="/contact" className="text-white">
											Help
										</a>
									</h6>
								</div>
								{/* Grid column  */}

								{/* Grid column  */}
								<div className="col-md-2">
									<h6 className="text-uppercase font-weight-bold">
										<a href="/contact" className="text-white">
											Contact
										</a>
									</h6>
								</div>
								{/* Grid column  */}
							</div>
							{/* Grid row */}
						</section>
						{/* Section: Links  */}
						<hr className="my-5" />
						{/* Section: Text  */}
						<section className="mb-5">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-8">
									<p>
										If you are looking for a blog site for Christians, then this
										is the place. This is a personal blog created by few years
										updated news related to all aspect of life. It is also my
										experience based based and professional advice for my
										readers who are seeking information about any topic related
										to their lives.
									</p>
								</div>
							</div>
						</section>
						{/* Section: Text  */}
						Social Media
						<br />
						<section className="text-center mb-5">
							<a href="/#" className="text-white me-4">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="/#" className="text-white me-4">
								<i className="fab fa-google"></i>
							</a>
							<a href="/#" className="text-white me-4">
								<i class="fa-solid fa-phone"></i>{" "}
							</a>{" "}
							<a href="/#" className="text-white me-4">
								<i class="fa-brands fa-whatsapp"></i>{" "}
							</a>
						</section>
						{/* Section: Social  */}
					</div>
					{/* Grid container  */}
					<div className="text-center p-3">
						© 2020 Copyright:{" "}
						<a className="text-white" href="/#">
							solaaremu
						</a>
					</div>
					Designed by{" "}
					<a className="text-white" href="https://olawandearmstrong.com/">
						theonrex
					</a>
				</footer>
			</div>
			{/* End of .container  */}
		</div>
	);
}

export default App;
