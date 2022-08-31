import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}
function BlogsinglePost() {
const [singlePost, setSinglePost] = useState(null);
const {slug} = useParams();

useEffect(() =>{
    sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
           title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            body,
            "name": author->name,
            "authorImage": author->image,
            "bio": author-> bio[0].children[0].text,
    }`
			)
			.then((data) => setSinglePost(data[0]));
},[])

if (!singlePost) return <div>Loading....</div>

	return (
		<div className="container">
			<header className="singlePost-title"> {singlePost.title} </header>
			<div className="singlePost-img">
				<img src={urlFor(singlePost.mainImage).width(200).url()} alt="" />{" "}
			</div>

			<section>
				<div className="authorImage-img">
					<img src={urlFor(singlePost.authorImage).width(200).url()} alt="" />{" "}
				</div>
				<header className="singlePost-header">
					{" "}
					{singlePost.name} <br /> <span>{singlePost.bio}</span>{" "}
				</header>
			</section>

			<article className="singlePost-body">
				<BlockContent
					blocks={singlePost.body}
					projectId="ph4hgpxb"
					dataset="production"
				/>
			</article>
		</div>
	);
}

export default BlogsinglePost;
