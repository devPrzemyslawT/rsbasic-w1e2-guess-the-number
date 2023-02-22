import React from "react";
import "./InNumber.css";

const InNumber = props => {
	const { placeholder, onChangeInput } = props;

	return (
		<input
			className='inNumber'
			type='number'
			placeholder={placeholder}
			onChange={onChangeInput}></input>
	);
};

export default InNumber;
