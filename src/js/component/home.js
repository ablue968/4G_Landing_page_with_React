import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<div className="bigger">
				<Jumbotron />
				<div className=" box-width row d-flex justify-content-around">
					<Card
						text="Some quick example text to build on the card title and make
					up the bulk of the cards content."
						buttonText="Go somewhere"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
