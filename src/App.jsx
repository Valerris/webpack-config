import React, { useEffect } from "react"
import Cmp from "components/Cmp"
import imgSrc from "../public/assets/pic.jpg"

async function f() {
	try {
		const rs = await fetch("/test")

		const res = await rs.text()

		console.log(res)
	} catch (error) {
		console.log(error)
	}
}

export default function App() {
	useEffect(() => {
		// f()
	})

	return (
		<div>
			App root! It works! Yes sirskii!!!
			<img src={imgSrc} />
			<Cmp />
		</div>
	)
}
