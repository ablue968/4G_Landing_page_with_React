import React from "react";

const cardToDisplay = [
	{ title: "Card title 1" },
	{ title: "Card title 2" },
	{ title: "Card title 3" },
	{ title: "Card title 4" }
];

export function Card(props) {
	const { text, buttonText } = props;
	return (
		<>
			{cardToDisplay.map(({ title }, index) => {
				return (
					<div key={index}>
						<div className="card">
							<img
								src="https://via.placeholder.com/350x150"
								classsName="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<p className="card-text">{text}</p>
								<a href="#" className="btn btn-primary">
									{buttonText}
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
