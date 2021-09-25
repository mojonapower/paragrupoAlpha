import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="mainContent ">
			<div className="row">
				<div className="col-6 inicio-sesion text-center">
					<h1 className="d-inline-block titulo-inicio-sesion">
						Iniciar sesión
					</h1>
				</div>
				<div className="figure col-6">
					<form className="offset-3 inicio-sesion2 text-center">
						<div className="form-group ">
							<label
								htmlFor="exampleInputEmail1"
								className="etiquetas">
								Email address
							</label>
							<input
								type="email"
								className="form-control cambio-input"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small
								id="emailHelp"
								className="form-text text-muted">
								Well never share your email with anyone else.
							</small>
						</div>
						<div className="form-group mt-4">
							<label
								htmlFor="exampleInputPassword1"
								className="etiquetas">
								Password
							</label>
							<input
								type="password"
								className="form-control cambio-input"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary w-50 mt-4 boton">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
