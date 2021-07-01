import React from "react";
import { array } from "./constant";
import PropTypes from "prop-types";

const Cards = (title, image, discription, goTo) => {
	return (
		<>
			<div key={title} className="card">
				<img
					className="card-img-top"
					src={image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{discription}</p>
				</div>
				<div className="card-footer d-flex justify-content-center bg-white">
					<a href={goTo} className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>

			<br />
		</>
	);
};

Cards.propTypes = {
	title: PropTypes.object,
	image: PropTypes.object,
	discription: PropTypes.object,
	goTo: PropTypes.object
};
export default Cards;
