import React from "react"
import Cmp from "components/Cmp"
import imgSrc from "../public/assets/pic.jpg"

export default function App() {
	return (
		<div
			css={{
				backgroundColor: "red",
			}}
		>
			App root! It works! Yes sirskii!!!
			{/* <img src={imgSrc} /> */}
			<Cmp />
		</div>
	)
}
