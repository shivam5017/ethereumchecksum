import React from "react";
import Spinner from "react-spinkit";

import palette from "../styles/palette";

const ActionButton = ({text, loading, style}) => (
	<div className={"wrap-form-btn-container"} style={style ? style : {}}>
		<button className={"wrap-form-btn"} style={{ background: loading ? palette.eth.complementary : palette.eth.main }}>
			{loading ? <Spinner name={"circle"} color={"white"} size={32} fadeIn={"none"} /> : text}
		</button>
	</div>
);


export default ActionButton;