import React, { useState } from "react";
import DatePicker from "react-datepicker";
export const Register = () => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<>
			<DatePicker
				selected={startDate}
				onChange={date => {
					setStartDate(date);
					console.log(date);
				}}
			/>
			<select>
				<option>1</option>
				<option>2</option>
			</select>
		</>
	);
};
