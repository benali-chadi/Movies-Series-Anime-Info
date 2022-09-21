import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useOutsideClick } from "../../../lib/useOutsideClick";
import { FilterContext, FilterContextState } from "../../helpers/context";
import { DropDownHeader } from "./SortFilter";

const StatusFilter = () => {
	const { filters, setFilters } =
		useContext<FilterContextState>(FilterContext);
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("state");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));
	useEffect(() => {
		if (filters.state === "") setTitle("state");
		else setTitle(filters.state);
	}, [filters]);
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
			{/* Status filters */}
			{toggle && (
				<StatusDropDown
					setFilters={setFilters}
					filters={filters}
					hide={() => {
						setToggle(false);
					}}
				/>
			)}
		</div>
	);
};

function StatusDropDown({ setFilters, filters, hide }) {
	return (
		<div
			className={`flex overflow-auto absolute left-0 flex-col gap-2 p-2 w-max bg-gray-200 rounded-xl top-[50px] max-h-[15rem]`}
		>
			<DropDownHeader
				title="airing"
				handleClick={() => {
					setFilters({
						...filters,
						state: "airing",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="complete"
				handleClick={() => {
					setFilters({
						...filters,
						state: "complete",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="upcoming"
				handleClick={() => {
					setFilters({
						...filters,
						state: "upcoming",
					});
					hide();
				}}
			/>
		</div>
	);
}

export default StatusFilter;
