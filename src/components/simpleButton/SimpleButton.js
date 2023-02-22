import React from "react";

import "./SimpleButton.css";

const SimpleButton = props => {
	const { labelButton, onClickButton } = props;

	return (
		<button className='simpleButton' onClick={onClickButton}>
			{labelButton}
		</button>
	);
};

export default SimpleButton;
