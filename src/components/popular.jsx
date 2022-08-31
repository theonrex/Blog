import React from "react";
import '../static/css/style.css'
import { Link } from "react-router-dom";

function Popular() {
	//   let clickedClass = "clicked"
	//   const body = document.body
	//   const lightTheme = "light"
	//   const darkTheme = "dark"
	//   let theme

	//   if (localStorage) {
	//     theme = localStorage.getItem("theme")
	//   }

	//   if (theme === lightTheme || theme === darkTheme) {
	//     body.classList.add(theme)
	//   } else {
	//     body.classList.add(lightTheme)
	//   }

	//   const switchTheme = e => {
	//     if (theme === darkTheme) {
	//       body.classList.replace(darkTheme, lightTheme)
	//       e.target.classList.remove(clickedClass)
	//       localStorage.setItem("theme", "light")
	//       theme = lightTheme
	//     } else {
	//       body.classList.replace(lightTheme, darkTheme)
	//       e.target.classList.add(clickedClass)
	//       localStorage.setItem("theme", "dark")
	//       theme = darkTheme
	//     }
	//   }
	return (
		<div>
			<header className="popular">Popular Post</header>

			<div className="rowx">
				<div className="col30 popular-post">
					<div>
						<img
							src="https://images.unsplash.com/photo-1593485589800-579b43749b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlibGUlMjBzdG9yeXxlbnwwfHwwfHw%3D&w=1000&q=80"
							alt=""
						/>
					</div>
					<div className="popular-post-text">
						<h2>Love </h2>
						<p>We all want to know Christ sooner or later. It's up to us to get introduced to Him and learn what it is He has in store for us.</p>
					</div>
					<p> <Link to="www.google.com"> google
					</Link> </p>
				</div>
				<div className="col30 popular-post">
					<div>
						<img
							src="https://images.unsplash.com/photo-1593485589800-579b43749b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlibGUlMjBzdG9yeXxlbnwwfHwwfHw%3D&w=1000&q=80"
							alt=""
						/>
					</div>
					<div className="popular-post-text">
						<h2>Love of Christ</h2>
						<p>We all want to know Christ sooner or later. It's up to us to get introduced to Him and learn what it is He has in store for us.</p>
					</div>
					<p>tags</p>
				</div>{" "}
				<div className="col30 popular-post">
					<div >
						<img
							src="https://images.unsplash.com/photo-1593485589800-579b43749b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlibGUlMjBzdG9yeXxlbnwwfHwwfHw%3D&w=1000&q=80"
							alt=""
						/>
					</div>
					<div className="popular-post-text">
						<h2>Love of Christ</h2>
						<p>We all want to know Christ sooner or later. It's up to us to get introduced to Him and learn what it is He has in store for us.</p>
					</div>
					<p>tags</p>
				</div>
			</div>
			{/* <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={e => switchTheme(e)}
    > mode</button> */}
		</div>
	);
}

export default Popular;
