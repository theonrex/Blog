import React from "react";
import Image from "../static/images/rex3.jpg"

export default function BlogAbout() {
	return (
		<div>
			<section className="container">
				<div className="rowx about">
					<section className="about-img col40">
						{" "}
						<img src={Image} alt="" srcset="" />{" "}
					</section>
					<section className="col60">
						<header className="line about-header"> About Me </header>
						<p>
							I am a pastor, preacher, and mentor to those who seek God. I'm an
							advocate for the Word of God and I have witnesses to power living
							in every area of my life. My passion is to equip God's people
							through strategies for better church growth and discipleship -
							especially those who desire to be more effective with the call on
							their lives. I pray that this blog will be a resource for you,
							whether you're a believer looking for guidance or seeking insight
							and advice from someone who has walked this journey before.
						</p>
					</section>
				</div>
			</section>
		</div>
	);
}
