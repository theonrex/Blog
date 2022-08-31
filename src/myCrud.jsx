import { useState, useEffect } from "react";
import {  Button, Form } from "react-bootstrap";

// getting the values of local storage


  const mylocalStorage = () => {
		const dataStorage = localStorage.getItem("booksArray");
		if (dataStorage) {
			return JSON.parse(dataStorage);
		} else {
			return [];
		}
	};
function MyCrud() {

  
	// input field states

	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [Year, setYear] = useState("");
	const [booksID, setBooksID] = useState(1);
	// main array of objects state || books state || books array of objects
	const [booksArray, setbooksArray] = useState(mylocalStorage());
	// form submit event

	const getStateSubmit = (e) => {
		e.preventDefault();
		let bookMain = {
			name,
			author,
			Year,
			booksID,
		};
		setbooksArray([...booksArray, bookMain]);
		setName("");
		setAuthor("");
		setYear("");
		// setBooksID;
	};
	//
	useEffect(() => {
		localStorage.setItem("booksArray", JSON.stringify(booksArray));
	}, [booksArray]);

	return (
		<div>
			<div className="col-md-4">
				<h3 className="float-left">Create a new Movie</h3>
				<br /> <br />
				<Form autoComplete="off" onSubmit={getStateSubmit}>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>name </Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Author </Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Year# </Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							value={Year}
							onChange={(e) => setYear(e.target.value)}
						/>
					</Form.Group>

					{/* Button*/}
					<div className="float-right">
						<Button
							variant="primary"
							type="submit"
							className="mx-2"
							onSubmit={getStateSubmit}
						>
							Save
						</Button>
						<Button variant="primary" type="button" className="mx-2">
							Update
						</Button>
					</div>
				</Form>
			</div>
			<div className="col-md-8 m">
				{booksArray.length > 0 && (
					<table class="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col"> Name</th>
								<th scope="col">Author</th>
								<th scope="col"> Year</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{/* {movies.map((movie, index) => { */}
							{/* return ( */}
							<tr key="">
								<th scope="row">{booksID} </th>
								<td> {name} </td>
								<td> {author} </td>
								<td> {Year} </td>
								<td> {} </td>
								<td>
									<i
										className="fa fa-pencil-square text-primary d-inline"
										aria-hidden="true"
										// onClick={() => selectMovie(movie.id)}
									></i>
									<i
										className="fa fa-trash text-danger d-inline mx-3"
										aria-hidden="true"
										// onClick={() => onDelete(movie.id)}
									></i>
								</td>
							</tr>
							{/* ); */}
							{/* })} */}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default MyCrud;
