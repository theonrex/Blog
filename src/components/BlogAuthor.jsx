import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}
function BlogAuthor() {
	const [author, setAuthor] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
            name,
            image,
                    "bio": bio[0].children[0].text,


        }`
			)
			.then((data) => setAuthor(data));
	}, []);

	return (
		<div>
			{author &&
				author.map((item, index) => (
					<div className="rowx">
						<div className="author-img">
							<img src={urlFor(item.image).width(200).url()} alt="" />
						</div>

						<span className="items-section">
							<h3> {item.name} </h3>
							<h4> {item.bio} </h4>
						</span>
					</div>
				))}

			{/* <h3> {author.name} </h3> */}
		</div>
	);
}

export default BlogAuthor;
