import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron mt-5 text-left" id="video-container">
			<video id="main-video" loop="true" autoplay="true" muted="true" preload="true">
				<source src="test.mp4" type="video/mp4"></source>
				</video>
			<h1 className="display-2">Matthew Appelbaum</h1>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="mailto:mappel7676@gmail.com"
					role="button">
					Contact Me
				</a>
			</p>
		</div>
	);
};
export default Jumbotron;
