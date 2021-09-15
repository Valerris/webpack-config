import React from "react"
import { ButtonS } from "components/styled"
import cls from "./styles.css"

export default function Cmp() {
	return (
		<div
			className={cls.css}
			css={{
				color: "green ",
			}}
		>
			I'm a new Cmp.
			<ButtonS>Click</ButtonS>
		</div>
	)
}
