import React, { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useOutsideClick } from "../../../lib/useOutsideClick";

const StatusFilter = () => {
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("Status");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));
	return (
		<div
			className="flex relative flex-col p-2 text-black bg-white rounded-xl cursor-pointer hover:bg-white/80"
			ref={myRef}
		>
			<div
				className="flex gap-2 items-center"
				onClick={() => setToggle(!toggle)}
			>
				<h3 className="text-xl font-bold">{title}</h3>
				<BsChevronDown />
			</div>
			{/* Sort filters */}
			{toggle && (
				<></>
				// <SortDropDown
				// 	setFilters={setFilters}
				// 	filters={filters}
				// 	hide={() => {
				// 		setToggle(false);
				// 	}}
				// 	changeTitle={setTitle}
				// />
			)}
		</div>
	);
};

function statusDropDown({}) {}

export default StatusFilter;
