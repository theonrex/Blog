import React, { useState, useEffect } from "react";
import sanityClient from "../client";

function BlogProjects() {

    const [project, setProject] =useState(null);
    useEffect(() =>{
        sanityClient
        .fetch(
            `*[_type == "project"]{
                title,
                data,
                place,
                description,
                date,


            }`
        ) 
        .then((data) => setProject(data));
    }, [])
	return (
		<div>
			{project &&
				project.map((projectP, index) => (
					<div>
						<h2> {new Date(projectP.date).toLocaleDateString()}</h2>
						{projectP.place}
					</div>
				))}
		</div>
	);
}

export default BlogProjects;
