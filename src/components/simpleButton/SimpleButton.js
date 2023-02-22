import React from "react";

import "./SimpleButton.css";

const SimpleButton = props => {
	const { labelButton } = props;

	return <button className='simpleButton'>{labelButton}</button>;
};

export default SimpleButton;
