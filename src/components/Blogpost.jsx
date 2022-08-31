import React, { useState, useEffect } from "react";
//sanity
import sanityClient from "../client";
import { Link } from "react-router-dom";
// import post from "../../solablog/schemas/post";
import imageUrlBuilder from "@sanity/image-url";
import BlogAuthor from "./BlogAuthor";

function Blogpost() {
	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}
	const [postData, setPostData] = useState(null);
	// grab all data == post
	useEffect(() => {
		sanityClient
			//* means all data
			.fetch(
				`*[_type == "post"]{
            title,
            slug,
			publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
			) //then get all data fetched and == to setPostData
			.then((data) => setPostData(data));
		// .catch(console.error)
	}, []);

	return (
		<div className="container">
			<section className="blog">
				<h1>
					{" "}
					A collection of posts about Christianity and the{" "}
					<span>relationship with God.</span>{" "}
				</h1>

				<p className="blog-p">
					{" "}
					A blog for people who want to understand the Bible and better their
					relationship with God, Jesus and the Holy Spirit.
				</p>
				<div className="">
					<div className="postData rowx">
						{postData &&
							postData.map((post, index) => (
								<article className=" post-mg">
									{/* /Map over postData/ */}

									<Link
										to={"/post/" + post.slug.current}
										key={post.slug.current}
									>
										<span className="mainImage">
											{/* src={urlFor(food.foodImage).width(200).url()} */}
											<img
												src={urlFor(post.mainImage).width(200).url()}
												alt=""
											/>
											<div className="text-mg">
												<span>
													<h3 className="post-Title"> {post.title} </h3>
												</span>
												<div>
													<div>
														<BlogAuthor />
													</div>
													{/* <p> {post.publishedAt} </p> */}
													<p className="date">
														Published at :{" "}
														{new Date(post.publishedAt).toLocaleDateString()}
													</p>
												</div>{" "}
											</div>
										</span>
									</Link>
								</article>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Blogpost;
