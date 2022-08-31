import React from 'react'


function Contact() {
  return (
		<div className="rowx container">
			<section className="col50 icons-social">
				<a href="/#" className="">
					<i className="fab fa-facebook-f"> FaceBook</i>
				</a>
				<a href="/#" className="">
					<i className="fab fa-google"> Gmail</i>
				</a>
				<a href="/#" className="">
					<i class="fa-solid fa-phone"> +2347063528046</i>{" "}
				</a>{" "}
				<a href="/#" className="">
					<i class="fa-brands fa-whatsapp"> +2347063528046</i>{" "}
				</a>
			</section>
			<section className="col50 contact">
				<h1>
					Contact Us <br />
				</h1>
				<h1 className="usflex">
					<span className="contact-line"> </span>
				</h1>
			</section>
		</div>
	);
}

export default Contact