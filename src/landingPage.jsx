import React from "react";
// import "./static/css/style.css";
//styles
// import "./index.css";
import "./static/css/style.css"
import "bootstrap/dist/css/bootstrap.min.css";

// import MyCrud from "./myCrud";

//images
// import Furniture from "./static/images/furniture.png"


//pages
import Popular from "./components/popular"
import Explore from "./components/Explore";
import Gallery from "./components/Gallery";


function App() {
	return (
		<div className="container">
			{/* <MyCrud /> */}

			<div className="rowx landing-page">
				<div className="col50">
					<header className="Beautiful">
						Inspired by Christ, Composed by Love
					</header>
					<h1 className="Treading">
						Explore The  Depth <br />
						<span> Of The Insightful</span> <br /> Words Of Christ
					</h1>
					<p className="philosophy">
						We focus on how to grow in relationship with The Father, Son and
						Holy Spirit. We provide relevant, topical, and encouraging articles
						on everything from Living a holy life to parenting, spiritual
						warfare to healing. Our philosophy is when we know Christ
						intimately.
					</p>
				</div>
				<div className="col50 bible">
					<img
						src="https://images.unsplash.com/photo-1593485589800-579b43749b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlibGUlMjBzdG9yeXxlbnwwfHwwfHw%3D&w=1000&q=80"
						alt="unsplash-img"
					/>
				</div>
			</div>
			<Popular/>
			<div>
				<Explore/>
			</div>
			<div>
				<Gallery/>
			</div>
		</div>
	);
}

export default App;
