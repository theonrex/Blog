import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../static/css/style.css";
//dark mode
import DarkMode from "../components/darkmode";
import { Link, useLocation } from "react-router-dom";

function NavHead() {
	const location = useLocation(); // once ready it returns the 'window.location' object
	const [url, setUrl] = useState(null);
	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);
	// ...
	return (
		<div className="navbar-bg">
			<>
				{["xl"].map((expand) => (
					<Navbar key={expand} expand={expand} className="mb-3 container">
						<Container fluid>
							<Navbar.Brand href="#">Sola-Aremu Blog</Navbar.Brand>
							<Navbar.Toggle
								aria-controls={`offcanvasNavbar-expand-${expand}`}
							/>
							<Navbar.Offcanvas
								id={`offcanvasNavbar-expand-${expand}`}
								aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
								placement="end"
							>
								<Offcanvas.Header closeButton>
									<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
										Offcanvas
									</Offcanvas.Title>
								</Offcanvas.Header>
								<Offcanvas.Body>
									<Nav className="justify-content-end flex-grow-1 pe-3">
										<Nav.Link
											href="/"
											className={
												"underline" + (url === "/" ? " active" : "")
											}
										>
											Home
										</Nav.Link>
										<Nav.Link
											href="/post"
											className={
												"underline" + (url === "/post" ? " active" : "")
											}
										>
											Blog
										</Nav.Link>
										<Nav.Link
											href="/about"
											className={
												"underline" + (url === "/about" ? " active" : "")
											}
										>
											About
										</Nav.Link>
										<Nav.Link
											href="/contact"
											className={
												"underline" + (url === "/contact" ? " active" : "")
											}
										>
											Contact
										</Nav.Link>
										<button>
											<DarkMode />
										</button>
									</Nav>
								</Offcanvas.Body>
							</Navbar.Offcanvas>
						</Container>
					</Navbar>
				))}
			</>
		</div>
	);
}

export default NavHead;
